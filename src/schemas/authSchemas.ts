import { emailRegex } from "@/src/regex/";
import { z } from "zod";

export const emailSchema = z
  .string({
    required_error: "Email is required.",
  })
  .max(320, "Wallet must be at most 320 characters.")
  .regex(emailRegex, "Invalid email address format.");

  export const passwordSchema = z
  .string({
    required_error: "Password can not be empty.",
  })
  .min(8, {
    message: "At least 8 characters.",
  })
  .regex(/(?=.*[A-Z])/, {
    message: "At least one uppercase character.",
  })
  .regex(/(?=.*[a-z])/, {
    message: "At least one lowercase character.",
  })
  .regex(/(?=.*\d)/, {
    message: "At least one digit.",
  })
  .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
    message: "At least one special character.",
  });
