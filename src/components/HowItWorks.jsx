import React from 'react';
import { CloudLightning, PhoneCall, Send, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HowItWorks({ onOpenTerritoryModal }) {
  const steps = [
    {
      num: "01",
      icon: CloudLightning,
      title: "Storm Radar & Statute Targeting",
      subtitle: "Verified Weather Intelligence",
      description: "We pinpoint exact hail swaths (1.5\" to 2.75\"+) and severe wind zones where the state's legal statute of limitations to file a property claim is still fully active.",
      detail: "No stale dates or expired insurance claim windows."
    },
    {
      num: "02",
      icon: PhoneCall,
      title: "Setter Appointment & Insurance Vetting",
      subtitle: "Live Human Confirmation",
      description: "Our trained setters speak with the homeowner, confirm active homeowner insurance (State Farm, Allstate, etc.), and schedule an exact inspection day and time.",
      detail: "Both decision-makers confirmed present for the walk."
    },
    {
      num: "03",
      icon: Send,
      title: "Instant Audio & Dossier Handoff",
      subtitle: "Sent Straight To Your Phone / CRM",
      description: "Before you drive, you receive the full homeowner dossier and the complete setter call recording. Listen to the homeowner's tone and expectations in your truck.",
      detail: "Includes property details, roof type & carrier."
    },
    {
      num: "04",
      icon: Trophy,
      title: "You Inspect, File & Close",
      subtitle: "100% Replacement Guarantee Shield",
      description: "Walk the roof, photograph the hail/wind damage, and sign the insurance contingency. If any hot lead flakes or is unqualified, we replace it immediately.",
      detail: "Zero risk. Consistent weekly calendar volume."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-fresh-dark/60 relative border-t border-fresh-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <span>The FreshLeads Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            From Hail Storm Radar <br />
            <span className="orange-gradient-text">To Signed Roof Contract.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A seamless, battle-tested lead generation engine designed specifically for storm restoration roofing contractors who value high-converting appointments over dead numbers.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-fresh-card rounded-2xl border border-fresh-border p-6 flex flex-col justify-between hover:border-fresh-orange/50 transition-all duration-300 group hover:-translate-y-1 shadow-card-dark"
              >
                <div>
                  {/* Step Top */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-fresh-borderLight group-hover:text-fresh-orange transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-fresh-dark border border-fresh-border flex items-center justify-center text-fresh-orange">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] uppercase font-bold text-fresh-orange tracking-wider block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-fresh-border text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenTerritoryModal()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-white font-extrabold text-sm uppercase tracking-wider shadow-orange-glow hover:scale-105 transition-all"
          >
            <span>Activate Pipeline In My Zip Code</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
