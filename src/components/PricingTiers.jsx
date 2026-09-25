import React from 'react';
import { Check, ShieldCheck, Zap, ArrowRight, Star } from 'lucide-react';

export default function PricingTiers({ onOpenTerritoryModal }) {
  const tiers = [
    {
      name: "Starter Consistency",
      tagline: "For solo owners or 1-2 hungry estimators",
      volume: "10 Appointments",
      frequency: "/ month",
      description: "Lock in steady, pre-set inspections every week without hiring an internal cold-calling setter team.",
      popular: false,
      features: [
        "10 Pre-Set Homeowner Inspection Slots",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Statute of Limitations",
        "100% Lead Replacement Guarantee",
        "Direct SMS & Email Dispatch",
        "Single County Coverage"
      ],
      cta: "Claim 10 Monthly Appointments"
    },
    {
      name: "Growth Dominator",
      tagline: "The 30+ Roofer Scale Blueprint",
      volume: "25 Appointments",
      frequency: "/ month",
      description: "Our most popular package for established roofers ready to maintain steady weekly production and scale past $2M/yr.",
      popular: true,
      features: [
        "25 Pre-Set Homeowner Inspection Slots",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Statute of Limitations",
        "100% Lead Replacement Guarantee",
        "Priority Setter Queue & Fast Dispatch",
        "Full County Territory Exclusivity Lock",
        "Custom Calendar & CRM Integration Support"
      ],
      cta: "Claim 25 Monthly Appointments"
    },
    {
      name: "Storm Monopoly",
      tagline: "Total Market Lockout & Dominance",
      volume: "50+ Appointments",
      frequency: "/ month",
      description: "Complete county lockout. We dedicate entire setter pods exclusively to your roofing company in your storm zones.",
      popular: false,
      features: [
        "50+ Pre-Set Homeowner Inspections",
        "100% Call Audio Recordings Included",
        "Active Homeowner Insurance Confirmed",
        "Storm Date Within Statute of Limitations",
        "100% Lead Replacement Guarantee",
        "Complete County Competitor Lockout",
        "Dedicated Senior Setter Team",
        "Direct API / Webhook Integration (JobNimbus/AccuLynx)"
      ],
      cta: "Lock Out My County"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-fresh-black relative border-t border-fresh-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <Zap className="w-4 h-4 text-fresh-orange" />
            <span>Transparent Appointment Allocation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Predictable Volume. <br />
            <span className="orange-gradient-text">Zero Lead-Buying Risk.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every tier is backed by our 100% replacement guarantee. You never pay for unviable or no-show leads. Pick the consistency volume that matches your sales capacity.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? 'bg-gradient-to-b from-fresh-cardHover via-fresh-card to-fresh-dark border-2 border-fresh-orange shadow-orange-glow lg:-translate-y-2'
                  : 'bg-fresh-card border border-fresh-border hover:border-fresh-borderLight'
              } p-8`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-fresh-orange text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-orange-sm flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Most Popular With Scaling Roofers</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-white">{tier.name}</h3>
                  <p className="text-xs text-fresh-slate font-medium mt-1">{tier.tagline}</p>
                </div>

                {/* Volume Display */}
                <div className="pb-6 mb-6 border-b border-fresh-border">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-white">{tier.volume}</span>
                    <span className="text-slate-400 text-sm font-semibold">{tier.frequency}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-3.5 mb-8">
                  <span className="text-[11px] uppercase font-bold text-fresh-slate tracking-wider block">
                    What's Included:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-fresh-orange/20 text-fresh-orange flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Protected by 100% Replacement Guarantee</span>
                  </span>
                </div>

                <button
                  onClick={() => onOpenTerritoryModal({ volume: `${tier.volume} / month (${tier.name})` })}
                  className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-fresh-orange hover:bg-fresh-orangeHover text-white shadow-orange-sm hover:scale-[1.02]'
                      : 'bg-fresh-dark hover:bg-fresh-border text-white border border-fresh-border'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Territory Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto">
          *Note: To protect appointment value and contractor close rates, FreshLeads.llc limits partner roofers per storm county. Once a territory reaches capacity, new contractors are placed on a waitlist.
        </div>

      </div>
    </section>
  );
}
