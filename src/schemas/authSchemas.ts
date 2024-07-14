import { emailRegex } from "@/src/regex/";
import { z } from "zod";

export const createEmailSchema = (t:any) => z
  .string({
    required_error: t("emailRequired"),
  })
  .max(320, t("emailMaxLength"))
  .regex(emailRegex, t("emailInvalidFormat"));

export const createPasswordSchema = (t:any) => z
  .string({
    required_error: t("passwordRequired"),
  })
  .min(8, {
    message: t("passwordMinLength"),
  })
  .regex(/(?=.*[A-Z])/, {
    message: t("passwordUppercase"),
  })
  .regex(/(?=.*[a-z])/, {
    message: t("passwordLowercase"),
  })
  .regex(/(?=.*\d)/, {
    message: t("passwordDigit"),
  })
  .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
    message: t("passwordSpecialChar"),
  });
