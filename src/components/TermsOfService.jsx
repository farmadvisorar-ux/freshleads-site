import React from 'react';
import { ArrowLeft, ShieldCheck, FileText, Mail, Phone, CheckCircle2, HelpCircle, Globe } from 'lucide-react';

export default function TermsOfService({ onNavigateHome, onOpenTerritoryModal, onNavigateToPrivacy }) {
  return (
    <article className="min-h-screen bg-fresh-black text-slate-100 font-sans selection:bg-fresh-orange selection:text-white pb-24">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-fresh-black/90 backdrop-blur-md border-b border-fresh-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button 
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-fresh-orange transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenTerritoryModal?.()}
              className="px-4 py-2 rounded-lg bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-orange-sm cursor-pointer"
            >
              Check Territory
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Title & Metadata */}
        <div className="space-y-4 border-b border-fresh-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fresh-orange/10 border border-fresh-orange/30 text-fresh-orange text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Service Agreement & Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Terms of Service & Communications Agreement
          </h1>

          <p className="text-sm text-slate-400">
            Effective Date: January 1, 2026 • Official Terms of Service of FreshLeads LLC (FreshLeads.llc)
          </p>
        </div>

        {/* Section 1: Acceptance */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">1.</span> Acceptance of Terms
          </h2>
          <p>
            Welcome to FreshLeads.llc. These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client&quot;, &quot;Contractor&quot;, &quot;User&quot;, or &quot;You&quot;) and FreshLeads LLC (&quot;FreshLeads.llc&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>
          <p>
            By accessing or using <strong className="text-white">https://freshleads.llc</strong>, completing our territory inquiry form, engaging with our customer success team via telephone or Zoho Voice, or purchasing pre-set roofing appointments, you confirm that you have read, understood, and agreed to be bound by these Terms.
          </p>
        </section>

        {/* Section 2: SMS, Calling & Zoho Voice Communications Terms (TCPA & CTIA Required) */}
        <section className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed border-2 border-fresh-orange/40 p-6 rounded-2xl bg-fresh-dark">
          <div className="flex items-center gap-2 text-fresh-orange font-black text-lg">
            <ShieldCheck className="w-6 h-6 shrink-0" />
            <span>2. Voice Telephony & SMS Messaging Terms (Zoho Voice & 10DLC)</span>
          </div>

          <p className="text-white font-medium">
            FreshLeads LLC operates an automated and agent-assisted notification program designed to deliver real-time appointment alerts, territory exclusivity notices, and customer support.
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="p-3.5 rounded-xl bg-fresh-card border border-fresh-border">
              <strong className="text-white block font-bold mb-1">Program Name & Purpose:</strong>
              <span>Program Name: <strong>FreshLeads.llc Alerts & Customer Care</strong>. Messages and voice calls are sent to roofing contractors and prospective partners regarding their requested storm territory availability, lead package pricing, setter call recordings, inspection appointment scheduling, and account updates.</span>
            </div>

            <div className="p-3.5 rounded-xl bg-fresh-card border border-fresh-border">
              <strong className="text-white block font-bold mb-1">Opt-In Consent:</strong>
              <span>By providing your telephone number through any contact form, territory checker, or callback request on FreshLeads.llc, you expressly consent to receive non-marketing and informational phone calls and SMS/MMS text messages from FreshLeads LLC (including calls placed via Zoho Voice telephony and automated notification systems) at the number provided. Consent is not a condition of purchasing any goods or services.</span>
            </div>

            <div className="p-3.5 rounded-xl bg-fresh-card border border-fresh-border">
              <strong className="text-white block font-bold mb-1">Message Frequency:</strong>
              <span>Message frequency varies depending on your selected lead volume package (e.g. 3, 5, 7, or 9+ appointments/week) and active storm weather events in your contracted county.</span>
            </div>

            <div className="p-3.5 rounded-xl bg-fresh-card border border-fresh-border">
              <strong className="text-white block font-bold mb-1">Message & Data Rates:</strong>
              <span>Standard message and data rates may apply to any SMS sent or received under your mobile carrier plan. Please consult your wireless provider for details.</span>
            </div>

            <div className="p-3.5 rounded-xl bg-fresh-card border border-fresh-border">
              <strong className="text-white block font-bold mb-1">How to Opt-Out (STOP):</strong>
              <span>You may cancel SMS notifications at any time. Simply reply <strong className="text-white">STOP</strong>, <strong className="text-white">CANCEL</strong>, <strong className="text-white">END</strong>, <strong className="text-white">QUIT</strong>, or <strong className="text-white">UNSUBSCRIBE</strong> to any text message received from FreshLeads.llc. You will receive an immediate confirmation of cancellation and will receive no further text messages unless you re-subscribe.</span>
            </div>

            <div className="p-3.5 rounded-xl bg-fresh-card border border-fresh-border">
              <strong className="text-white block font-bold mb-1">Customer Support & Help (HELP):</strong>
              <span>For assistance, reply <strong className="text-white">HELP</strong> to any SMS, call our customer success team, or email us at <a href="mailto:info@freshleads.llc" className="text-fresh-orange underline hover:text-white">info@freshleads.llc</a>.</span>
            </div>

            <div className="p-3.5 rounded-xl bg-fresh-card border border-fresh-border">
              <strong className="text-white block font-bold mb-1">Carrier Liability Disclaimer:</strong>
              <span>Carriers (including but not limited to AT&T, T-Mobile, Verizon, Sprint, and regional mobile networks) are not liable for delayed or undelivered messages.</span>
            </div>

            <div className="p-3.5 rounded-xl bg-fresh-card border border-fresh-border space-y-2">
              <strong className="text-white block font-bold mb-1">Privacy & Data Protection:</strong>
              <p className="text-slate-300 leading-relaxed">
                We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.
              </p>
              <p className="text-white font-bold">
                All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <p className="text-xs text-slate-400 pt-1">
                Review our full{' '}
                <button 
                  type="button" 
                  onClick={onNavigateToPrivacy} 
                  className="text-fresh-orange underline hover:text-white font-bold cursor-pointer"
                >
                  Privacy Policy
                </button>{' '}for details.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Scope of Roofing Appointment Services */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">3.</span> Roofing Appointment Standards & Exclusivity
          </h2>
          <p>
            FreshLeads.llc provides exclusive, pre-scheduled storm damage inspection appointments for licensed, insured roofing contractors. Every lead delivered includes:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
            <li>Pre-scheduled date and time window with a confirmed property homeowner.</li>
            <li>Full call audio recording of the conversation between our professional setter and the homeowner.</li>
            <li>Verification of active homeowner insurance (confirming carrier name).</li>
            <li>Storm radar hail swath or severe wind date strictly within legal statutes of limitation.</li>
            <li>100% exclusivity: The lead is never shared, co-brokered, or resold to any other contractor.</li>
          </ul>
        </section>

        {/* Section 4: 100% Lead Replacement Guarantee */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">4.</span> 100% Replacement Guarantee Policy
          </h2>
          <p>
            We stand behind our lead quality with a strict 100% Replacement Guarantee. If any of the following occur:
          </p>
          <div className="p-4 rounded-xl bg-fresh-dark border border-fresh-border text-sm text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Qualifying Replacement Scenarios:</span>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li>You attend the scheduled appointment and are not able to meet with the homeowner or decision maker.</li>
              <li>The homeowner refuses to allow you to inspect the roof.</li>
              <li>The homeowner was discovered to be a renter or not the deeded property owner.</li>
              <li>The homeowner has no active insurance policy.</li>
            </ul>
            <p className="pt-2 text-xs text-slate-400">
              Contractors simply notify their Customer Success Agent via email at info@freshleads.llc or by phone, and an immediate replacement appointment is dispatched.
            </p>
          </div>
        </section>

        {/* Section 5: Contractor Responsibilities */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">5.</span> Contractor Responsibilities & Licensing
          </h2>
          <p>
            Partner contractors agree that they hold all required municipal and state licenses, worker&apos;s compensation coverage, and general liability insurance necessary to perform roof inspections, claim management, and roofing replacements in their contracted territories. FreshLeads.llc does not perform construction services and operates solely as a specialized appointment-setting provider.
          </p>
        </section>

        {/* Section 6: Limitation of Liability */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">6.</span> Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, FreshLeads LLC shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of contractor-homeowner interactions, construction contracts, insurance claim adjudications, or telecommunication delays.
          </p>
        </section>

        {/* Section 7: Governing Law & Inquiries */}
        <section className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-fresh-border pt-8">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">7.</span> Governing Law & Contact Information
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States. For any questions regarding these Terms or our communications policies, please contact:
          </p>
          
          <div className="p-5 rounded-xl bg-fresh-card border border-fresh-border space-y-2">
            <div className="font-bold text-white text-base">FreshLeads LLC — Legal & Operations</div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Phone className="w-4 h-4 text-fresh-orange shrink-0" />
              <span>Telephone: <a href="tel:2148314653" className="text-white font-bold hover:text-fresh-orange">(214) 831-4653</a></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Mail className="w-4 h-4 text-fresh-orange shrink-0" />
              <span>Email: <a href="mailto:info@freshleads.llc" className="text-fresh-orange underline hover:text-white">info@freshleads.llc</a></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Globe className="w-4 h-4 text-fresh-orange shrink-0" />
              <span>Official Website: <strong className="text-white">https://freshleads.llc</strong></span>
            </div>
          </div>
        </section>

        {/* Return Button */}
        <div className="text-center pt-8 border-t border-fresh-border">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border text-slate-300 hover:text-white font-bold text-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Return to FreshLeads.llc Homepage</span>
          </button>
        </div>

      </main>

    </article>
  );
}
