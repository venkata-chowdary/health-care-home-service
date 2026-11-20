import type { ReactNode } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export const controlClasses =
  "w-full rounded-input border border-input bg-background px-4 text-base text-foreground transition-[border-color] duration-180 ease-standard placeholder:text-slate-400 focus:border-primary aria-invalid:border-error";

type FieldProps = {
  id: string;
  label: string;
  optionalLabel?: string;
  error?: string;
  fullWidth?: boolean;
  children: ReactNode;
};

export function Field({ id, label, optionalLabel, error, fullWidth = false, children }: FieldProps) {
  return (
    <div className={cn("grid content-start gap-[7px]", fullWidth && "col-span-full")}>
      <label htmlFor={id} className="text-body-sm font-medium">
        {label}
        {optionalLabel && <span className="font-normal text-muted-foreground"> {optionalLabel}</span>}
      </label>
      {children}
      {error && (
        <span id={`${id}-error`} className="flex items-center gap-1.5 text-caption text-error">
          <Icon name="circle-alert" size={14} className="flex-none" />
          {error}
        </span>
      )}
    </div>
  );
}

type SelectFieldProps = {
  id: string;
  name: string;
  label: string;
  defaultLabel: string;
  options: string[];
  defaultValue?: string;
  optionalLabel?: string;
  error?: string;
};

export function SelectField({ id, name, label, defaultLabel, options, defaultValue = "", optionalLabel, error }: SelectFieldProps) {
  return (
    <Field id={id} label={label} optionalLabel={optionalLabel} error={error}>
      <div className="relative">
        <select
          id={id}
          name={name}
          defaultValue={defaultValue}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(controlClasses, "h-[50px] appearance-none pr-10")}
        >
          <option value="">{defaultLabel}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Icon name="chevron-right" size={16} className="pointer-events-none absolute top-1/2 right-4 translate-y-[-50%] rotate-90 text-muted-foreground" />
      </div>
    </Field>
  );
}
