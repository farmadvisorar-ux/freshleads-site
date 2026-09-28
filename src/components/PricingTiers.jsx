import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Star, Crown, Gem, Award, Sparkles, PhoneCall, Building2, User, Mail, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { submitTerritoryInquiry } from '../services/leadService';

export default function PricingTiers({ onOpenTerritoryModal, onNavigateToPrivacy, onNavigateToTerms }) {
  // State for inline quick request form
  const [inlineForm, setInlineForm] = useState({
    contactName: '',
    companyName: '',
    phone: '',
    email: '',
    leadVolume: 'Platinum Package (5 Leads / Week)',
    zipOrCounty: '',
    smsConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tiers = [
    {
      id: "gold",
      name: "Gold Package",
      icon: Award,
      badgeText: "Starter Consistency",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      accentBorder: "border-amber-500/30 hover:border-amber-400/80",
      tagline: "For solo owners or 1-2 hungry estimators",
      volume: "3 Leads",
      frequency: "/ week",
      monthlyEquivalent: "~12 pre-set inspections / mo",
      description: "Consistent weekly flow to establish predictable roof walk momentum without cold-knocking doors.",
      popular: false,
      features: [
        "3 Pre-Set Homeowner Inspections / Week",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Legal Statute",
        "100% Lead Replacement Guarantee",
        "Direct SMS & Email Dispatch",
        "Single County Exclusivity"
      ],
      cta: "Claim Gold (3/wk)"
    },
    {
      id: "platinum",
      name: "Platinum Package",
      icon: Crown,
      badgeText: "Most Popular • Better Than Gold",
      badgeColor: "bg-fresh-orange text-slate-950 font-black border-fresh-orange",
      accentBorder: "border-2 border-fresh-orange shadow-orange-glow",
      tagline: "The sweet spot for scaling 2-3 sales reps",
      volume: "5 Leads",
      frequency: "/ week",
      monthlyEquivalent: "~20 pre-set inspections / mo",
      description: "Our top-rated consistency pace. Keeps your top field reps continually closing 7 to 10+ signed insurance jobs a month.",
      popular: true,
      features: [
        "5 Pre-Set Homeowner Inspections / Week",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Legal Statute",
        "100% Lead Replacement Guarantee",
        "Priority Setter Queue & Fast Dispatch",
        "Full County Territory Exclusivity",
        "Direct Calendar & CRM Support"
      ],
      cta: "Claim Platinum (5/wk)"
    },
    {
      id: "diamond",
      name: "Diamond Package",
      icon: Gem,
      badgeText: "High Producer • Better Than Platinum",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      accentBorder: "border-cyan-500/30 hover:border-cyan-400/80",
      tagline: "For established storm restoration powerhouses",
      volume: "7 Leads",
      frequency: "/ week",
      monthlyEquivalent: "~28 pre-set inspections / mo",
      description: "High-volume acceleration. One confirmed roof inspection booked for your team every single business day.",
      popular: false,
      features: [
        "7 Pre-Set Homeowner Inspections / Week",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Legal Statute",
        "100% Lead Replacement Guarantee",
        "Dedicated Setter Team Allocation",
        "Multi-County Territory Coverage",
        "Direct Webhook to JobNimbus / AccuLynx"
      ],
      cta: "Claim Diamond (7/wk)"
    },
    {
      id: "titanium",
      name: "Titanium Elite Package",
      icon: Sparkles,
      badgeText: "Market Dominance • Total Lockout",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      accentBorder: "border-purple-500/30 hover:border-purple-400/80",
      tagline: "Complete county lockout for multi-crew operators",
      volume: "9+ Leads",
      frequency: "/ week",
      monthlyEquivalent: "36+ pre-set inspections / mo",
      description: "Maximum market dominance. We lock out competitors in your county and build a dedicated pod around your company.",
      popular: false,
      features: [
        "9 to 15+ Inspections / Week (Custom Pod)",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Legal Statute",
        "100% Lead Replacement Guarantee",
        "Total Competitor Lockout in County",
        "Senior Setter Management Hotline",
        "Enterprise CRM & Calendar Sync"
      ],
      cta: "Claim Titanium (9+/wk)"
    }
  ];

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
    <section id="pricing" className="py-24 bg-fresh-black relative border-t border-fresh-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <Zap className="w-4 h-4 text-fresh-orange" />
            <span>Customized Weekly Lead Schedules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Predictable Weekly Volume. <br />
            <span className="orange-gradient-text">Zero Lead-Buying Risk.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Choose your weekly appointment volume. Every tier is backed by our 100% replacement guarantee: <strong className="text-white">if you do not meet with the homeowner or are not allowed on the roof, we replace the lead. Simple as that.</strong>
          </p>
        </div>

        {/* 4 Weekly Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          {tiers.map((tier) => {
            const TierIcon = tier.icon;
            return (
              <div
                key={tier.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative bg-fresh-card p-6 sm:p-7 ${
                  tier.popular ? 'lg:-translate-y-2' : ''
                } ${tier.accentBorder}`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-fresh-orange text-slate-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-orange-sm flex items-center gap-1 shrink-0 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Tier Badge & Name */}
                  <div className="mb-5">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border mb-2.5 ${tier.badgeColor}`}>
                      <TierIcon className="w-3.5 h-3.5" />
                      <span>{tier.badgeText}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 font-medium mt-1 leading-snug">{tier.tagline}</p>
                  </div>

                  {/* Volume Display */}
                  <div className="pb-5 mb-5 border-b border-fresh-border">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-white">{tier.volume}</span>
                      <span className="text-fresh-orange text-sm font-bold uppercase">{tier.frequency}</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-semibold block mt-1">
                      {tier.monthlyEquivalent}
                    </span>
                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider block">
                      Package Includes:
                    </span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <div className="w-3.5 h-3.5 rounded-full bg-fresh-orange/20 text-fresh-orange flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenTerritoryModal({ volume: `${tier.name} (${tier.volume} / Week)` })}
                    className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.popular
                        ? 'bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 shadow-orange-sm hover:scale-[1.02]'
                        : 'bg-fresh-dark hover:bg-fresh-cardHover text-white border border-fresh-border hover:border-fresh-orange/50'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${tier.popular ? 'text-slate-950' : 'text-white'}`} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Short Callback Request Form Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-fresh-card via-fresh-dark to-fresh-card border-2 border-fresh-orange/40 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-fresh-orange/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fresh-orange/10 border border-fresh-orange/30 text-fresh-orange text-xs font-extrabold uppercase tracking-wider mb-2">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Direct Customer Success Callback</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
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
                Thank you, <strong className="text-white">{inlineForm.contactName || 'Contractor'}</strong>. A FreshLeads Customer Success Agent is reviewing your selected <strong className="text-fresh-orange">{inlineForm.leadVolume}</strong> and will call you at <strong className="text-white">{inlineForm.phone}</strong> shortly.
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

                {/* 2. Business Name */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Business / Roofing Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Apex Storm Restoration"
                      value={inlineForm.companyName}
                      onChange={handleInlineChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 3. Phone Number */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Phone Number (For Callback) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. (214) 555-0198"
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

              {/* Package Selector & County */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label htmlFor="inlineLeadVolume" className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Weekly Package Selection
                  </label>
                  <select
                    id="inlineLeadVolume"
                    name="leadVolume"
                    aria-label="Weekly Package Selection"
                    value={inlineForm.leadVolume}
                    onChange={handleInlineChange}
                    className="w-full px-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white focus:outline-none focus:border-fresh-orange text-sm font-medium cursor-pointer"
                  >
                    <option value="Gold Package (3 Leads / Week)">Gold Package (3 Leads / Week)</option>
                    <option value="Platinum Package (5 Leads / Week)">Platinum Package (5 Leads / Week) - Most Popular</option>
                    <option value="Diamond Package (7 Leads / Week)">Diamond Package (7 Leads / Week)</option>
                    <option value="Titanium Elite Package (9+ Leads / Week)">Titanium Elite Package (9+ Leads / Week)</option>
                    <option value="Custom Enterprise Volume">Custom Enterprise Volume (10+ Leads / Week)</option>
                  </select>
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
                    I consent to receive calls and SMS text messages from FreshLeads LLC at the phone number provided above regarding roofing appointments, lead volume, and customer support (including calls placed via Zoho Voice telephony). Consent is not a condition of purchase. Message frequency varies. Msg & data rates may apply. Reply <strong className="text-white">STOP</strong> to opt out, or <strong className="text-white">HELP</strong> for support. I agree to the{' '}
                    <a 
                      href="/terms" 
                      onClick={(e) => { e.preventDefault(); onNavigateToTerms?.(); }} 
                      className="text-fresh-orange underline hover:text-white font-bold"
                    >
                      Terms of Service
                    </a>{' '}and{' '}
                    <a 
                      href="/privacy" 
                      onClick={(e) => { e.preventDefault(); onNavigateToPrivacy?.(); }} 
                      className="text-fresh-orange underline hover:text-white font-bold"
                    >
                      Privacy Policy
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
