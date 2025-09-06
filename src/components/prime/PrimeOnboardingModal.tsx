"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Mail,
  Cog,
  SquareStack,
  Calendar,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePrimeForm, type StepKey } from "./usePrimeForm";
import { Controller } from "react-hook-form";

interface PrimeOnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const iconMap = {
  User,
  Mail,
  Cog,
  SquareStack,
} as const;

const countryCodeOptions = [
  { label: "+91", value: "+91" },
  { label: "+1", value: "+1" },
  { label: "+44", value: "+44" },
  { label: "+61", value: "+61" },
];

export default function PrimeOnboardingModal({
  open,
  onOpenChange,
}: PrimeOnboardingModalProps) {
  const {
    form,
    currentStep,
    completedSteps,
    isStepCompleted,
    validateAndProceed,
    goToStep,
    onSubmit,
    progress,
    steps,
  } = usePrimeForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const handleStepContinue = async (stepKey: StepKey) => {
    await validateAndProceed(stepKey);
  };

  const handleFinalSubmit = () => {
    if (isStepCompleted("plan")) {
      handleSubmit(onSubmit)();
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] md:max-w-[460px] lg:max-w-[480px] p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
        {/* Header with gradient background */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A60F1] to-[#3F2CA8]" />
          <div className="relative flex items-center justify-between px-6 py-6 min-h-[88px]">
            <div>
              <DialogTitle className="text-xl font-semibold text-white tracking-tight">
                prime
              </DialogTitle>
              <DialogDescription className="text-white/80 text-sm">
                Complete your subscription
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/10 rounded-lg"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-6 py-4 bg-slate-50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-700">Progress</span>
            <span className="text-sm text-slate-600 bg-white px-2 py-1 rounded-full text-xs">
              {progress.completed}/{progress.total} Complete
            </span>
          </div>
          <div className="relative w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#4C6FFF] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>

        {/* Form sections */}
        <div className="flex-1 overflow-y-auto p-4 max-h-[60vh]">
          <div className="space-y-3">
            <Accordion
              type="single"
              collapsible
              value={currentStep}
              onValueChange={(value) => value && goToStep(value as StepKey)}
              className="space-y-3"
            >
              {steps.map((step) => {
                const Icon = iconMap[step.icon];
                const isCompleted = completedSteps.has(step.key);
                const isActive = currentStep === step.key;

                return (
                  <AccordionItem
                    key={step.key}
                    value={step.key}
                    className={cn(
                      "border-none rounded-2xl transition-all duration-200 overflow-hidden",
                      "border border-slate-200 bg-white",
                      isActive && "ring-1 ring-[#4C6FFF]/30"
                    )}
                  >
                    <AccordionTrigger className="px-4 py-4 hover:no-underline">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 text-[#4C6FFF]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-base font-semibold text-slate-900">
                              {step.title}
                            </h3>
                            <p className="text-sm text-slate-500">{step.subtitle}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {isCompleted && (
                            <Badge className="bg-emerald-50 text-emerald-600 hover:bg-emerald-50 text-xs">
                              ✓ Done
                            </Badge>
                          )}
                          {isActive && !isCompleted && (
                            <Badge className="bg-indigo-50 text-indigo-600 hover:bg-indigo-50 text-xs">
                              In Progress
                            </Badge>
                          )}
                          <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-200 ui-open:rotate-180" />
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-4 pt-2">
                        {/* Personal Info Step */}
                        {step.key === "personalInfo" && (
                          <>
                            <div className="space-y-2">
                              <Label htmlFor="fullName" className="text-sm font-medium">
                                Full Name <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="fullName"
                                placeholder="Enter your full name"
                                className={cn(
                                  "h-11 rounded-lg border-slate-300 focus:border-[#4C6FFF] focus:ring-[#4C6FFF]/40",
                                  errors.fullName && "border-red-300 focus:border-red-500"
                                )}
                                {...register("fullName")}
                              />
                              {errors.fullName && (
                                <p className="text-xs text-red-600">
                                  {errors.fullName.message}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-sm font-medium">
                                Email Address <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                className={cn(
                                  "h-11 rounded-lg border-slate-300 focus:border-[#4C6FFF] focus:ring-[#4C6FFF]/40",
                                  errors.email && "border-red-300 focus:border-red-500"
                                )}
                                {...register("email")}
                              />
                              {errors.email && (
                                <p className="text-xs text-red-600">
                                  {errors.email.message}
                                </p>
                              )}
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="dob" className="text-sm font-medium">
                                Date of Birth <span className="text-red-500">*</span>
                              </Label>
                              <div className="relative">
                                <Input
                                  id="dob"
                                  type="date"
                                  className={cn(
                                    "h-11 rounded-lg border-slate-300 focus:border-[#4C6FFF] focus:ring-[#4C6FFF]/40",
                                    errors.dob && "border-red-300 focus:border-red-500"
                                  )}
                                  {...register("dob")}
                                />
                                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                              </div>
                              {errors.dob && (
                                <p className="text-xs text-red-600">
                                  {errors.dob.message}
                                </p>
                              )}
                            </div>

                            <Button
                              onClick={() => handleStepContinue("personalInfo")}
                              disabled={!isStepCompleted("personalInfo")}
                              className="w-full h-11 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-500 text-white"
                            >
                              Continue to Contact
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </>
                        )}

                        {/* Contact Step */}
                        {step.key === "contact" && (
                          <>
                            <div className="space-y-2">
                              <Label className="text-sm font-medium">
                                Phone Number <span className="text-red-500">*</span>
                              </Label>
                              <div className="flex space-x-2">
                                <Controller
                                  name="countryCode"
                                  control={control}
                                  render={({ field }) => (
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}
                                    >
                                      <SelectTrigger className="w-20 h-11 rounded-lg border-slate-300">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {countryCodeOptions.map((option) => (
                                          <SelectItem
                                            key={option.value}
                                            value={option.value}
                                          >
                                            {option.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  )}
                                />
                                <Input
                                  type="tel"
                                  placeholder="Enter mobile number"
                                  className={cn(
                                    "flex-1 h-11 rounded-lg border-slate-300 focus:border-[#4C6FFF] focus:ring-[#4C6FFF]/40",
                                    errors.phone && "border-red-300 focus:border-red-500"
                                  )}
                                  {...register("phone")}
                                />
                              </div>
                              {errors.phone && (
                                <p className="text-xs text-red-600">
                                  {errors.phone.message}
                                </p>
                              )}
                            </div>

                            <Button
                              onClick={() => handleStepContinue("contact")}
                              disabled={!isStepCompleted("contact")}
                              className="w-full h-11 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-500 text-white"
                            >
                              Continue to Investment
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </>
                        )}

                        {/* KYC Step */}
                        {step.key === "kyc" && (
                          <>
                            <div className="space-y-2">
                              <Label htmlFor="pan" className="text-sm font-medium">
                                PAN Number <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="pan"
                                placeholder="ENTER PAN (E.G., ABCDE1234F)"
                                className={cn(
                                  "h-11 rounded-lg border-slate-300 focus:border-[#4C6FFF] focus:ring-[#4C6FFF]/40 uppercase",
                                  errors.pan && "border-red-300 focus:border-red-500"
                                )}
                                maxLength={10}
                                {...register("pan", {
                                  onChange: (e) => {
                                    e.target.value = e.target.value.toUpperCase();
                                  },
                                })}
                              />
                              {errors.pan && (
                                <p className="text-xs text-red-600">
                                  {errors.pan.message}
                                </p>
                              )}
                            </div>

                            <Button
                              onClick={() => handleStepContinue("kyc")}
                              disabled={!isStepCompleted("kyc")}
                              className="w-full h-11 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-500 text-white"
                            >
                              Continue to Plan
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </>
                        )}

                        {/* Plan Step */}
                        {step.key === "plan" && (
                          <>
                            <div className="space-y-4">
                              <div>
                                <Label className="text-sm font-semibold text-slate-700 mb-3 block">
                                  One-Time Payment
                                </Label>
                                <Controller
                                  name="planType"
                                  control={control}
                                  render={({ field }) => (
                                    <RadioGroup
                                      value={field.value}
                                      onValueChange={field.onChange}
                                      className="space-y-2"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                          value="365days"
                                          id="365days"
                                          className="border-slate-300 text-[#4C6FFF]"
                                        />
                                        <Label
                                          htmlFor="365days"
                                          className="flex-1 p-4 rounded-lg border-2 border-slate-200 cursor-pointer hover:border-slate-300 transition-colors"
                                        >
                                          <div className="text-center">
                                            <div className="text-sm font-semibold text-slate-900 mb-1">
                                              365 days
                                            </div>
                                            <div className="text-sm font-bold text-[#4C6FFF]">
                                              ₹11999 + GST
                                            </div>
                                          </div>
                                        </Label>
                                      </div>
                                    </RadioGroup>
                                  )}
                                />
                                {errors.planType && (
                                  <p className="text-xs text-red-600 mt-1">
                                    {errors.planType.message}
                                  </p>
                                )}
                              </div>

                              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                <Controller
                                  name="disclaimerAccepted"
                                  control={control}
                                  render={({ field }) => (
                                    <div className="flex items-start space-x-3">
                                      <Checkbox
                                        id="disclaimerAccepted"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className="mt-0.5 border-slate-300 data-[state=checked]:bg-[#4C6FFF] data-[state=checked]:border-[#4C6FFF]"
                                      />
                                      <Label
                                        htmlFor="disclaimerAccepted"
                                        className="text-sm text-slate-700 leading-relaxed cursor-pointer"
                                      >
                                        I have gone through the Disclaimers mentioned in the
                                        website. I&apos;m purchasing this plan with understanding
                                        of{" "}
                                        <button
                                          type="button"
                                          className="text-[#4C6FFF] underline hover:text-blue-700 font-semibold"
                                        >
                                          disclaimers
                                        </button>
                                      </Label>
                                    </div>
                                  )}
                                />
                                {errors.disclaimerAccepted && (
                                  <p className="text-xs text-red-600 mt-1">
                                    {errors.disclaimerAccepted.message}
                                  </p>
                                )}
                              </div>

                              <Button
                                onClick={handleFinalSubmit}
                                disabled={!isStepCompleted("plan")}
                                className="w-full h-12 rounded-xl bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 disabled:from-slate-300 disabled:to-slate-400 text-white font-bold shadow-lg"
                              >
                                🚀 Complete Investment
                                <ChevronRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}