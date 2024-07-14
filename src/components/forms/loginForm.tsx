"use client";

import AutoForm from "@/src/components/auto-form";
import { signInWithPassword } from "@/src/lib/auth/actions";
import { z } from 'zod';
import {
  fieldConfig,
  loginFormSchema,
} from "@/components/formsConfig/loginFormConfig";
import { useTransition } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const CreateLoginForm = () => {
  const t = useTranslations("Forms");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (data: z.infer<ReturnType<typeof loginFormSchema>>) => {
    startTransition(async () => {
      const result = await signInWithPassword(data);
      if (result?.error) {
        toast.error(result.message);
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
