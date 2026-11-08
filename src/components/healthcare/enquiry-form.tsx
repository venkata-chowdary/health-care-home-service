"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import type { FormEvent, ReactNode } from "react";

import { submitEnquiry } from "@/actions/submit-enquiry";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";
import { validateEnquiry } from "@/lib/validate-enquiry";
import type { EnquiryErrors } from "@/lib/validate-enquiry";

type EnquiryFormProps = {
  copy: {
    formLabel: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    whoLabel: string;
    whoDefault: string;
    whoOptions: string[];
    serviceLabel: string;
    serviceDefault: string;
    areaLabel: string;
    areaDefault: string;
    areaOther: string;
    startLabel: string;
    startDefault: string;
    startOptions: string[];
    careTypeLabel: string;
    careTypeDefault: string;
    careTypeOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    optionalLabel: string;
    consentLabel: string;
    submitLabel: string;
    sendingLabel: string;
    hint: string;
    successTitle: string;
    successBody: string;
    failureMessage: string;
  };
  serviceNames: string[];
  areaNames: string[];
  defaultService?: string;
};

const controlClasses =
  "w-full rounded-input border border-input bg-background px-4 text-base text-foreground transition-[border-color] duration-180 ease-standard placeholder:text-slate-400 focus:border-primary aria-invalid:border-error";

type FieldProps = {
  id: string;
  label: string;
  optionalLabel?: string;
  error?: string;
  fullWidth?: boolean;
  children: ReactNode;
};

function Field({ id, label, optionalLabel, error, fullWidth = false, children }: FieldProps) {
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
};

function SelectField({ id, name, label, defaultLabel, options, defaultValue = "" }: SelectFieldProps) {
  return (
    <Field id={id} label={label}>
      <div className="relative">
        <select id={id} name={name} defaultValue={defaultValue} className={cn(controlClasses, "h-[50px] appearance-none pr-10")}>
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

export function EnquiryForm({ copy, serviceNames, areaNames, defaultService }: EnquiryFormProps) {
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "failed">("idle");
  const [isSending, startSending] = useTransition();
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== "idle") {
      statusRef.current?.focus();
    }
  }, [status]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const foundErrors = validateEnquiry({
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
    });

    setStatus("idle");
    setErrors(foundErrors);

    const firstInvalidField = foundErrors.name ? "name" : foundErrors.phone ? "phone" : null;
    if (firstInvalidField) {
      (form.elements.namedItem(firstInvalidField) as HTMLInputElement).focus();
      return;
    }

    startSending(async () => {
      try {
        const result = await submitEnquiry(formData);
        if (!result.ok) {
          setErrors(result.errors);
          if (!result.errors.name && !result.errors.phone) {
            setStatus("failed");
            return;
          }
          const serverInvalidField = result.errors.name ? "name" : "phone";
          (form.elements.namedItem(serverInvalidField) as HTMLInputElement).focus();
          return;
        }
        form.reset();
        setStatus("success");
      } catch {
        setStatus("failed");
      }
    });
  }

  return (
    <form
      noValidate
      aria-label={copy.formLabel}
      aria-busy={isSending || undefined}
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-[18px] rounded-panel border border-border bg-background p-8 max-[640px]:grid-cols-1 max-[640px]:rounded-card max-[640px]:p-5"
    >
      <Field id="enquiry-name" label={copy.nameLabel} error={errors.name}>
        <input
          id="enquiry-name"
          name="name"
          required
          autoComplete="name"
          placeholder={copy.namePlaceholder}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "enquiry-name-error" : undefined}
          className={cn(controlClasses, "h-[50px]")}
        />
      </Field>

      <Field id="enquiry-phone" label={copy.phoneLabel} error={errors.phone}>
        <input
          id="enquiry-phone"
          name="phone"
          required
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder={copy.phonePlaceholder}
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
          className={cn(controlClasses, "h-[50px]")}
        />
      </Field>

      <SelectField id="enquiry-who" name="whoNeedsCare" label={copy.whoLabel} defaultLabel={copy.whoDefault} options={copy.whoOptions} />
      <SelectField id="enquiry-service" name="service" label={copy.serviceLabel} defaultLabel={copy.serviceDefault} options={serviceNames} defaultValue={defaultService} />
      <SelectField id="enquiry-area" name="area" label={copy.areaLabel} defaultLabel={copy.areaDefault} options={[...areaNames, copy.areaOther]} />
      <SelectField id="enquiry-start" name="startTime" label={copy.startLabel} defaultLabel={copy.startDefault} options={copy.startOptions} />
      <SelectField id="enquiry-care-type" name="careType" label={copy.careTypeLabel} defaultLabel={copy.careTypeDefault} options={copy.careTypeOptions} />

      <Field id="enquiry-message" label={copy.messageLabel} optionalLabel={copy.optionalLabel} fullWidth>
        <textarea id="enquiry-message" name="message" placeholder={copy.messagePlaceholder} className={cn(controlClasses, "h-[104px] resize-y py-3.5")} />
      </Field>

      <label htmlFor="enquiry-consent" className="col-span-full flex cursor-pointer items-start gap-3 text-body-sm text-muted-foreground">
        <input id="enquiry-consent" name="consent" type="checkbox" className="mt-px size-5 flex-none accent-primary" />
        {copy.consentLabel}
      </label>

      <div className="col-span-full flex flex-wrap items-center gap-3.5">
        <Button type="submit" loading={isSending} iconAfter="arrow-right">
          {isSending ? copy.sendingLabel : copy.submitLabel}
        </Button>
        <span className="text-caption text-muted-foreground">{copy.hint}</span>
      </div>

      <div ref={statusRef} role="status" tabIndex={-1} className="col-span-full rounded-input empty:hidden">
        {status === "success" && (
          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-input bg-success-surface p-[16px_18px] text-[14.5px] text-foreground">
            <Icon name="circle-check" size={20} className="text-success" />
            <p>
              <b className="font-semibold">{copy.successTitle}</b> {copy.successBody}
            </p>
          </div>
        )}
        {status === "failed" && (
          <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-input bg-error-surface p-[16px_18px] text-[14.5px] text-foreground">
            <Icon name="circle-alert" size={20} className="text-error" />
            <p>{copy.failureMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}
