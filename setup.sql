-- Run this once in Supabase: Dashboard -> SQL Editor -> New query -> paste -> Run

create table if not exists app_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table app_state enable row level security;

create policy "users can read own state"
  on app_state for select
  using (auth.uid() = user_id);

create policy "users can insert own state"
  on app_state for insert
  with check (auth.uid() = user_id);

create policy "users can update own state"
  on app_state for update
  using (auth.uid() = user_id);
