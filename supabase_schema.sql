-- Make sure all columns exist
alter table public.contacts add column if not exists first_name text;
alter table public.contacts add column if not exists last_name text;
alter table public.contacts add column if not exists email text;
alter table public.contacts add column if not exists phone text;
alter table public.contacts add column if not exists course text;
alter table public.contacts add column if not exists message text;

-- Enable Row Level Security (RLS) if not already enabled
alter table public.contacts enable row level security;

-- Drop the policy if it exists so we can recreate it cleanly
drop policy if exists "Enable insert for everyone" on public.contacts;

-- Create policy to allow anonymous inserts (for public forms)
create policy "Enable insert for everyone" 
on public.contacts 
for insert 
to anon 
with check (true);
