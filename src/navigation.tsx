import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {locales, allPathnames, localePrefix} from './config';

export type AppPathnames = keyof typeof allPathnames;

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames:allPathnames,
    localePrefix
  });