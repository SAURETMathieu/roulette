import { Pathnames } from 'next-intl/navigation';

export const defaultLocale = 'fr' as const;
export const locales = ['fr', 'en'] as const;

export const pathnames = {
  '/': '/',
  '/tables': {
    en: '/tables',
    fr: '/tables'
  },
  '/dealers': {
    en: '/dealers',
    fr: '/croupiers'
  },
  '/session': {
    en: '/session',
    fr: '/session'
  },
  '/draws': {
    en: '/draws',
    fr: '/tirages'
  },
  '/help': {
    en: '/help',
    fr: '/aide'
  },
  '/settings': {
    en: '/settings',
    fr: '/parametres'
  },
  '/about': {
    en: '/about',
    fr: '/a-propos'
  },
  '/contact': {
    en: '/contact',
    fr: '/contact'
  },
  '/login': {
    en: '/login',
    fr: '/connexion'
  },
  '/register': {
    en: '/register',
    fr: '/inscription'
  },
  '/forgot-password': {
    en: '/forgot-password',
    fr: '/forgot-password'
  },
  '/reset-password': {
    en: '/reset-password',
    fr: '/reset-password'
  },
  '/profile': {
    en: '/profile',
    fr: '/profil'
  },
  '/support': {
    en: '/support',
    fr: '/support'
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;