import { pathnames } from "./config";

type RoutePaths = keyof typeof pathnames;

// all can access
export const publicRoutes: RoutePaths[] = [
  "/",
  "/tables",
  "/dealers",
  "/sessions",
  "/draws",
  "/help",
  "/about",
  "/contact",
];

// should be disconnected to access
export const authentificationRoutes = [
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
];

// should be connected to access
export const privateRoutes = ["/profile", "/logout", "/settings"];

export const apiAuthPrefix = "/api/auth";

// api routes
export const apiRoutes = [
  "/api",
  "/api/auth/signin",
  "/api/auth/signin/callback",
  "/api/auth/signout",
  "/api/auth/signup",
  "/api/auth/forgot-password",
  "/api/auth/reset-password",
  "/api/auth/verify-email",
  "/api/auth/csrf",
  "/api/auth/callback/",
];

export const DEFAULT_LOGIN_REDIRECT = "/";
