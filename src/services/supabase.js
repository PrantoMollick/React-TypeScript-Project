import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://jdebkuepqvjkgsxvnbfu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZWJrdWVwcXZqa2dzeHZuYmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3MDI1NjgsImV4cCI6MjAwNjI3ODU2OH0.RR5f7rs8Yf6e4p8VnsBoFi9Cq0aeMzp95K936pNi2Ok';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
