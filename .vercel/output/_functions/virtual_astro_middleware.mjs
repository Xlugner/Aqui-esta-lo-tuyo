import { a6 as defineMiddleware, af as sequence } from './chunks/sequence_BUPkIzlm.mjs';
import 'piccolore';
import 'clsx';
import { v as verifyAdminSession } from './chunks/admin-auth_CO7OFhP7.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const isAdmin = await verifyAdminSession(context.cookies);
    if (!isAdmin) {
      return context.redirect("/admin/login");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
