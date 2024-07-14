import { useState } from "react";

import {
  FormControl,
  FormControlPassword,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import AutoFormLabel from "../common/label";
import AutoFormTooltip from "../common/tooltip";
import { AutoFormInputComponentProps } from "../types";

export default function AutoFormInput({
  label,
  isRequired,
  fieldConfigItem,
  fieldProps,
}: AutoFormInputComponentProps) {
  const { showLabel: _showLabel, ...fieldPropsWithoutShowLabel } = fieldProps;
  const showLabel = _showLabel === undefined ? true : _showLabel;
  const type = fieldProps.type || "text";
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  return (
    <div className="flex flex-row  items-center space-x-2">
      <FormItem className="flex w-full flex-col justify-start">
        {showLabel && (
          <AutoFormLabel
            label={fieldConfigItem?.label || label}
            isRequired={isRequired}
          />
        )}
        {type !== "password" ? (
          <FormControl>
            <Input
              className="border border-primary/40 hover:ring-1 hover:ring-ring"
              type={type}
              {...fieldPropsWithoutShowLabel}
            />
          </FormControl>
        ) : (
          <FormControlPassword
            passwordVisibility={passwordVisibility}
            setPasswordVisibility={setPasswordVisibility}
            fieldPropsWithoutShowLabel={fieldPropsWithoutShowLabel}
          />
        )}
        <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
        <FormMessage />
      </FormItem>
    </div>
  );
}
