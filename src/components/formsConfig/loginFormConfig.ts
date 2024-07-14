import { z } from "zod";
import { createEmailSchema, createPasswordSchema } from "@/src/schemas/authSchemas";

export const generateLoginFormSchema = (t:any) => {
  return z.object({
    email: createEmailSchema(t),
    password: createPasswordSchema(t),
  });
};

export const loginFormSchema = (t: (key: string) => string) => generateLoginFormSchema(t);

export const fieldConfig = (t:any) => ({
  email: {
    label: t("emailLabel"),
    inputProps: {
      placeholder: "john.doe@email.com",
      autoComplete: "email",
    },
  },
  password: {
    label: t("passwordLabel"),
    // description: "At least 8 characters, one uppercase, one lowercase, one digit, one special character.",
    inputProps: {
      type: "password",
      placeholder: "●●●●●●●●",
    },
  },
});
