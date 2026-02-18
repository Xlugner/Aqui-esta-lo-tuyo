import { defineMiddleware } from 'astro:middleware';
import { verifyAdminSession } from './lib/admin-auth';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Proteger rutas /admin/* excepto /admin/login
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const isAdmin = await verifyAdminSession(context.cookies);

    if (!isAdmin) {
      // Redirigir a login si no está autenticado
      return context.redirect('/admin/login');
    }
  }

  return next();
});
