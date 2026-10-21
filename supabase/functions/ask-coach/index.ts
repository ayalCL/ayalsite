// Deploy with: supabase functions deploy ask-coach
// Then set the secret once: supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
// This function runs on Supabase's servers - the API key never reaches the browser.
//
// Only signed-in users of the app can call it (checked below), so nobody can
// use the public site key to spend the Anthropic credit.
//
// Modes:
//   chat   - { messages: [{role, content}], images?: [{mediaType, data}], json?, max_tokens? }
//            Used by the app for the coach chat, plans, injury help, video and food analysis.
//            Images (base64) are attached to the last user message.
//   text   - { system, prompt }            (older app version)
//   vision - { image, mediaType, prompt }  (older app version)

import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const MODEL = "claude-sonnet-5";
const MAX_IMAGES = 4;
const MAX_MESSAGES = 40;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

type Msg = { role: "user" | "assistant"; content: string };
type Img = { mediaType: string; data: string };

const COACH_SYSTEM =
  "You are the personal coach inside the Personal Life Coach app. Follow the instructions in the user's messages. " +
  "Be practical, specific and brief. Never diagnose injuries: point to a doctor or physiotherapist when there are red flags.";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Signed-in users only.
  const authHeader = req.headers.get("Authorization") ?? "";
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return json({ error: { message: "Sign in to talk to the coach" } }, 401);
  }

  try {
    const body = await req.json();
    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) {
      return json({ error: { message: "ANTHROPIC_API_KEY not set on server" } }, 500);
    }

    let anthropicBody;
    if (body.mode === "chat") {
      const msgs: Msg[] = (Array.isArray(body.messages) ? body.messages : [])
        .filter((m: Msg) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
        .slice(-MAX_MESSAGES);
      if (!msgs.length || msgs[msgs.length - 1].role !== "user") {
        return json({ error: { message: "messages must end with a user message" } }, 400);
      }
      if (msgs[0].role !== "user") msgs.unshift({ role: "user", content: "שלום" });
      const images: Img[] = (Array.isArray(body.images) ? body.images : []).slice(0, MAX_IMAGES);
      const last = msgs[msgs.length - 1];
      const lastContent = images.length
        ? [
          ...images.map((im) => ({
            type: "image",
            source: { type: "base64", media_type: im.mediaType || "image/jpeg", data: im.data },
          })),
          { type: "text", text: last.content },
        ]
        : last.content;
      anthropicBody = {
        model: MODEL,
        max_tokens: Math.min(Math.max(Number(body.max_tokens) || 1200, 200), 2500),
        system: COACH_SYSTEM + (body.json ? " Reply with valid JSON only, no other text." : ""),
        messages: [...msgs.slice(0, -1), { role: "user", content: lastContent }],
      };
    } else if (body.mode === "vision") {
      anthropicBody = {
        model: MODEL,
        max_tokens: 300,
        messages: [{
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: body.mediaType, data: body.image } },
            { type: "text", text: body.prompt },
          ],
        }],
      };
    } else {
      anthropicBody = {
        model: MODEL,
        max_tokens: 1000,
        system: body.system,
        messages: [{ role: "user", content: body.prompt }],
      };
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(anthropicBody),
    });
    const data = await response.json();
    return json(data, response.ok ? 200 : response.status);
  } catch (e) {
    return json({ error: { message: String(e) } }, 500);
  }
});
