const SUPABASE_URL = "https://iqjdkeafeedgfkwxbiqk.supabase.co";
const SUPABASE_KEY = "sb_publishable_HxA5631QYdh5AEYmYvuQYw_8sVIV6gg";

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
script.onload = () => {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );
  console.log("EGRA SCHOOL DATABASE CONNECTED!");
};
document.head.appendChild(script); 
