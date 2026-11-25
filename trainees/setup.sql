-- פרויקט Supabase נפרד למתאמנים: trainees (nfitogfumqmxirrmquhr). הפונקציה: supabase/functions/trainees-coach, מותקנת שם בשם ask-coach.
-- הרצה פעם אחת ב-Supabase: Dashboard -> SQL Editor -> New query -> הדבקה -> Run
-- טבלה לנתונים של אתר המתאמנים (נפרדת מ-app_state של האפליקציה האישית, כדי שהם לא ידרסו אחד את השני)
create table if not exists trainee_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table trainee_state enable row level security;

-- כל מתאמן רואה ומשנה רק את הנתונים שלו
create policy "trainee reads own state" on trainee_state for select using (auth.uid() = user_id);
create policy "trainee inserts own state" on trainee_state for insert with check (auth.uid() = user_id);
create policy "trainee updates own state" on trainee_state for update using (auth.uid() = user_id);

-- מונה שימוש יומי ב-AI (רק הפונקציה ask-coach בשרת כותבת אליו)
create table if not exists public.ai_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  calls int not null default 0,
  heavy int not null default 0,
  primary key (user_id, day)
);
alter table public.ai_usage enable row level security;
