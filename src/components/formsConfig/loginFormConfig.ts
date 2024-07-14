import { z } from "zod";
import { emailSchema, passwordSchema } from "@/src/schemas/authSchemas";

export const generateLoginFormSchema = () => {
  return z.object({
    email: emailSchema,
    password: passwordSchema,
  });
};

export const loginFormSchema = generateLoginFormSchema();

export const fieldConfig = {
  email: {
    label: "Email",
    inputProps: {
      placeholder: "john.doe@email.com",
    },
  },
  password: {
    password: "Password",
    // description: "At least 8 characters, one uppercase, one lowercase, one digit, one special character.",
    inputProps: {
      type: "password",
      placeholder: "●●●●●●●●",
    },
  },
};
