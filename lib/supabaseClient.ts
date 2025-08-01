// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xfqavsldcdsfhdjefxzl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmcWF2c2xkY2RzZmhkamVmeHpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNjg3NTcsImV4cCI6MjA2OTY0NDc1N30.ODBimfNHvGx8UuIdjpcPIQ6JikLJS7wBSrAX4cIkqP0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
