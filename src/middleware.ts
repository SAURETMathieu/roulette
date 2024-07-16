import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/src/lib/supabase/middleware";
import { authentificationRoutes, privateRoutes } from "@/src/routes";
import createMiddleware from "next-intl/middleware";

import { localePrefix, locales, allPathnames } from "./config";

const handleI18nRouting = createMiddleware({
  localePrefix: localePrefix || "always",
  locales: locales || ["fr", "en"],
  defaultLocale: "fr",
  pathnames:allPathnames,
});

export async function middleware(request: NextRequest) {
  // Handle session updates
  const sessionResponse = await updateSession(request);

  // Handle i18n routing
  const i18nResponse = handleI18nRouting(request);

  // Redirect to the user's locale if it's not in the URL
  const locale = request.cookies.get("NEXT_LOCALE")?.value || "fr";

  const { pathname } = request.nextUrl;
  const localePattern = new RegExp(`^/(${locales.join("|")})`);

  if (!localePattern.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }

  const user = sessionResponse.headers.get("user")
    ? JSON.parse(sessionResponse.headers.get("user")!)
    : null;
  const pathWithoutLocale = pathname.replace(localePattern, "");

  const isExactUrl = (routeArray: string[], path: string) => {
    return routeArray.some((route) => route === path);
  };

  if (user && isExactUrl(authentificationRoutes, pathWithoutLocale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  if (!user && isExactUrl(privateRoutes, pathWithoutLocale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/login`;
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith(`/${locale}/admin`) && user?.role !== "admin") {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // Combine the i18n and session responses
  const response = i18nResponse || sessionResponse;
  if (i18nResponse && sessionResponse) {
    const combinedResponse = NextResponse.next();

    i18nResponse.headers.forEach((value, key) => {
      combinedResponse.headers.set(key, value);
    });
    sessionResponse.headers.forEach((value, key) => {
      if (key !== "user") {
        combinedResponse.headers.set(key, value);
      }
    });

    return combinedResponse;
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots).*)",
  ],
};
