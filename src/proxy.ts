import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// this was middleware.ts — next 16 renamed the convention to "proxy".
// it runs before the page and handles the language prefix: redirects
// "/" to "/en" based on the browser, and keeps /pt, /es working.
export default createMiddleware(routing);

export const config = {
  // don't run this on api routes, next internals, or files with an
  // extension (favicon.ico, images...) — only on real pages.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
