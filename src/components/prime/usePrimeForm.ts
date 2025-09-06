"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

// Validation schemas
export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  dob: z
    .string()
    .min(1, "Date of birth is required")
    .refine((dateStr) => {
      const date = new Date(dateStr);
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      const monthDiff = today.getMonth() - date.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
        return age - 1 >= 18;
      }
      return age >= 18;
    }, "You must be at least 18 years old"),
});

export const contactSchema = z.object({
  countryCode: z.string().min(1, "Country code is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
});

export const kycSchema = z.object({
  pan: z
    .string()
    .min(1, "PAN number is required")
    .regex(
      /^[A-Z]{5}[0-9]{4}[A-Z]$/,
      "Please enter a valid PAN number (e.g., ABCDE1234F)"
    ),
});

export const planSchema = z.object({
  planType: z.string().min(1, "Please select a plan"),
  disclaimerAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the disclaimers to continue"),
});

// Combined schema
export const primeFormSchema = personalInfoSchema
  .merge(contactSchema)
  .merge(kycSchema)
  .merge(planSchema);

export type PrimeFormData = z.infer<typeof primeFormSchema>;

// Step keys
export type StepKey = "personalInfo" | "contact" | "kyc" | "plan";

// Step configuration
export const steps = [
  {
    key: "personalInfo" as const,
    title: "Personal Info",
    subtitle: "Name, email & date of birth",
    icon: "User" as const,
    schema: personalInfoSchema,
    fields: ["fullName", "email", "dob"] as const,
  },
  {
    key: "contact" as const,
    title: "Contact",
    subtitle: "Phone & communication",
    icon: "Mail" as const,
    schema: contactSchema,
    fields: ["countryCode", "phone"] as const,
  },
  {
    key: "kyc" as const,
    title: "Kyc",
    subtitle: "PAN details",
    icon: "Cog" as const,
    schema: kycSchema,
    fields: ["pan"] as const,
  },
  {
    key: "plan" as const,
    title: "Plan",
    subtitle: "Choose subscription",
    icon: "SquareStack" as const,
    schema: planSchema,
    fields: ["planType", "disclaimerAccepted"] as const,
  },
];

// Hook for managing form state
export function usePrimeForm() {
  const [currentStep, setCurrentStep] = useState<StepKey>("personalInfo");
  const [completedSteps, setCompletedSteps] = useState<Set<StepKey>>(new Set());

  const form = useForm<PrimeFormData>({
    resolver: zodResolver(primeFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      dob: "",
      countryCode: "+91",
      phone: "",
      pan: "",
      planType: "",
      disclaimerAccepted: false,
    },
    mode: "onChange",
  });

  const { watch, trigger } = form;
  const watchedValues = watch();

  // Check if a step is completed
  const isStepCompleted = (stepKey: StepKey) => {
    const step = steps.find((s) => s.key === stepKey);
    if (!step) return false;

    try {
      const stepData = step.fields.reduce((acc, field) => {
        acc[field] = watchedValues[field];
        return acc;
      }, {} as any);
      
      step.schema.parse(stepData);
      return true;
    } catch {
      return false;
    }
  };

  // Validate and move to next step
  const validateAndProceed = async (stepKey: StepKey) => {
    const step = steps.find((s) => s.key === stepKey);
    if (!step) return false;

    const isValid = await trigger(step.fields as any);
    
    if (isValid && isStepCompleted(stepKey)) {
      setCompletedSteps((prev) => new Set([...prev, stepKey]));
      
      // Move to next step
      const currentStepIndex = steps.findIndex((s) => s.key === stepKey);
      const nextStep = steps[currentStepIndex + 1];
      if (nextStep) {
        setCurrentStep(nextStep.key);
      }
      return true;
    }
    return false;
  };

  // Navigate to specific step
  const goToStep = (stepKey: StepKey) => {
    setCurrentStep(stepKey);
  };

  // Submit form
  const onSubmit = (data: PrimeFormData) => {
    console.log("Prime form submitted:", data);
    // Handle form submission here
  };

  // Calculate progress
  const completedCount = completedSteps.size;
  const totalSteps = steps.length;
  const progress = (completedCount / totalSteps) * 100;

  return {
    form,
    currentStep,
    completedSteps,
    isStepCompleted,
    validateAndProceed,
    goToStep,
    onSubmit,
    progress: {
      completed: completedCount,
      total: totalSteps,
      percentage: progress,
    },
    steps,
  };
}