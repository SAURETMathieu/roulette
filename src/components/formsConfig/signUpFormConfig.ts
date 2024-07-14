import { z } from "zod";
import { createEmailSchema, createPasswordSchema } from "@/src/schemas/authSchemas";

export const generateSignUpFormSchema = (t:any) => {
  return z.object({
    email: createEmailSchema(t),
    password: createPasswordSchema(t),
    passwordConfirm: createPasswordSchema(t)
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    path: ["passwordConfirm"],
    message: t("passwordDidntMatch"),
  });
};

export const signUpFormSchema = (t: (key: string) => string) => generateSignUpFormSchema(t);

export const fieldConfig = (t:any) => ({
  email: {
    label: t("emailLabel"),
    inputProps: {
      placeholder: "john.doe@email.com",
    },
  },
  password: {
    label: t("passwordLabel"),
    inputProps: {
      type: "password",
      placeholder: "●●●●●●●●",
    },
  },
  passwordConfirm: {
    passwordConfirm: t("confirmPasswordLabel"),
    description: t("confirmPasswordDescription"),
    inputProps: {
      type: "password",
      placeholder: "●●●●●●●●",
    },
  },
});
