import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://jgyoodhsznqbmxibbszm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpneW9vZGhzem5xYm14aWJic3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMjg4MjEsImV4cCI6MjA4NTcwNDgyMX0.soArCF06JOmdjBuNENXG8m73K-PfGVvtmueADbIJoc0";
function getSupabaseServer(cookies) {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      detectSessionInUrl: false,
      persistSession: true,
      autoRefreshToken: false
    }
  });
  const accessToken = cookies.get("sb-access-token")?.value;
  const refreshToken = cookies.get("sb-refresh-token")?.value;
  if (accessToken && refreshToken) {
    supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken
    });
  }
  return supabase;
}
async function checkIsAdmin(supabase) {
  const { data: { user } } = await supabase.auth.getUser();
  console.log("🔍 Current user:", user);
  if (!user) {
    console.log("❌ No user found");
    return false;
  }
  const { data: adminUser } = await supabase.from("admin_users").select("id").eq("id", user.id).single();
  console.log("👤 Admin user found:", adminUser);
  return !!adminUser;
}
async function getCurrentAdmin(supabase) {
  const { data: { user } } = await supabase.auth.getUser();
  console.log("🔍 Getting current admin, user:", user);
  if (!user) {
    console.log("❌ No user found in getCurrentAdmin");
    return null;
  }
  const { data: adminUser } = await supabase.from("admin_users").select("id, email, full_name").eq("id", user.id).single();
  console.log("👤 Admin user data:", adminUser);
  return adminUser;
}
async function signInAdmin(email, password, cookies) {
  const supabase = getSupabaseServer(cookies);
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    return { success: false, error: error.message };
  }
  if (!data.session) {
    return { success: false, error: "No se pudo crear la sesión" };
  }
  const isAdmin = await checkIsAdmin(supabase);
  if (!isAdmin) {
    await supabase.auth.signOut();
    return { success: false, error: "No tienes permisos de administrador" };
  }
  cookies.set("sb-access-token", data.session.access_token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7
    // 7 días
  });
  cookies.set("sb-refresh-token", data.session.refresh_token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365
    // 1 año
  });
  return { success: true };
}
async function signOutAdmin(cookies) {
  const supabase = getSupabaseServer(cookies);
  await supabase.auth.signOut();
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });
}
async function changePassword(newPassword, cookies) {
  const supabase = getSupabaseServer(cookies);
  const { error } = await supabase.auth.updateUser({
    password: newPassword
  });
  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}
async function verifyAdminSession(cookies) {
  const supabase = getSupabaseServer(cookies);
  return checkIsAdmin(supabase);
}

export { signOutAdmin as a, getCurrentAdmin as b, changePassword as c, getSupabaseServer as g, signInAdmin as s, verifyAdminSession as v };
