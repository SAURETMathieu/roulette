import { createElement, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { Box } from "@/components/ui/box";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
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
        <FormControl>
          {type !== "password" ? (
            <Input
              className="border border-primary/40 hover:ring-1 hover:ring-ring"
              type={type}
              {...fieldPropsWithoutShowLabel}
            />
          ) : (
            <Box className="relative">
              <Input
                {...fieldPropsWithoutShowLabel}
                type={passwordVisibility ? "text" : "password"}
                autoComplete="on"
                className={`border border-primary/40 pr-12 hover:ring-1 hover:ring-ring`}
              />
              <Box
                className="absolute inset-y-0 right-0 flex cursor-pointer items-center p-3 text-muted-foreground"
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              >
                {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
                  className: "size-6",
                })}
              </Box>
            </Box>
          )}
        </FormControl>
        <AutoFormTooltip fieldConfigItem={fieldConfigItem} />
        <FormMessage />
      </FormItem>
    </div>
  );
}
