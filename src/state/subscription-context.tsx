"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from "react";

type StepKey = "personal" | "contact" | "kyc" | "plan";

type SubscriptionFields = {
  fullName: string;
  email: string;
  dob: string; // yyyy-mm-dd
  countryCode: string; // e.g. +91
  phone: string;
  address: string;
  city: string;
  pincode: string;
  pan: string;
  consent: boolean;
  planKey?: string;
  cycleKey?: string;
};

type SubscriptionState = {
  fields: SubscriptionFields;
  step: StepKey;
  completed: Record<StepKey, boolean>;
  errors: Partial<Record<keyof SubscriptionFields, string>>;
  status: "idle" | "in_progress" | "completed" | "submitted";
  submittedAt?: string;
};

type Action =
  | { type: "INIT"; payload: Partial<SubscriptionFields> }
  | { type: "UPDATE_FIELD"; field: keyof SubscriptionFields; value: any }
  | { type: "SET_ERRORS"; errors: SubscriptionState["errors"] }
  | { type: "CLEAR_ERROR"; field: keyof SubscriptionFields }
  | { type: "SET_STEP"; step: StepKey }
  | { type: "SET_COMPLETED"; key: StepKey; value: boolean }
  | { type: "SET_STATUS"; status: SubscriptionState["status"] }
  | { type: "SUBMITTED" };

const STORAGE_KEY = "subscription-store-v1";

const initialState: SubscriptionState = {
  fields: {
    fullName: "",
    email: "",
    dob: "",
    countryCode: "+91",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    pan: "",
    consent: false,
    planKey: undefined,
    cycleKey: undefined,
  },
  step: "personal",
  completed: {
    personal: false,
    contact: false,
    kyc: false,
    plan: false,
  },
  errors: {},
  status: "idle",
};

function reducer(state: SubscriptionState, action: Action): SubscriptionState {
  switch (action.type) {
    case "INIT": {
      const nextFields = { ...state.fields, ...action.payload };
      return { ...state, fields: nextFields };
    }
    case "UPDATE_FIELD": {
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
      };
    }
    case "SET_ERRORS": {
      return { ...state, errors: action.errors };
    }
    case "CLEAR_ERROR": {
      const next = { ...state.errors };
      delete next[action.field];
      return { ...state, errors: next };
    }
    case "SET_STEP": {
      return { ...state, step: action.step };
    }
    case "SET_COMPLETED": {
      return { ...state, completed: { ...state.completed, [action.key]: action.value } };
    }
    case "SET_STATUS": {
      return { ...state, status: action.status };
    }
    case "SUBMITTED": {
      return { ...state, status: "submitted", submittedAt: new Date().toISOString() };
    }
    default:
      return state;
  }
}

function loadState(): SubscriptionState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed as SubscriptionState;
  } catch {
    return null;
  }
}

function saveState(state: SubscriptionState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

// Validation helpers
function isEmail(v: string) {
  return /\S+@\S+\.\S+/.test(v);
}
function isPastDate(v: string) {
  if (!v) return false;
  const d = new Date(v);
  const now = new Date();
  return !isNaN(+d) && d < now;
}
function isAdult(v: string) {
  if (!v) return false;
  const d = new Date(v);
  const now = new Date();
  const age = now.getFullYear() - d.getFullYear() - (now < new Date(d.getFullYear() + (now.getFullYear() - d.getFullYear()), d.getMonth(), d.getDate()) ? 1 : 0);
  return age >= 18;
}
function isDigits(v: string, min = 7, max = 15) {
  return new RegExp(`^\d{${min},${max}}$`).test(v);
}
function isPincode(v: string, countryCode: string) {
  if (countryCode === "+91") return /^\d{6}$/.test(v);
  return /^\d{4,8}$/.test(v);
}
function isPAN(v: string, countryCode: string) {
  if (countryCode === "+91") return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v.toUpperCase());
  return v.trim().length >= 8; // fallback for other countries
}

type ContextValue = {
  state: SubscriptionState;
  updateField: (field: keyof SubscriptionFields, value: any) => void;
  setStep: (step: StepKey) => void;
  validateStep: (step: StepKey) => boolean;
  goNextFrom: (current: StepKey) => boolean;
  submit: () => boolean;
  init: (payload: Partial<SubscriptionFields>) => void;
};

