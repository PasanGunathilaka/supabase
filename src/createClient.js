import { createClient } from "@supabase/supabase-js";

export const supabase= createClient("https://woiitzjcnnuiunplacmo.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvaWl0empjbm51aXVucGxhY21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMzYwOTIsImV4cCI6MjAyNzcxMjA5Mn0.lyhD8-2cZKUVOpL66HaMglyEHDfYGYiD1_8m0jIXXTg")