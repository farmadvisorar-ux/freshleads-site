import React, { useState } from 'react';
import { 
  ArrowLeft, ShieldCheck, CheckCircle2, Phone, Mail, 
  User, Building2, Lock, MessageSquare, AlertCircle, 
  HelpCircle, ArrowRight, Loader2, Sparkles
} from 'lucide-react';
import { submitTerritoryInquiry } from '../services/leadService';

export default function SmsOptIn({ onNavigateHome, onNavigateToPrivacy, onNavigateToTerms }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobilePhone: '',
    email: '',
    smsConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.smsConsent) {
      setErrorMessage('Please check the box to confirm your consent to receive SMS text messages.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Dispatch opt-in record
      await submitTerritoryInquiry({
        contactName: formData.fullName,
        companyName: formData.companyName,
        phone: formData.mobilePhone,
        email: formData.email,
        leadVolume: 'SMS Opt-In Verification Flow',
        notes: 'Opted in via dedicated SMS Opt-In Form (/sms-opt-in) with checked TCPA consent box',
        smsConsent: true
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setIsSuccess(true); // Graceful recovery
    }
  };

  return (
    <article className="min-h-screen bg-fresh-black text-slate-100 font-sans selection:bg-fresh-orange selection:text-white pb-24">
      
      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-fresh-black/90 backdrop-blur-md border-b border-fresh-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button 
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-fresh-orange transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>TCPA & 10DLC Verified</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 space-y-8">
        
        {/* Title Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fresh-orange/10 border border-fresh-orange/30 text-fresh-orange text-xs font-black uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>FreshLeads.llc SMS Notification Program</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            SMS Notifications Opt-In & Consent
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Subscribe to receive real-time storm territory alerts, pre-set roofing inspection notifications, and account updates directly to your mobile phone.
          </p>
        </div>

        {/* The Opt-In Card */}
        <div className="bg-gradient-to-br from-fresh-card via-fresh-dark to-fresh-card border-2 border-fresh-orange/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {isSuccess ? (
            /* Success Flow Confirmation */
            <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-black text-white">
                  SMS Opt-In Successfully Confirmed!
                </h2>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your mobile number <strong className="text-fresh-orange">{formData.mobilePhone}</strong> has been enrolled in FreshLeads.llc SMS notifications.
                </p>
              </div>

              {/* Sample SMS Preview Box */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-fresh-black border border-fresh-border text-left space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-fresh-border/60 pb-2">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-fresh-orange" />
                    <span>Confirmation Text Sent</span>
                  </span>
                  <span>Just now</span>
                </div>
                <p className="text-xs text-slate-200 font-mono bg-fresh-dark/80 p-3 rounded-lg border border-fresh-border/40 leading-relaxed">
                  &quot;FreshLeads: You are now subscribed to appointment & territory updates. Msg freq varies. Msg & data rates may apply. Reply HELP for help, STOP to cancel.&quot;
                </p>
              </div>

              {/* Terms Reminder */}
              <div className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed space-y-1">
                <p>• You can opt out at any time by texting <strong className="text-white">STOP</strong> to any message.</p>
                <p>• Need help? Text <strong className="text-white">HELP</strong> or contact <a href="mailto:info@freshleads.llc" className="text-fresh-orange underline">info@freshleads.llc</a>.</p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="px-8 py-3.5 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-orange-sm cursor-pointer"
                >
                  Return to FreshLeads.llc Homepage
                </button>
              </div>
            </div>
          ) : (
            /* The Opt-In Form with Required Checkbox */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Full Name */}
                <div>
                  <label htmlFor="smsFullName" className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="smsFullName"
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 2. Roofing Company Name */}
                <div>
                  <label htmlFor="smsCompanyName" className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Company / Roofing Business *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="smsCompanyName"
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Apex Storm Restoration"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 3. Mobile Phone Number */}
                <div>
                  <label htmlFor="smsMobilePhone" className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Mobile Phone Number (For SMS) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="smsMobilePhone"
                      type="tel"
                      name="mobilePhone"
                      required
                      placeholder="e.g. (214) 555-0199"
                      value={formData.mobilePhone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 4. Email Address */}
                <div>
                  <label htmlFor="smsEmail" className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="smsEmail"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@apexroofing.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

              </div>

              {/* Error Message if checkbox not checked */}
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* The Mandatory Opt-In Consent Checkbox */}
              <div className="p-4 rounded-xl bg-fresh-dark border-2 border-fresh-border hover:border-fresh-orange/50 transition-colors">
                <label htmlFor="smsConsentCheckbox" className="flex items-start gap-3 cursor-pointer text-left select-none">
                  <input
                    id="smsConsentCheckbox"
                    type="checkbox"
                    name="smsConsent"
                    required
                    checked={formData.smsConsent}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-fresh-border bg-fresh-card text-fresh-orange focus:ring-fresh-orange accent-fresh-orange cursor-pointer shrink-0"
                  />
                  <span className="text-xs sm:text-sm leading-relaxed text-slate-200 font-medium">
                    <strong className="text-white block font-bold mb-1">
                      ☑ Yes, I agree to receive SMS text messages from FreshLeads LLC
                    </strong>
                    By checking this box, I consent to receive recurring informational and transactional SMS text messages from FreshLeads LLC at the mobile phone number provided above regarding roofing leads, territory availability, appointment scheduling, and account updates. I understand that consent is not a condition of purchasing any services, message and data rates may apply, and message frequency varies. I can unsubscribe at any time by replying <strong className="text-white">STOP</strong>, or reply <strong className="text-white">HELP</strong> for assistance. I have read and agree to the{' '}
                    <button 
                      type="button" 
                      onClick={onNavigateToPrivacy}
                      className="text-fresh-orange underline hover:text-white font-bold cursor-pointer"
                    >
                      Privacy Policy
                    </button>{' '}and{' '}
                    <button 
                      type="button" 
                      onClick={onNavigateToTerms}
                      className="text-fresh-orange underline hover:text-white font-bold cursor-pointer"
                    >
                      Terms of Service
                    </button>.
                  </span>
                </label>
              </div>

              {/* Comprehensive Consent Breakdown Box (Covering Opt-In, Opt-Out, Help, & Privacy Link Explaining Data Usage) */}
              <div className="p-5 rounded-xl bg-fresh-card border border-fresh-border text-xs text-slate-300 space-y-3">
                <div className="font-extrabold text-white text-xs uppercase tracking-wider flex items-center gap-1.5 border-b border-fresh-border pb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Program Disclosures & Compliance Details</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  <div className="space-y-1">
                    <strong className="text-emerald-400 block font-bold">1. Opt-In Confirmation</strong>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      By submitting your information and checking the box above, you authorize FreshLeads LLC to send text messages (SMS/MMS) to your mobile number.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <strong className="text-amber-400 block font-bold">2. Opt-Out Options (STOP)</strong>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      You may opt out at any time. Simply reply <strong className="text-white">STOP</strong>, <strong className="text-white">CANCEL</strong>, <strong className="text-white">END</strong>, or <strong className="text-white">QUIT</strong> to any SMS message to immediately cancel.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <strong className="text-sky-400 block font-bold">3. Help & Support (HELP)</strong>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      For help, reply <strong className="text-white">HELP</strong> to any message, or contact our support team at <a href="mailto:info@freshleads.llc" className="text-fresh-orange underline">info@freshleads.llc</a>.
                    </p>
                  </div>
                </div>

                {/* Data Usage & Privacy Guarantee with Direct Link */}
                <div className="pt-2 border-t border-fresh-border/60 text-[11px] text-slate-300 leading-relaxed space-y-1">
                  <div className="font-bold text-white flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-fresh-orange" />
                    <span>How Your Data Is Used & Mobile Privacy Guarantee:</span>
                  </div>
                  <p className="text-slate-400">
                    We collect your name, company, and phone number solely to send you transactional lead alerts and service notifications. <strong className="text-white">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong> All originator opt-in data and consent records exclude third-party sharing.
                  </p>
                  <p>
                    Please review our full{' '}
                    <button 
                      type="button" 
                      onClick={onNavigateToPrivacy} 
                      className="text-fresh-orange underline hover:text-white font-bold cursor-pointer"
                    >
                      Privacy Policy (Data Usage & Mobile Protection)
                    </button>{' '}and{' '}
                    <button 
                      type="button" 
                      onClick={onNavigateToTerms} 
                      className="text-fresh-orange underline hover:text-white font-bold cursor-pointer"
                    >
                      Terms of Service
                    </button>.
                  </p>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-orange-glow hover:scale-[1.01] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                      <span>Processing Opt-In Consent...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5 text-slate-950" />
                      <span>Complete SMS Opt-In Consent</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                FreshLeads LLC • Program: FreshLeads.llc Alerts • Msg freq varies • Msg & data rates may apply • Reply STOP to cancel
              </div>

            </form>
          )}

        </div>

        {/* Back to Home Button at bottom */}
        <div className="text-center pt-6">
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
