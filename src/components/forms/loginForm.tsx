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

const CreateLoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    startTransition(async () => {
      const result = await signInWithPassword(data);
      if (result?.error) {
        toast.error(result.message);
      }
    });
  };

  return (
        <AutoForm
          formSchema={loginFormSchema}
          fieldConfig={fieldConfig}
          onSubmit={(values) => handleSubmit(values)}
          isDisabled={isPending}
        ></AutoForm>
  );
}

export default CreateLoginForm;
