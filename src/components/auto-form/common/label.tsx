import { FormLabel } from "@/src/components/ui/form";
import { cn } from "@/src/lib/utils";

function AutoFormLabel({
  label,
  isRequired,
  className,
}: {
  label: string;
  isRequired: boolean;
  className?: string;
}) {
  return (
    <>
      <FormLabel className={cn(className)}>
        {label}
        {isRequired && <span className="text-primary"> *</span>}
      </FormLabel>
    </>
  );
}

export default AutoFormLabel;
