-- Run once in the Supabase SQL editor: per-user daily AI counter (written only by the ask-coach function).
create table if not exists public.ai_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  calls int not null default 0,
  heavy int not null default 0,
  primary key (user_id, day)
);
alter table public.ai_usage enable row level security;
-- no policies: only the server (service role) reads and writes it
