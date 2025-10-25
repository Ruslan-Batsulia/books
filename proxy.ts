import { routing } from "@/i18n/routing";
import createProxy from "next-intl/middleware";
 
export default createProxy(routing);
 
export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)"
};