const Ctx = createContext<ContextValue | null>(null);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const loaded = typeof window !== "undefined" ? loadState() : null;
  const [state, dispatch] = useReducer(reducer, loaded ?? initialState);

  // persist
  useEffect(() => {
    saveState(state);
  }, [state]);

  const setStep = useCallback((step: StepKey) => dispatch({ type: "SET_STEP", step }), []);
  const updateField = useCallback((field: keyof SubscriptionFields, value: any) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
    dispatch({ type: "CLEAR_ERROR", field });
  }, []);

  const validatePersonal = useCallback((f: SubscriptionFields) => {
    const errors: SubscriptionState["errors"] = {};
    if (!f.fullName || f.fullName.trim().length < 3) errors.fullName = "Enter your full name (min 3 chars).";
    if (!isEmail(f.email)) errors.email = "Enter a valid email (e.g., name@host.com).";
    if (!isPastDate(f.dob)) errors.dob = "Select a valid past date.";
    else if (!isAdult(f.dob)) errors.dob = "You must be at least 18 years old.";
    return errors;
  }, []);

  const validateContact = useCallback((f: SubscriptionFields) => {
    const errors: SubscriptionState["errors"] = {};
    const digitsOnly = f.phone.replace(/\D/g, "");
    if (!isDigits(digitsOnly)) errors.phone = "Enter a valid phone number (digits only).";
    if (!f.address || f.address.trim().length < 5) errors.address = "Enter your full address.";
    if (!f.city) errors.city = "Enter your city.";
    if (!isPincode(f.pincode, f.countryCode)) errors.pincode = f.countryCode === "+91" ? "Enter a valid 6-digit PIN." : "Enter a valid postal code.";
    return errors;
  }, []);

  const validateKyc = useCallback((f: SubscriptionFields) => {
    const errors: SubscriptionState["errors"] = {};
    if (!isPAN(f.pan, f.countryCode)) errors.pan = f.countryCode === "+91" ? "Enter a valid PAN (e.g., ABCDE1234F)." : "Enter a valid ID.";
    return errors;
  }, []);

  const validatePlan = useCallback((f: SubscriptionFields) => {
    const errors: SubscriptionState["errors"] = {};
    if (!f.cycleKey) errors.cycleKey = "Choose a billing cycle.";
    if (!f.consent) errors.consent = "Please accept the disclaimers to proceed.";
    return errors;
  }, []);

  const validateStep = useCallback((step: StepKey) => {
    const f = state.fields;
    let errors: SubscriptionState["errors"] = {};
    if (step === "personal") errors = validatePersonal(f);
    if (step === "contact") errors = validateContact(f);
    if (step === "kyc") errors = validateKyc(f);
    if (step === "plan") errors = validatePlan(f);
    const ok = Object.keys(errors).length === 0;
    dispatch({ type: "SET_ERRORS", errors });
    dispatch({ type: "SET_COMPLETED", key: step, value: ok });
    if (!ok) dispatch({ type: "SET_STATUS", status: "in_progress" });
    return ok;
  }, [state.fields, validatePersonal, validateContact, validateKyc, validatePlan]);

  const goNextFrom = useCallback((current: StepKey) => {
    const ok = validateStep(current);
    if (!ok) return false;
    const order: StepKey[] = ["personal", "contact", "kyc", "plan"];
    const idx = order.indexOf(current);
    const next = order[idx + 1];
    if (next) dispatch({ type: "SET_STEP", step: next });
    return true;
  }, [validateStep]);

  const submit = useCallback(() => {
    // validate all
    const personalOk = validateStep("personal");
    const contactOk = validateStep("contact");
    const kycOk = validateStep("kyc");
    const planOk = validateStep("plan");
    const allOk = personalOk && contactOk && kycOk && planOk;
    if (allOk) {
      dispatch({ type: "SUBMITTED" });
      return true;
    }
    return false;
  }, [validateStep]);

  const init = useCallback((payload: Partial<SubscriptionFields>) => {
    dispatch({ type: "INIT", payload });
  }, []);

  const value = useMemo(
    () => ({ state, updateField, setStep, validateStep, goNextFrom, submit, init }),
    [state, updateField, setStep, validateStep, goNextFrom, submit, init]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSubscription() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSubscription must be used within SubscriptionProvider");
  return ctx;
}

