import Link from "next/link";
import { BUSINESS_NAME, PHONE_NUMBER, EMAIL } from "@/lib/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | ${BUSINESS_NAME}`,
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-sm text-gray-400 hover:text-white mb-8 inline-block transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-8">{BUSINESS_NAME} - Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-gray-300 space-y-6 text-sm leading-relaxed">
          <p>
            {BUSINESS_NAME} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information.
            This policy explains how we collect, use, and store your data.
          </p>
          <h2 className="text-white font-bold text-lg">Information We Collect</h2>
          <p>When you submit a quote request, we collect your name, phone number, email address, suburb, and the type of service you are enquiring about. We also collect technical data such as IP address, device type, and referring URL for fraud prevention and analytics.</p>
          <h2 className="text-white font-bold text-lg">How We Use Your Information</h2>
          <p>Your information is used solely to respond to your quote request and to follow up regarding our services. We do not sell your data to third parties.</p>
          <h2 className="text-white font-bold text-lg">Third-Party Services</h2>
          <p>We use Supabase for secure data storage and GoHighLevel as our CRM. Both services are bound by their own privacy policies and are used only for lead management purposes.</p>
          <h2 className="text-white font-bold text-lg">Contact</h2>
          <p>
            To request deletion of your data or for any privacy enquiries, contact us at{" "}
            <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a> or call{" "}
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="underline">{PHONE_NUMBER}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
