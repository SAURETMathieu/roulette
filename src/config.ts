import { Pathnames } from "next-intl/navigation";

export const defaultLocale = "fr" as const;
export const locales = ["fr", "en"] as const;

export type RouteType = "public" | "auth" | "private" | "api";

export const staticPathnames = {
  "/": "/",
  "/tables": {
    en: "/tables",
    fr: "/tables",
  },
  "/dealers": {
    en: "/dealers",
    fr: "/croupiers",
  },
  "/sessions": {
    en: "/sessions",
    fr: "/sessions",
  },
  "/draws": {
    en: "/draws",
    fr: "/tirages",
  },
  "/help": {
    en: "/help",
    fr: "/aide",
  },
  "/settings": {
    en: "/settings",
    fr: "/parametres",
  },
  "/about": {
    en: "/about",
    fr: "/a-propos",
  },
  "/contact": {
    en: "/contact",
    fr: "/contact",
  },
  "/login": {
    en: "/login",
    fr: "/login",
  },
  "/signup": {
    en: "/signup",
    fr: "/inscription",
  },
  "/forgot-password": {
    en: "/forgot-password",
    fr: "/forgot-password",
  },
  "/reset-password": {
    en: "/reset-password",
    fr: "/reset-password",
  },
  "/profile": {
    en: "/profile",
    fr: "/profil",
  },
  "/support": {
    en: "/support",
    fr: "/support",
  },
} satisfies Pathnames<typeof locales>;

export const dynamicPathNames = {
  "/tables/[tableId]/dealers": {
    en: "/tables/[tableId]/dealers",
    fr: "/tables/[tableId]/croupiers",
  },
} satisfies Pathnames<typeof locales>;

export const allPathnames = { ...staticPathnames, ...dynamicPathNames };

export const localePrefix = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
