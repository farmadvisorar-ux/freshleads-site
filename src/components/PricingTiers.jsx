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
    leadVolume: '7 Leads / Week ($1,650 / week) - Most Popular',
    zipOrCounty: '',
    smsConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Billing cycle per tier: 'weekly' | 'monthly'
  const [billingCycles, setBillingCycles] = useState({
    '5-leads': 'weekly',
    '7-leads': 'weekly',
    '12-leads': 'weekly',
    '20-leads': 'weekly',
    '25-enterprise': 'weekly',
  });

  const setAllBilling = (cycle) => {
    setBillingCycles({
      '5-leads': cycle,
      '7-leads': cycle,
      '12-leads': cycle,
      '20-leads': cycle,
      '25-enterprise': cycle,
    });
  };

  const setCardBilling = (tierId, cycle) => {
    setBillingCycles((prev) => ({ ...prev, [tierId]: cycle }));
  };

  const allWeekly = Object.values(billingCycles).every((c) => c === 'weekly');
  const allMonthly = Object.values(billingCycles).every((c) => c === 'monthly');

  const handleCtaClick = (e, tier, cycle) => {
    const currentPricing = tier.pricing[cycle];
    const targetLink = currentPricing.link;

    // If external payment URL (e.g. direct Stripe checkout buy.stripe.com)
    if (targetLink && targetLink.startsWith('https://buy.stripe.com')) {
      return; // Follow link directly
    }

    // Default action: open territory & onboarding modal with selected tier + cycle pre-filled
    e.preventDefault();
    onOpenTerritoryModal({
      volume: `${tier.name} (${cycle === 'weekly' ? 'Weekly' : 'Monthly'} - ${currentPricing.price})`,
      billing: cycle,
      price: currentPricing.price,
      checkoutUrl: targetLink
    });
  };

  const tiers = [
    {
      id: "5-leads",
      name: "5 Leads / Week",
      icon: Award,
      badgeText: "Starter Pace",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      accentBorder: "border-amber-500/30 hover:border-amber-400/80",
      tagline: "For solo owners or 1-2 hungry estimators",
      popular: false,
      pricing: {
        weekly: {
          price: "$1,250",
          period: "/ week",
          rate: "$250 / pre-set inspection",
          leadCount: "5 Pre-Set Leads / Wk",
          monthlyEquivalent: "~20 pre-set inspections / mo",
          subtext: "Consistent weekly flow to establish predictable momentum. Billed weekly.",
          savingsBadge: null,
          cta: "Claim 5 Leads / Wk ($1,250)",
          link: "https://freshleads.llc/checkout/5-leads-weekly"
        },
        monthly: {
          price: "$4,500",
          period: "/ month",
          rate: "$225 / pre-set inspection",
          leadCount: "20 Pre-Set Leads / Mo",
          monthlyEquivalent: "5 pre-set inspections / week",
          subtext: "Save $500/mo with monthly billing. Priority setter allocation reserved.",
          savingsBadge: "Save $500/mo",
          cta: "Claim 20 Leads / Mo ($4,500)",
          link: "https://freshleads.llc/checkout/5-leads-monthly"
        }
      },
      features: [
        "5 Pre-Set Homeowner Inspections / Week",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Legal Statute",
        "100% Lead Replacement Guarantee",
        "Direct SMS & Email Dispatch",
        "Single County Territory Protection"
      ]
    },
    {
      id: "7-leads",
      name: "7 Leads / Week",
      icon: Crown,
      badgeText: "Most Popular • High Producer",
      badgeColor: "bg-fresh-orange text-slate-950 font-black border-fresh-orange",
      accentBorder: "border-2 border-fresh-orange shadow-orange-glow",
      tagline: "The sweet spot for scaling 2-3 sales reps",
      popular: true,
      pricing: {
        weekly: {
          price: "$1,650",
          period: "/ week",
          rate: "$235 / pre-set inspection",
          leadCount: "7 Pre-Set Leads / Wk",
          monthlyEquivalent: "~28 pre-set inspections / mo",
          subtext: "Our top-rated pace. One confirmed inspection booked every business day.",
          savingsBadge: null,
          cta: "Claim 7 Leads / Wk ($1,650)",
          link: "https://freshleads.llc/checkout/7-leads-weekly"
        },
        monthly: {
          price: "$5,900",
          period: "/ month",
          rate: "$210 / pre-set inspection",
          leadCount: "28 Pre-Set Leads / Mo",
          monthlyEquivalent: "7 pre-set inspections / week",
          subtext: "Save $700/mo. Keeps estimators closing 8-12+ signed insurance claims monthly.",
          savingsBadge: "Save $700/mo",
          cta: "Claim 28 Leads / Mo ($5,900)",
          link: "https://freshleads.llc/checkout/7-leads-monthly"
        }
      },
      features: [
        "7 Pre-Set Homeowner Inspections / Week",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Legal Statute",
        "100% Lead Replacement Guarantee",
        "Priority Setter Queue & Fast Dispatch",
        "Full County Territory Exclusivity",
        "Direct Calendar & CRM Support"
      ]
    },
    {
      id: "12-leads",
      name: "12 Leads / Week",
      icon: Gem,
      badgeText: "Accelerated Growth",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      accentBorder: "border-cyan-500/30 hover:border-cyan-400/80",
      tagline: "For expanding teams & multi-rep branches",
      popular: false,
      pricing: {
        weekly: {
          price: "$2,650",
          period: "/ week",
          rate: "$220 / pre-set inspection",
          leadCount: "12 Pre-Set Leads / Wk",
          monthlyEquivalent: "~48 pre-set inspections / mo",
          subtext: "High-volume acceleration. Multiple confirmed roof walks booked daily.",
          savingsBadge: null,
          cta: "Claim 12 Leads / Wk ($2,650)",
          link: "https://freshleads.llc/checkout/12-leads-weekly"
        },
        monthly: {
          price: "$9,400",
          period: "/ month",
          rate: "$195 / pre-set inspection",
          leadCount: "48 Pre-Set Leads / Mo",
          monthlyEquivalent: "12 pre-set inspections / week",
          subtext: "Save $1,200/mo. Dedicated setter pod allocated across target counties.",
          savingsBadge: "Save $1,200/mo",
          cta: "Claim 48 Leads / Mo ($9,400)",
          link: "https://freshleads.llc/checkout/12-leads-monthly"
        }
      },
      features: [
        "12 Pre-Set Homeowner Inspections / Week",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Legal Statute",
        "100% Lead Replacement Guarantee",
        "Dedicated Setter Team Allocation",
        "Multi-County Territory Coverage",
        "Direct Webhook to JobNimbus / AccuLynx"
      ]
    },
    {
      id: "20-leads",
      name: "20 Leads / Week",
      icon: Sparkles,
      badgeText: "Market Dominance",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      accentBorder: "border-purple-500/30 hover:border-purple-400/80",
      tagline: "High-capacity volume for multi-crew operators",
      popular: false,
      pricing: {
        weekly: {
          price: "$4,000",
          period: "/ week",
          rate: "$200 / pre-set inspection",
          leadCount: "20 Pre-Set Leads / Wk",
          monthlyEquivalent: "~80 pre-set inspections / mo",
          subtext: "County dominance. 4 daily inspections to keep 4-6 estimators fully booked.",
          savingsBadge: null,
          cta: "Claim 20 Leads / Wk ($4,000)",
          link: "https://freshleads.llc/checkout/20-leads-weekly"
        },
        monthly: {
          price: "$14,200",
          period: "/ month",
          rate: "$177 / pre-set inspection",
          leadCount: "80 Pre-Set Leads / Mo",
          monthlyEquivalent: "20 pre-set inspections / week",
          subtext: "Save $1,800/mo. Dedicated full-time setter pod locked to your brand.",
          savingsBadge: "Save $1,800/mo",
          cta: "Claim 80 Leads / Mo ($14,200)",
          link: "https://freshleads.llc/checkout/20-leads-monthly"
        }
      },
      features: [
        "20 Pre-Set Homeowner Inspections / Week",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Legal Statute",
        "100% Lead Replacement Guarantee",
        "Dedicated Full-Time Setter Pod",
        "Regional Territory Lockout",
        "Priority Lead Dispatch & Real-Time Sync"
      ]
    },
    {
      id: "25-enterprise",
      name: "25+ Enterprise",
      icon: Building2,
      badgeText: "Custom Pod • Total Lockout",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      accentBorder: "border-emerald-500/30 hover:border-emerald-400/80",
      tagline: "Exclusive dedicated pod for regional powerhouses",
      popular: false,
      pricing: {
        weekly: {
          price: "$4,950+",
          period: "/ week",
          rate: "Custom volume rate",
          leadCount: "25+ Leads / Wk (Custom)",
          monthlyEquivalent: "100+ pre-set inspections / mo",
          subtext: "Total competitor lockout. Custom pod built exclusively around your company.",
          savingsBadge: null,
          cta: "Claim 25+ Enterprise",
          link: "https://freshleads.llc/checkout/25-enterprise-weekly"
        },
        monthly: {
          price: "$17,500+",
          period: "/ month",
          rate: "Discounted custom rate",
          leadCount: "100+ Leads / Mo (Custom)",
          monthlyEquivalent: "25+ pre-set inspections / week",
          subtext: "Save $2,300+/mo. Senior setter manager & daily inspection war room.",
          savingsBadge: "Save $2,300+/mo",
          cta: "Claim 25+ Enterprise",
          link: "https://freshleads.llc/checkout/25-enterprise-monthly"
        }
      },
      features: [
        "25+ Inspections / Week (Custom Pod Capacity)",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Legal Statute",
        "100% Lead Replacement Guarantee",
        "Total Competitor Lockout in Target Markets",
        "Dedicated Account Director & Daily War Room",
        "Enterprise CRM, Custom API & Webhook Sync"
      ]
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
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <Zap className="w-4 h-4 text-fresh-orange" />
            <span>Weekly & Monthly Flexible Lead Schedules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Predictable Lead Flow. <br />
            <span className="orange-gradient-text">Zero Lead-Buying Risk.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Choose between weekly flexibility or discounted monthly consistency. Every tier is backed by our 100% replacement guarantee: <strong className="text-white">if you do not meet with the homeowner or are not allowed on the roof, we replace the lead.</strong>
          </p>
        </div>

        {/* Master Billing Cycle Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-fresh-card border-2 border-fresh-border shadow-xl">
            <button
              type="button"
              onClick={() => setAllBilling('weekly')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                allWeekly
                  ? 'bg-fresh-orange text-slate-950 shadow-orange-sm scale-[1.02]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Weekly Billing
            </button>
            <button
              type="button"
              onClick={() => setAllBilling('monthly')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                allMonthly
                  ? 'bg-fresh-orange text-slate-950 shadow-orange-sm scale-[1.02]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Monthly Billing</span>
              <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-emerald-500 text-slate-950 uppercase tracking-tight">
                Save Up To $2,300/mo
              </span>
            </button>
          </div>
        </div>

        {/* 5 Weekly / Monthly Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch mb-16">
          {tiers.map((tier) => {
            const TierIcon = tier.icon;
            const currentCycle = billingCycles[tier.id] || 'weekly';
            const currentPricing = tier.pricing[currentCycle];

            return (
              <div
                key={tier.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative bg-fresh-card p-5 sm:p-6 ${
                  tier.popular ? 'xl:-translate-y-2' : ''
                } ${tier.accentBorder}`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-fresh-orange text-slate-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-orange-sm flex items-center gap-1 shrink-0 whitespace-nowrap z-10">
                    <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Dedicated Week / Month Toggle on top of each card */}
                  <div className="bg-fresh-dark/95 p-1 rounded-xl border border-fresh-border flex items-center justify-between gap-1 mb-4 select-none">
                    <button
                      type="button"
                      onClick={() => setCardBilling(tier.id, 'weekly')}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                        currentCycle === 'weekly'
                          ? 'bg-fresh-orange text-slate-950 shadow-orange-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Week
                    </button>
                    <button
                      type="button"
                      onClick={() => setCardBilling(tier.id, 'monthly')}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        currentCycle === 'monthly'
                          ? 'bg-fresh-orange text-slate-950 shadow-orange-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>Month</span>
                      {tier.pricing.monthly.savingsBadge && (
                        <span className={`text-[8px] px-1 py-0.2 rounded font-black tracking-tight ${
                          currentCycle === 'monthly' ? 'bg-slate-950 text-fresh-orange' : 'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          SAVE
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Tier Badge & Name */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border mb-2 ${tier.badgeColor}`}>
                      <TierIcon className="w-3.5 h-3.5" />
                      <span>{tier.badgeText}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 font-medium mt-1 leading-snug">{tier.tagline}</p>
                  </div>

                  {/* Price & Billing Display */}
                  <div className="pb-4 mb-4 border-b border-fresh-border">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {currentPricing.price}
                      </span>
                      <span className="text-fresh-orange text-xs sm:text-sm font-bold uppercase">
                        {currentPricing.period}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-1 text-[11px]">
                      <span className="text-emerald-400 font-bold">
                        {currentPricing.leadCount}
                      </span>
                      {currentCycle === 'monthly' && currentPricing.savingsBadge && (
                        <span className="text-fresh-orange font-extrabold bg-fresh-orange/15 border border-fresh-orange/30 px-1.5 py-0.5 rounded text-[10px]">
                          {currentPricing.savingsBadge}
                        </span>
                      )}
                    </div>

                    <span className="text-[10px] text-slate-400 block mt-1 font-mono">
                      {currentPricing.rate}
                    </span>

                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {currentPricing.subtext}
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider block">
                      Package Includes:
                    </span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-200">
                        <div className="w-3.5 h-3.5 rounded-full bg-fresh-orange/20 text-fresh-orange flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button with Dynamic Link */}
                <div className="pt-2">
                  <a
                    href={currentPricing.link}
                    onClick={(e) => handleCtaClick(e, tier, currentCycle)}
                    target={currentPricing.link.startsWith('http') && !currentPricing.link.includes('freshleads.llc/checkout') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.popular
                        ? 'bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 shadow-orange-sm hover:scale-[1.02]'
                        : 'bg-fresh-dark hover:bg-fresh-cardHover text-white border border-fresh-border hover:border-fresh-orange/50'
                    }`}
                  >
                    <span>{currentPricing.cta}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${tier.popular ? 'text-slate-950' : 'text-white'}`} />
                  </a>
                  <div className="text-center mt-2">
                    <span className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>100% Replacement Guarantee</span>
                    </span>
                  </div>
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
                    Weekly or Monthly Package Selection
                  </label>
                  <select
                    id="inlineLeadVolume"
                    name="leadVolume"
                    aria-label="Weekly or Monthly Package Selection"
                    value={inlineForm.leadVolume}
                    onChange={handleInlineChange}
                    className="w-full px-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white focus:outline-none focus:border-fresh-orange text-sm font-medium cursor-pointer"
                  >
                    <optgroup label="Weekly Billing Packages">
                      <option value="5 Leads / Week ($1,250 / week)">5 Leads / Week ($1,250 / week)</option>
                      <option value="7 Leads / Week ($1,650 / week) - Most Popular">7 Leads / Week ($1,650 / week) - Most Popular</option>
                      <option value="12 Leads / Week ($2,650 / week)">12 Leads / Week ($2,650 / week)</option>
                      <option value="20 Leads / Week ($4,000 / week)">20 Leads / Week ($4,000 / week)</option>
                      <option value="25+ Enterprise ($4,950+ / week)">25+ Enterprise ($4,950+ / week)</option>
                    </optgroup>
                    <optgroup label="Monthly Billing Packages (Discounted)">
                      <option value="5 Leads / Week ($4,500 / month - Save $500)">5 Leads / Week ($4,500 / month - Save $500)</option>
                      <option value="7 Leads / Week ($5,900 / month - Save $700)">7 Leads / Week ($5,900 / month - Save $700)</option>
                      <option value="12 Leads / Week ($9,400 / month - Save $1,200)">12 Leads / Week ($9,400 / month - Save $1,200)</option>
                      <option value="20 Leads / Week ($14,200 / month - Save $1,800)">20 Leads / Week ($14,200 / month - Save $1,800)</option>
                      <option value="25+ Enterprise ($17,500+ / month - Save $2,300+)">25+ Enterprise ($17,500+ / month - Save $2,300+)</option>
                    </optgroup>
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
