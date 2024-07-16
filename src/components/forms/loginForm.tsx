"use client";

import AutoForm from "@/src/components/auto-form";
import { z } from 'zod';
import {
  fieldConfig,
  loginFormSchema,
} from "@/components/formsConfig/loginFormConfig";
import { useTransition } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { supabaseClient } from "@/src/lib/supabase/client";
import { useRouter } from "next/navigation";

const CreateLoginForm = () => {
  const t = useTranslations("Forms");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = async (data: z.infer<ReturnType<typeof loginFormSchema>>) => {
    startTransition(async () => {
      const { error } = await supabaseClient.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) {
        toast.error(error.message);
      }else{
        router.push('/');
      }
    });
  };

  return (
        <AutoForm
          formSchema={loginFormSchema(t)}
          fieldConfig={fieldConfig(t)}
          onSubmit={(values) => handleSubmit(values)}
          isDisabled={isPending}
        ></AutoForm>
  );
}

export default CreateLoginForm;
