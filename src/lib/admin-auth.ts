import { createClient } from '@supabase/supabase-js';
import type { AstroCookies } from 'astro';

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

// Cliente Supabase para uso en el servidor
export function getSupabaseServer(cookies: AstroCookies) {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      detectSessionInUrl: false,
      persistSession: true,
      autoRefreshToken: false,
    },
  });

  // Restaurar sesión desde cookies
  const accessToken = cookies.get('sb-access-token')?.value;
  const refreshToken = cookies.get('sb-refresh-token')?.value;

  if (accessToken && refreshToken) {
    supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  }

  return supabase;
}

// Interfaz para el usuario admin
export interface AdminUser {
  id: string;
  email: string;
  full_name?: string;
}

// Verificar si el usuario actual es admin
export async function checkIsAdmin(supabase: ReturnType<typeof getSupabaseServer>): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return false;

  const { data: adminUser } = await supabase
    .from('admin_users')
    .select('id')
    .eq('id', user.id)
    .single();

  return !!adminUser;
}

// Obtener el usuario admin actual
export async function getCurrentAdmin(supabase: ReturnType<typeof getSupabaseServer>): Promise<AdminUser | null> {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;

  const { data: adminUser } = await supabase
    .from('admin_users')
    .select('*')
    .eq('id', user.id)
    .single();

  return adminUser;
}

// Iniciar sesión
export async function signInAdmin(
  email: string,
  password: string,
  cookies: AstroCookies
): Promise<{ success: boolean; error?: string }> {
  const supabase = getSupabaseServer(cookies);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  if (!data.session) {
    return { success: false, error: 'No se pudo crear la sesión' };
  }

  // Verificar que es admin
  const isAdmin = await checkIsAdmin(supabase);
  if (!isAdmin) {
    await supabase.auth.signOut();
    return { success: false, error: 'No tienes permisos de administrador' };
  }

  // Guardar sesión en cookies
  cookies.set('sb-access-token', data.session.access_token, {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 días
  });

  cookies.set('sb-refresh-token', data.session.refresh_token, {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365, // 1 año
  });

  return { success: true };
}

// Cerrar sesión
export async function signOutAdmin(cookies: AstroCookies): Promise<void> {
  const supabase = getSupabaseServer(cookies);
  await supabase.auth.signOut();

  cookies.delete('sb-access-token', { path: '/' });
  cookies.delete('sb-refresh-token', { path: '/' });
}

// Cambiar contraseña
export async function changePassword(
  newPassword: string,
  cookies: AstroCookies
): Promise<{ success: boolean; error?: string }> {
  const supabase = getSupabaseServer(cookies);

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

// Verificar sesión activa (para middleware)
export async function verifyAdminSession(cookies: AstroCookies): Promise<boolean> {
  const supabase = getSupabaseServer(cookies);
  return checkIsAdmin(supabase);
}
