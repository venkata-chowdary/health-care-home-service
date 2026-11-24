"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import type { FormEvent } from "react";

import { submitAppointment } from "@/actions/submit-appointment";
import { Button } from "@/components/ui/button";
import { controlClasses, Field, SelectField } from "@/components/ui/form-field";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";
import { appointmentFieldOrder, validateAppointment } from "@/lib/validate-appointment";
import type { AppointmentErrors } from "@/lib/validate-appointment";

type AppointmentFormProps = {
  copy: {
    formLabel: string;
    patientNameLabel: string;
    contactNameLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    areaLabel: string;
    areaPlaceholder: string;
    serviceLabel: string;
    serviceDefault: string;
    serviceOther: string;
    dateLabel: string;
    timeLabel: string;
    timeDefault: string;
    timeOptions: string[];
    requirementsLabel: string;
    requirementsPlaceholder: string;
    messageLabel: string;
    optionalLabel: string;
    consentLabel: string;
    privacyLinkLabel: string;
    submitLabel: string;
    sendingLabel: string;
    successTitle: string;
    successBody: string;
    failureMessage: string;
  };
  serviceNames: string[];
  serviceSlugs: string[];
};

export function AppointmentForm({ copy, serviceNames, serviceSlugs }: AppointmentFormProps) {
  const [errors, setErrors] = useState<AppointmentErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "failed">("idle");
  const [isSending, startSending] = useTransition();
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const requestedSlug = new URLSearchParams(window.location.search).get("service");
    const requestedIndex = serviceSlugs.indexOf(requestedSlug ?? "");
    const serviceSelect = document.getElementById("appointment-service");
    if (requestedIndex !== -1 && serviceSelect instanceof HTMLSelectElement) {
      serviceSelect.value = serviceNames[requestedIndex];
    }
  }, [serviceNames, serviceSlugs]);

  useEffect(() => {
    if (status !== "idle") {
      statusRef.current?.focus();
    }
  }, [status]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const foundErrors = validateAppointment({
      patientName: String(formData.get("patientName") ?? ""),
      contactName: String(formData.get("contactName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      whatsapp: String(formData.get("whatsapp") ?? ""),
      email: String(formData.get("email") ?? ""),
      area: String(formData.get("area") ?? ""),
      service: String(formData.get("service") ?? ""),
      requirements: String(formData.get("requirements") ?? ""),
      consent: formData.get("consent") === "on",
    });

    setStatus("idle");
    setErrors(foundErrors);

    const firstInvalidField = appointmentFieldOrder.find((fieldName) => foundErrors[fieldName as keyof AppointmentErrors]);
    if (firstInvalidField) {
      (form.elements.namedItem(firstInvalidField) as HTMLElement).focus();
      return;
    }

    startSending(async () => {
      try {
        const result = await submitAppointment(formData);
        if (!result.ok) {
          setErrors(result.errors);
          const serverInvalidField = appointmentFieldOrder.find((fieldName) => (result.errors as AppointmentErrors)[fieldName as keyof AppointmentErrors]);
          if (!serverInvalidField) {
            setStatus("failed");
            return;
          }
          (form.elements.namedItem(serverInvalidField) as HTMLElement).focus();
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
      <Field id="appointment-patient-name" label={copy.patientNameLabel} error={errors.patientName}>
        <input
          id="appointment-patient-name"
          name="patientName"
          required
          autoComplete="off"
          aria-invalid={errors.patientName ? true : undefined}
          aria-describedby={errors.patientName ? "appointment-patient-name-error" : undefined}
          className={cn(controlClasses, "h-[50px]")}
        />
      </Field>

      <Field id="appointment-contact-name" label={copy.contactNameLabel} error={errors.contactName}>
        <input
          id="appointment-contact-name"
          name="contactName"
          required
          autoComplete="name"
          aria-invalid={errors.contactName ? true : undefined}
          aria-describedby={errors.contactName ? "appointment-contact-name-error" : undefined}
          className={cn(controlClasses, "h-[50px]")}
        />
      </Field>

      <Field id="appointment-phone" label={copy.phoneLabel} error={errors.phone}>
        <input
          id="appointment-phone"
          name="phone"
          required
          inputMode="numeric"
          autoComplete="tel-national"
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "appointment-phone-error" : undefined}
          className={cn(controlClasses, "h-[50px]")}
        />
      </Field>

      <Field id="appointment-whatsapp" label={copy.whatsappLabel} optionalLabel={copy.optionalLabel} error={errors.whatsapp}>
        <input
          id="appointment-whatsapp"
          name="whatsapp"
          inputMode="numeric"
          autoComplete="off"
          aria-invalid={errors.whatsapp ? true : undefined}
          aria-describedby={errors.whatsapp ? "appointment-whatsapp-error" : undefined}
          className={cn(controlClasses, "h-[50px]")}
        />
      </Field>

      <Field id="appointment-email" label={copy.emailLabel} optionalLabel={copy.optionalLabel} error={errors.email}>
        <input
          id="appointment-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "appointment-email-error" : undefined}
          className={cn(controlClasses, "h-[50px]")}
        />
      </Field>

      <Field id="appointment-area" label={copy.areaLabel} error={errors.area}>
        <input
          id="appointment-area"
          name="area"
          required
          autoComplete="off"
          placeholder={copy.areaPlaceholder}
          aria-invalid={errors.area ? true : undefined}
          aria-describedby={errors.area ? "appointment-area-error" : undefined}
          className={cn(controlClasses, "h-[50px]")}
        />
      </Field>

      <SelectField
        id="appointment-service"
        name="service"
        label={copy.serviceLabel}
        defaultLabel={copy.serviceDefault}
        options={[...serviceNames, copy.serviceOther]}
        error={errors.service}
      />

      <Field id="appointment-date" label={copy.dateLabel} optionalLabel={copy.optionalLabel}>
        <input id="appointment-date" name="preferredDate" type="date" className={cn(controlClasses, "h-[50px] min-w-0")} />
      </Field>

      <SelectField id="appointment-time" name="preferredTime" label={copy.timeLabel} defaultLabel={copy.timeDefault} options={copy.timeOptions} optionalLabel={copy.optionalLabel} />

      <Field id="appointment-requirements" label={copy.requirementsLabel} error={errors.requirements} fullWidth>
        <textarea
          id="appointment-requirements"
          name="requirements"
          required
          placeholder={copy.requirementsPlaceholder}
          aria-invalid={errors.requirements ? true : undefined}
          aria-describedby={errors.requirements ? "appointment-requirements-error" : undefined}
          className={cn(controlClasses, "h-[104px] resize-y py-3.5")}
        />
      </Field>

      <Field id="appointment-message" label={copy.messageLabel} optionalLabel={copy.optionalLabel} fullWidth>
        <textarea id="appointment-message" name="message" className={cn(controlClasses, "h-[104px] resize-y py-3.5")} />
      </Field>

      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="appointment-website">Leave this field empty</label>
        <input id="appointment-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="col-span-full grid gap-1.5">
        <div className="flex min-h-tap items-start gap-3 py-3 text-body-sm text-muted-foreground">
          <input
            id="appointment-consent"
            name="consent"
            type="checkbox"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "appointment-consent-error" : undefined}
            className="mt-px size-5 flex-none cursor-pointer accent-primary"
          />
          <span>
            <label htmlFor="appointment-consent" className="cursor-pointer">
              {copy.consentLabel}
            </label>{" "}
            <a href="/privacy" className="font-medium text-primary underline underline-offset-2">
              {copy.privacyLinkLabel}
            </a>
          </span>
        </div>
        {errors.consent && (
          <span id="appointment-consent-error" className="flex items-center gap-1.5 text-caption text-error">
            <Icon name="circle-alert" size={14} className="flex-none" />
            {errors.consent}
          </span>
        )}
      </div>

      <div className="col-span-full">
        <Button type="submit" loading={isSending} iconBefore="house">
          {isSending ? copy.sendingLabel : copy.submitLabel}
        </Button>
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
