"use client";

import { useState, useId } from "react";
import { API_ROUTE, PHONE_NUMBER, PHONE_HREF } from "@/lib/config";
import { trackFormStep1Complete, trackFormSubmitSuccess, trackClickCall } from "@/lib/analytics";
import type { Attribution } from "@/hooks/useAttribution";

const SERVICES = [
  "Warehouse Epoxy Flooring",
  "Commercial Kitchen Flooring",
  "Workshop / Industrial Flooring",
  "Brewery / Hospitality Flooring",
  "Garage Epoxy Flooring",
  "Other / Not Sure Yet",
];

const BEST_TIMES = [
  { value: "asap",      label: "ASAP" },
  { value: "morning",   label: "Morning (8–12pm)" },
  { value: "afternoon", label: "Afternoon (12–5pm)" },
  { value: "evening",   label: "Evening (5–8pm)" },
];

type Step   = 1 | 2;
type Status = "idle" | "submitting" | "success" | "error";

interface FormData {
  service: string;
  suburb: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  bestTime: string;
  honeypot: string;
}

interface LeadFormProps {
  attribution: Attribution;
  formRef?: React.RefObject<HTMLDivElement | null>;
}

export default function LeadForm({ attribution, formRef }: LeadFormProps) {
  const [step, setStep]       = useState<Step>(1);
  const [status, setStatus]   = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fieldId = useId();

  const [data, setData] = useState<FormData>({
    service: "", suburb: "", firstName: "", lastName: "",
    mobile: "", email: "", bestTime: "asap", honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function set(field: keyof FormData, value: string) {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validateStep1(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.service)              e.service = "Please select a service.";
    if (!data.suburb.trim())        e.suburb  = "Please enter your suburb.";
    else if (/^\d+$/.test(data.suburb.trim())) e.suburb = "Please enter a suburb name, not a postcode.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleStep1() {
    if (!validateStep1()) return;
    trackFormStep1Complete(data.service, data.suburb);
    setStep(2);
  }

  function validateStep2(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.firstName.trim()) e.firstName = "Please enter your first name.";
    if (!data.lastName.trim())  e.lastName  = "Please enter your last name.";
    if (!/^(\+?61|0)[4-5]\d{8}$/.test(data.mobile.replace(/\s/g, ""))) {
      e.mobile = "Please enter a valid Australian mobile number.";
    }
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep2()) return;
    if (data.honeypot) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(API_ROUTE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: data.service, suburb: data.suburb,
          first_name: data.firstName, last_name: data.lastName,
          mobile: data.mobile, email: data.email,
          best_time: data.bestTime, honeypot: data.honeypot,
          ...attribution,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error || "Server error. Please try again.");
      }

      trackFormSubmitSuccess(data.service);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full border rounded-lg px-3 py-2.5 bg-[#2a2a2a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition ${errors[field] ? "border-red-500" : "border-[#444444]"}`;

  if (status === "success") {
    return (
      <div ref={formRef} className="bg-[#222222] rounded-2xl border border-[#333333] p-8 text-center" style={{borderTop: "2px solid #7B35CC"}}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)"}}>
          <CheckIcon />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Request received!</h3>
        <p className="text-gray-400 mb-6 text-sm">
          Thanks! We&apos;ll be in touch within 24 hours to discuss your project.
        </p>
        <a
          href={PHONE_HREF}
          onClick={() => trackClickCall("form-success")}
          className="dfs-btn inline-flex items-center gap-2 px-6 py-3"
        >
          <PhoneIcon />
          Call Us: {PHONE_NUMBER}
        </a>
      </div>
    );
  }

  return (
    <div ref={formRef} className="bg-[#222222] rounded-2xl border border-[#333333] overflow-hidden" style={{borderTop: "3px solid transparent", borderImage: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28) 1"}}>
      {/* Form header */}
      <div className="px-6 py-5 bg-[#1a1a1a] border-b border-[#333333]">
        <h2 className="text-xl font-bold text-white">Get Your Free Quote</h2>
        <p className="text-gray-400 text-sm mt-1">We respond within 24 hours.</p>
        <div className="flex items-center gap-2 mt-3">
          <StepDot active={step >= 1} done={step > 1} label="1" />
          <div className={`flex-1 h-0.5 rounded transition-colors ${step > 1 ? "dfs-gradient" : "bg-[#444]"}`} style={step > 1 ? {background: "linear-gradient(90deg, #7B35CC, #D4187A, #F05A28)"} : {}} />
          <StepDot active={step >= 2} done={false} label="2" />
        </div>
      </div>

      <form
        onSubmit={step === 1 ? (e) => { e.preventDefault(); handleStep1(); } : handleSubmit}
        noValidate
        className="px-6 py-6 space-y-4"
      >
        {step === 1 && (
          <>
            <div>
              <label htmlFor={`${fieldId}-service`} className="block text-sm font-semibold text-gray-300 mb-1">
                What type of flooring? <span className="text-red-400">*</span>
              </label>
              <select
                id={`${fieldId}-service`}
                value={data.service}
                onChange={(e) => set("service", e.target.value)}
                className={inputClass("service")}
              >
                <option value="">— Select a service —</option>
                {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
            </div>

            <div>
              <label htmlFor={`${fieldId}-suburb`} className="block text-sm font-semibold text-gray-300 mb-1">
                Your Suburb <span className="text-red-400">*</span>
              </label>
              <input
                id={`${fieldId}-suburb`}
                type="text"
                value={data.suburb}
                onChange={(e) => set("suburb", e.target.value)}
                placeholder="e.g. Gosford"
                className={inputClass("suburb")}
              />
              {errors.suburb && <p className="text-red-400 text-xs mt-1">{errors.suburb}</p>}
            </div>

            <button type="submit" className="dfs-btn w-full py-3.5 text-base focus:outline-none focus:ring-4 focus:ring-purple-500">
              Next →
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${fieldId}-firstName`} className="block text-sm font-semibold text-gray-300 mb-1">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input id={`${fieldId}-firstName`} type="text" autoComplete="given-name" value={data.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="John" className={inputClass("firstName")} />
                {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor={`${fieldId}-lastName`} className="block text-sm font-semibold text-gray-300 mb-1">
                  Last Name <span className="text-red-400">*</span>
                </label>
                <input id={`${fieldId}-lastName`} type="text" autoComplete="family-name" value={data.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="Smith" className={inputClass("lastName")} />
                {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label htmlFor={`${fieldId}-mobile`} className="block text-sm font-semibold text-gray-300 mb-1">
                Mobile Number <span className="text-red-400">*</span>
              </label>
              <input id={`${fieldId}-mobile`} type="tel" autoComplete="tel" value={data.mobile} onChange={(e) => set("mobile", e.target.value)} placeholder="0412 345 678" className={inputClass("mobile")} />
              {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
            </div>

            <div>
              <label htmlFor={`${fieldId}-email`} className="block text-sm font-semibold text-gray-300 mb-1">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input id={`${fieldId}-email`} type="email" autoComplete="email" value={data.email} onChange={(e) => set("email", e.target.value)} placeholder="john@email.com" className={inputClass("email")} />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Best Time to Call</label>
              <div className="grid grid-cols-2 gap-2">
                {BEST_TIMES.map((t) => (
                  <label
                    key={t.value}
                    className={`flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer text-sm transition-colors ${data.bestTime === t.value ? "border-purple-500 bg-purple-900/20 text-white font-semibold" : "border-[#444] text-gray-400 hover:border-[#666]"}`}
                  >
                    <input type="radio" name="bestTime" value={t.value} checked={data.bestTime === t.value} onChange={() => set("bestTime", t.value)} className="accent-purple-500" />
                    {t.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" value={data.honeypot} onChange={(e) => set("honeypot", e.target.value)} />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded-lg px-3 py-2">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="dfs-btn w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-purple-500"
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2"><SpinnerIcon /> Sending…</span>
              ) : "Get My Free Quote →"}
            </button>

            <p className="text-center text-xs text-gray-500">
              Free quote. No obligation. We&apos;ll call within 24 hours.
            </p>

            <button type="button" onClick={() => setStep(1)} className="w-full text-xs text-gray-500 hover:text-gray-300 underline text-center transition-colors">
              ← Back
            </button>
          </>
        )}
      </form>
    </div>
  );
}

function StepDot({ active, done, label }: { active: boolean; done: boolean; label: string }) {
  const bg = (active || done)
    ? "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)"
    : "#444444";
  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{background: bg}}>
      {done ? "✓" : label}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}
function SpinnerIcon() {
  return (
    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}
