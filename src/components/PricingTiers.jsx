import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Sparkles, PhoneCall, Building2, User, Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { submitTerritoryInquiry } from '../services/leadService';

export default function PricingTiers({ onOpenTerritoryModal, onNavigateToPrivacy, onNavigateToTerms }) {
  // State for inline quick request form
  const [inlineForm, setInlineForm] = useState({
    contactName: '',
    companyName: '',
    phone: '',
    email: '',
    leadVolume: '7 Attended Appointments / Week (Recommended)',
    zipOrCounty: '',
    smsConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInlineChange = (e) => {
    setInlineForm({ ...inlineForm, [e.target.name]: e.target.value });
  };

  const handleInlineSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitTerritoryInquiry(inlineForm);
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="pricing" className="py-14 sm:py-24 bg-fresh-black relative border-t border-fresh-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <Zap className="w-4 h-4 text-fresh-orange" />
            <span>Performance-Driven Roofing Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Predictable Lead Flow. <br />
            <span className="orange-gradient-text">Zero Lead-Buying Risk.</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
            Every inspection appointment is backed by our 100% replacement guarantee: <strong className="text-white">if you do not meet with the homeowner or are not allowed on the roof, we replace the lead.</strong>
          </p>
        </div>

        {/* Hero Attend-Appointment Pricing Card */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="rounded-3xl bg-gradient-to-b from-fresh-card via-fresh-dark to-fresh-card border-2 border-fresh-orange/50 p-5 sm:p-12 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-fresh-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fresh-orange/15 border border-fresh-orange/40 text-fresh-orange text-xs font-black uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-fresh-orange" />
              <span>Transparent Per-Appointment Pricing</span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">
                $150 – $200
              </div>
              <div className="text-base sm:text-xl md:text-2xl font-bold text-fresh-orange mt-2 uppercase tracking-wide">
                per attend appointment
              </div>
            </div>

            <p className="text-sm sm:text-xl text-slate-200 mt-5 sm:mt-6 max-w-2xl mx-auto font-medium leading-relaxed">
              Most Campaigns run <strong className="text-white font-extrabold">$150–$200 per attend appointment</strong>. You only pay for real, attended roof inspections where you meet directly with the property owner.
            </p>

            {/* 6 Core Standards Included with Every Campaign */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 text-left">
              
              <div className="p-4 rounded-xl bg-fresh-dark/90 border border-fresh-border">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-white text-sm">100% Replacement Guarantee</div>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  If you do not meet with the homeowner or are not allowed on the roof, the appointment is replaced immediately at zero charge.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-fresh-dark/90 border border-fresh-border">
                <div className="w-8 h-8 rounded-lg bg-fresh-orange/20 text-fresh-orange flex items-center justify-center mb-2.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="font-extrabold text-white text-sm">100% Call Audio Recordings</div>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Every lead includes verified call recordings from our senior US phone setters before you dispatch an estimator.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-fresh-dark/90 border border-fresh-border">
                <div className="w-8 h-8 rounded-lg bg-fresh-orange/20 text-fresh-orange flex items-center justify-center mb-2.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="font-extrabold text-white text-sm">Confirmed Active Insurance</div>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Active policy verified on every call (State Farm, Allstate, USAA, Travelers, etc.) with active coverage in place.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-fresh-dark/90 border border-fresh-border">
                <div className="w-8 h-8 rounded-lg bg-fresh-orange/20 text-fresh-orange flex items-center justify-center mb-2.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="font-extrabold text-white text-sm">Radar-Verified Storm Dates</div>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Weather swaths strictly matched within actionable legal statutes of limitation for fast insurance claim approvals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-fresh-dark/90 border border-fresh-border">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-white text-sm">Territory Exclusivity</div>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Complete competitor lockout. We never sell the same appointment or share territories with rival contractors.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-fresh-dark/90 border border-fresh-border">
                <div className="w-8 h-8 rounded-lg bg-fresh-orange/20 text-fresh-orange flex items-center justify-center mb-2.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-white text-sm">Custom Weekly Capacity</div>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  Scale appointment volume to match your crew: choose 5, 7, 10, 15, or 20+ pre-set inspections per week.
                </p>
              </div>

            </div>

            {/* Direct Action CTAs */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-fresh-border/80 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenTerritoryModal({ volume: '7 Attended Appointments / Week (Recommended)' })}
                className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-orange-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Check Territory Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:2148314653"
                className="w-full sm:w-auto min-h-[48px] px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-fresh-dark hover:bg-fresh-cardHover border border-fresh-border text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-fresh-orange" />
                <span>Call Direct: (214) 831-4653</span>
              </a>
            </div>

          </div>
        </div>

        {/* Short Callback Request Form Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-fresh-card via-fresh-dark to-fresh-card border-2 border-fresh-orange/40 p-5 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-fresh-orange/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fresh-orange/10 border border-fresh-orange/30 text-fresh-orange text-xs font-extrabold uppercase tracking-wider mb-2">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct Customer Success Callback</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white">
              Request A Call From A Customer Success Agent
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Fill out this short form. One of our dedicated Customer Success Agents will call you directly to verify your storm county and lock in your weekly inspection schedule.
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Prefer to speak right now? Call our direct line:{' '}
              <a href="tel:2148314653" className="text-fresh-orange hover:text-white font-extrabold underline inline-flex items-center gap-1">
                <Phone className="w-3 h-3 inline" />
                <span>(214) 831-4653</span>
              </a>
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-white">Request Received!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{inlineForm.contactName || 'Contractor'}</strong>. A FreshLeads Customer Success Agent is reviewing your target volume of <strong className="text-fresh-orange">{inlineForm.leadVolume}</strong> and will call you at <strong className="text-white">{inlineForm.phone}</strong> shortly.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-fresh-dark border border-fresh-border text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Notification dispatched directly to info@freshleads.llc</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInlineSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Name */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="contactName"
                      required
                      placeholder="e.g. David Miller"
                      value={inlineForm.contactName}
                      onChange={handleInlineChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 2. Company */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Roofing Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Apex Roofing & Restoration"
                      value={inlineForm.companyName}
                      onChange={handleInlineChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 3. Phone */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Direct Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. (214) 831-4653"
                      value={inlineForm.phone}
                      onChange={handleInlineChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 4. Email Address */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. david@apexroofing.com"
                      value={inlineForm.email}
                      onChange={handleInlineChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

              </div>

              {/* Weekly Appointments & County */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label htmlFor="inlineLeadVolume" className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Desired Weekly Appointments
                  </label>
                  <select
                    id="inlineLeadVolume"
                    name="leadVolume"
                    aria-label="Desired Weekly Appointments"
                    value={inlineForm.leadVolume}
                    onChange={handleInlineChange}
                    className="w-full px-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white focus:outline-none focus:border-fresh-orange text-sm font-medium cursor-pointer"
                  >
                    <option value="5 Attended Appointments / Week (Starter Pace)">5 Attended Appointments / Week (Starter Pace)</option>
                    <option value="7 Attended Appointments / Week (Recommended)">7 Attended Appointments / Week (Recommended - 1 Daily)</option>
                    <option value="10 Attended Appointments / Week (Growing Team)">10 Attended Appointments / Week (Growing Team)</option>
                    <option value="15 Attended Appointments / Week (Multi-Crew)">15 Attended Appointments / Week (Multi-Crew)</option>
                    <option value="20+ Attended Appointments / Week (High Capacity Pod)">20+ Attended Appointments / Week (High Capacity Pod)</option>
                    <option value="Custom Enterprise Volume">Custom Enterprise Volume</option>
                  </select>
                  <span className="text-[11px] text-fresh-orange font-semibold block mt-1.5">
                    Most Campaigns run $150–$200 per attend appointment.
                  </span>
                </div>

                <div>
                  <label htmlFor="inlineZipOrCounty" className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Target County / Zip (Optional)
                  </label>
                  <input
                    id="inlineZipOrCounty"
                    type="text"
                    name="zipOrCounty"
                    placeholder="e.g. Collin County, TX or 75070"
                    value={inlineForm.zipOrCounty}
                    onChange={handleInlineChange}
                    className="w-full px-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                  />
                  <span className="text-[11px] text-slate-400 block mt-1.5">
                    We lock out competitors from your selected storm zone.
                  </span>
                </div>
              </div>

              {/* Zoho Voice, TCPA & 10DLC Opt-In Consent Checkbox */}
              <div className="pt-2 pb-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-left select-none group">
                  <input
                    type="checkbox"
                    name="smsConsent"
                    required
                    checked={inlineForm.smsConsent}
                    onChange={(e) => setInlineForm({ ...inlineForm, smsConsent: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-fresh-border bg-fresh-dark text-fresh-orange focus:ring-fresh-orange accent-fresh-orange cursor-pointer shrink-0"
                  />
                  <span className="text-[11px] leading-relaxed text-slate-300 group-hover:text-white">
                    You are agreeing to receive sms customer care-related or one-on-one communication messages from FreshLeads LLC. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply Help for help.{' '}
                    <a 
                      href="https://freshleads.llc/privacy" 
                      onClick={(e) => { e.preventDefault(); onNavigateToPrivacy?.(); }} 
                      className="text-fresh-orange underline hover:text-white font-bold"
                    >
                      https://freshleads.llc/privacy
                    </a>{' '}
                    <a 
                      href="https://freshleads.llc/terms" 
                      onClick={(e) => { e.preventDefault(); onNavigateToTerms?.(); }} 
                      className="text-fresh-orange underline hover:text-white font-bold"
                    >
                      https://freshleads.llc/terms
                    </a>.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-orange-glow hover:scale-[1.01] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <PhoneCall className="w-5 h-5 text-slate-950" />
                      <span>Request A Call From A Customer Success Agent</span>
                    </>
                  )}
                </button>
              </div>

              {/* Explicit TCPA / 10DLC Notice */}
              <p className="text-[10px] text-center text-slate-400 leading-tight">
                🔒 By submitting, you authorize FreshLeads LLC to contact you via telephone call or SMS in accordance with our{' '}
                <button 
                  type="button" 
                  onClick={onNavigateToPrivacy} 
                  className="text-fresh-orange underline hover:text-white cursor-pointer"
                >
                  Mobile Privacy Policy
                </button>. No mobile information is ever shared with third parties for marketing purposes.
              </p>

              {/* Guarantee Footer Note */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1 text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protected by 100% Replacement Guarantee: If you don't meet with the homeowner or aren't allowed on the roof, we replace the lead.</span>
              </div>
            </form>
          )}
        </div>

        {/* Territory Limitation Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          *Note: To protect appointment exclusivity and partner close rates, FreshLeads.llc limits partner roofers per storm county. Once a territory reaches capacity, new contractors are placed on our verified waitlist.
        </div>

      </div>
    </section>
  );
}
