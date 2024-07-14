"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServer } from "@/src/lib/supabase/server";
import { z } from "zod";

import { loginFormSchema } from "@/components/formsConfig/loginFormConfig";
import { signUpFormSchema } from "@/components/formsConfig/signUpFormConfig";

export const signInWithPassword = async (
  data: z.infer<typeof loginFormSchema>
) => {
  const supabase = createServer();
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return {
      message: error.message,
      error: true,
      status: error.status,
    };
  }
  const locale = cookies().get("NEXT_LOCALE")?.value || "fr";
  redirect(`/${locale}`);
};

export const signUpWithPassword = async (
  data: z.infer<typeof signUpFormSchema>
) => {
  const supabase = createServer();
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    // options: {
    //   data: {
    //     firstname: "John",
    //     lastname: "Doe",
    //   },
    // },
  });

  if (error) {
    return {
      message: error.message,
      error: true,
      status: error.status,
    };
  }
  const locale = cookies().get("NEXT_LOCALE")?.value || "fr";
  redirect(`/${locale}/login`);
  //redirect('/auth/confirmation');
};

export const signOut = async () => {
  const supabase = createServer();
  await supabase.auth.signOut();
  const locale = cookies().get("NEXT_LOCALE")?.value || "fr";
  redirect(`/${locale}/login`);
};

export const sentResetPassword = async (email: string) => {
  const supabase = createServer();
  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    return {
      message: error.message,
      error: true,
      status: error.status,
    };
  }
};

export const resetPassword = async (password: string) => {
  const supabase = createServer();
  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    return {
      message: error.message,
      error: true,
      status: error.status,
    };
  }
};

export const sendMagicLink = async (email: string) => {
  const supabase = createServer();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
    },
  });

  if (error) {
    return {
      message: error.message,
      error: true,
      status: error.status,
    };
  }
};
