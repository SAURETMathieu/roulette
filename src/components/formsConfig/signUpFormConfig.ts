import { z } from "zod";
import { emailSchema, passwordSchema } from "@/src/schemas/authSchemas";

export const generateSignUpFormSchema = () => {
  return z.object({
    email: emailSchema,
    password: passwordSchema,
    passwordConfirm: passwordSchema
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Password didn't match.",
  });
};

export const signUpFormSchema = generateSignUpFormSchema();

export const fieldConfig = {
  email: {
    label: "Email",
    inputProps: {
      placeholder: "john.doe@email.com",
    },
  },
  password: {
    password: "Password",
    inputProps: {
      type: "password",
      placeholder: "●●●●●●●●",
    },
  },
  passwordConfirm: {
    passwordConfirm: "passwordConfirm",
    description: "Passwords should be at least 8 characters, one uppercase, one lowercase, one digit, one special character.",
    inputProps: {
      type: "password",
      placeholder: "●●●●●●●●",
    },
  },
};
