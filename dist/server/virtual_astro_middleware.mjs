import { a7 as defineMiddleware, ag as sequence } from './chunks/sequence_B6kYL9KL.mjs';
import 'piccolore';
import 'clsx';
import { v as verifyAdminSession } from './chunks/admin-auth_HFCdXdjY.mjs';

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
