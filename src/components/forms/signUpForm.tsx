"use client";

import AutoForm from "@/src/components/auto-form";
import { signUpWithPassword } from "@/src/lib/auth/actions";
import { z } from 'zod';
import {
  fieldConfig,
  signUpFormSchema,
} from "@/components/formsConfig/signUpFormConfig";
import { useTransition } from "react";
import { toast } from "sonner";

const CreateSignupForm = () => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (data: z.infer<typeof signUpFormSchema>) => {
    startTransition(async () => {
      const result = await signUpWithPassword(data);
      if (result?.error) {
        toast.error(result.message);
      }
    });
  };

  return (
        <AutoForm
          formSchema={signUpFormSchema}
          fieldConfig={fieldConfig}
          onSubmit={(values) => handleSubmit(values)}
          isDisabled={isPending}
        ></AutoForm>
  );
}

export default CreateSignupForm;
