import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy({ onNavigateHome, onOpenTerritoryModal }) {
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
            <Lock className="w-3.5 h-3.5" />
            <span>Legal & Data Protection</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Privacy Policy & Mobile Information Disclosure
          </h1>

          <p className="text-sm text-slate-400">
            Last Updated: January 1, 2026 • Official Privacy Policy of FreshLeads LLC (FreshLeads.llc)
          </p>
        </div>

        {/* Highlight Box: TCR & 10DLC Mandatory Privacy Policy Statement */}
        <div className="p-6 rounded-2xl bg-fresh-dark border-2 border-fresh-orange/50 shadow-orange-sm space-y-4">
          <div className="flex items-center gap-2.5 text-fresh-orange font-black text-base uppercase tracking-wider">
            <ShieldCheck className="w-6 h-6 shrink-0" />
            <span>TCR & 10DLC MANDATORY PRIVACY POLICY STATEMENT</span>
          </div>
          
          <div className="p-4 rounded-xl bg-fresh-black/90 border border-fresh-border text-slate-100 text-sm sm:text-base leading-relaxed space-y-3 font-medium">
            <p className="text-white">
              &quot;We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.&quot;
            </p>
            <p className="text-white font-bold border-t border-fresh-border/60 pt-3">
              &quot;All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.&quot;
            </p>
          </div>

          <div className="text-xs text-slate-300 pt-1 leading-relaxed">
            FreshLeads LLC strictly enforces this policy across our website, Zoho Voice telephony systems, and SMS customer care notification services.
          </div>
        </div>

        {/* Section 1: Overview */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">1.</span> Introduction & Scope
          </h2>
          <p>
            FreshLeads LLC (&quot;FreshLeads.llc&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects the privacy of our roofing contractor partners, website visitors, and prospective clients. This Privacy Policy details our practices concerning data collection, usage, and safeguarding across our primary domain <strong className="text-white">https://freshleads.llc</strong>, our telephonic voice communications via Zoho Voice, and our interactive lead management workflows.
          </p>
          <p>
            By accessing our website, requesting a territory availability check, or submitting an inquiry for roofing appointments, you acknowledge and agree to the policies described herein.
          </p>
        </section>

        {/* Section 2: Information We Collect */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">2.</span> Information We Collect
          </h2>
          <p>
            We collect personal and business information that you voluntarily provide when you express interest in our services:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
            <li><strong className="text-white">Contact Details:</strong> First and last name, business email address, company name, and direct telephone/mobile phone number.</li>
            <li><strong className="text-white">Territory Specifications:</strong> Desired target zip codes, counties, states, and storm swath markets.</li>
            <li><strong className="text-white">Operational Parameters:</strong> Desired weekly lead volume package (e.g. Gold, Platinum, Diamond, Titanium Elite) and roof inspection crew capacity.</li>
            <li><strong className="text-white">Communications Records:</strong> Call notes, correspondence via email, and call recordings conducted with our setters or customer success agents for quality assurance and training purposes.</li>
          </ul>
        </section>

        {/* Section 3: How We Use Your Information & Zoho Voice Telephony */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">3.</span> How We Use Your Information & Zoho Voice Calling
          </h2>
          <p>
            Your information is used strictly to fulfill your business inquiry and provide our specialized roofing appointment services:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-300">
            <li>To verify county territory exclusivity and roofer capacity in your requested market.</li>
            <li>To place customer success phone calls to you via our enterprise Zoho Voice telephony infrastructure to discuss lead packages, sample call recordings, and storm radar coverage.</li>
            <li>To send one-to-one transactional SMS notifications regarding newly set roofing inspections, calendar updates, and territory reserve statuses.</li>
            <li>To invoice, manage, and service partner roofing accounts.</li>
          </ul>
        </section>

        {/* Section 4: Mobile / SMS & Voice Opt-In Consent Policy */}
        <section className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">4.</span> Mobile / SMS & Voice Opt-In Consent Policy (TCPA / CTIA Compliance)
          </h2>
          <p>
            When you enter your phone number on any web form on FreshLeads.llc (including the Territory Checker Modal or Weekly Package Request Form):
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border space-y-2">
              <strong className="text-white block text-sm font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Express Written Consent</span>
              </strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                You provide prior express written consent to receive informational and transactional calls and SMS/MMS text messages from FreshLeads LLC at the phone number provided, including through automated systems or Zoho Voice telephony.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border space-y-2">
              <strong className="text-white block text-sm font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Purchase Condition</span>
              </strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consent to receive automated marketing or sales calls/texts is never a condition of purchasing any roofing leads, packages, or services from FreshLeads.llc.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border space-y-2">
              <strong className="text-white block text-sm font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Message Frequency & Rates</span>
              </strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                Message frequency varies based on your requested appointment tier and active storm seasons. Standard message and data rates may apply according to your cellular service plan.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border space-y-2">
              <strong className="text-white block text-sm font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Immediate Opt-Out (STOP)</span>
              </strong>
              <p className="text-xs text-slate-400 leading-relaxed">
                You may opt out of SMS messages at any time by replying <strong className="text-white">STOP</strong>, <strong className="text-white">CANCEL</strong>, or <strong className="text-white">UNSUBSCRIBE</strong> to any text message, or by emailing info@freshleads.llc.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Third-Party Disclosures & Data Sharing */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">5.</span> Data Sharing & Third-Party Disclosure Policy
          </h2>
          <p>
            We do not sell, rent, lease, trade, or distribute your personal contact information to any third-party marketing companies, lead aggregators, or affiliates.
          </p>
          <div className="p-5 rounded-xl bg-fresh-dark border border-fresh-border text-xs sm:text-sm text-slate-200 space-y-3">
            <p className="leading-relaxed">
              We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.
            </p>
            <p className="font-bold text-emerald-400 border-t border-fresh-border/60 pt-2">
              All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
          </div>
        </section>

        {/* Section 6: Data Security & Retention */}
        <section className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">6.</span> Data Security & Retention
          </h2>
          <p>
            FreshLeads LLC implements industry-standard administrative, physical, and technical safeguards (including TLS/SSL encryption, restricted access controls, and encrypted storage) to protect personal information against unauthorized disclosure, alteration, or destruction. We retain your contact information only as long as necessary to service your account or comply with legal requirements.
          </p>
        </section>

        {/* Section 7: Your Rights & Contact Us */}
        <section className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-fresh-border pt-8">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-fresh-orange">7.</span> Reviewing Your Data & Contact Information
          </h2>
          <p>
            If you wish to update, modify, or permanently delete your contact information from our active call lists and database, or if you have any questions regarding this Privacy Policy, please contact our Compliance Officer directly:
          </p>
          
          <div className="p-5 rounded-xl bg-fresh-card border border-fresh-border space-y-2">
            <div className="font-bold text-white text-base">FreshLeads LLC — Privacy & Compliance</div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Phone className="w-4 h-4 text-fresh-orange shrink-0" />
              <span>Telephone: <a href="tel:2148314653" className="text-white font-bold hover:text-fresh-orange">(214) 831-4653</a></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Mail className="w-4 h-4 text-fresh-orange shrink-0" />
              <span>Email: <a href="mailto:info@freshleads.llc" className="text-fresh-orange underline hover:text-white">info@freshleads.llc</a></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Lock className="w-4 h-4 text-fresh-orange shrink-0" />
              <span>Website: <strong className="text-white">https://freshleads.llc</strong></span>
            </div>
            <div className="text-xs text-slate-400 pt-1">
              Requests to opt out of calls or texts are processed immediately across our Zoho Voice calling platform.
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
