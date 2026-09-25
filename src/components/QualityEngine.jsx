import React from 'react';
import { ShieldCheck, CalendarCheck, Mic, CloudLightning, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function QualityEngine({ onOpenTerritoryModal }) {
  const pillars = [
    {
      icon: CalendarCheck,
      title: "Pre-Set Inspection Appointments",
      tagline: "Confirmed Date & Time Window",
      description: "Our setters confirm directly with the homeowner a specific day and time for your estimator to arrive and perform the roof inspection. No cold knocking or ambiguous 'call them sometime' leads.",
      highlight: "Homeowner is expecting you at their door",
      color: "text-fresh-orange",
      borderGlow: "group-hover:border-fresh-orange/60"
    },
    {
      icon: Mic,
      title: "Full Call Audio Recording Included",
      tagline: "100% Transparent Setter Audio",
      description: "You receive the actual call audio recording before you roll a truck. Hear the homeowner's voice, their damage concerns, insurance details, and setter confirmation notes.",
      highlight: "Listen to homeowner demeanor before dispatch",
      color: "text-fresh-orange",
      borderGlow: "group-hover:border-fresh-orange/60"
    },
    {
      icon: ShieldCheck,
      title: "Active Insurance Confirmed",
      tagline: "No Uninsured or Renter Dead-Ends",
      description: "Our setters verify that the homeowner owns the property and holds an active, up-to-date homeowner insurance policy with reputable carriers (State Farm, Allstate, Travelers, etc.).",
      highlight: "Pre-screened for insurable storm claim eligibility",
      color: "text-emerald-400",
      borderGlow: "group-hover:border-emerald-500/50"
    },
    {
      icon: CloudLightning,
      title: "Storm Dates Within Legal Statute",
      tagline: "Actionable Claim Filing Windows",
      description: "All leads are gathered strictly from localized storm dates within the legal statute of limitations to file a valid insurance claim. We cross-reference radar hail swaths and high-wind reports.",
      highlight: "Claimable hail & wind dates with legitimate proof",
      color: "text-fresh-orange",
      borderGlow: "group-hover:border-fresh-orange/60"
    },
    {
      icon: RefreshCw,
      title: "100% Replacement Guarantee",
      tagline: "Zero-Risk Lead Protection",
      description: "If one of our hot leads isn't good for any legitimate reason (no-show, homeowner denied damage, uninsured), we replace it immediately with a fresh appointment at zero added cost.",
      highlight: "Zero risk lead replacement policy",
      color: "text-emerald-400",
      borderGlow: "group-hover:border-emerald-500/50",
      isSpecial: true
    }
  ];

  return (
    <section id="guarantee" className="py-24 bg-fresh-black relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-fresh-orange/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <ShieldCheck className="w-4 h-4 text-fresh-orange" />
            <span>The FreshLeads Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            The 5-Point Quality Engine <br />
            <span className="orange-gradient-text">That Guarantees Your Growth.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most lead companies sell shared garbage or digital clicks. FreshLeads.llc delivers fully vetted, pre-set inspections where homeowner insurance and storm dates are already verified.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl bg-fresh-card border border-fresh-border p-8 transition-all duration-300 group hover:-translate-y-1 ${pillar.borderGlow} ${
                  pillar.isSpecial ? 'lg:col-span-2 bg-gradient-to-br from-fresh-card to-fresh-cardHover border-emerald-500/30' : ''
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-fresh-dark border border-fresh-border flex items-center justify-center ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-fresh-dark text-slate-400 border border-fresh-border">
                    Pillar #0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${pillar.color}`}>
                  {pillar.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>

                {/* Highlight Checkmark */}
                <div className="pt-4 border-t border-fresh-border flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-fresh-orange shrink-0" />
                  <span className="text-xs font-semibold text-white">
                    {pillar.highlight}
                  </span>
                </div>

                {pillar.isSpecial && (
                  <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <div className="text-xs text-slate-200">
                      <strong className="text-emerald-400 block font-bold text-sm">You Never Pay For Bad Appointments:</strong>
                      We remove the risk so you can focus entirely on inspecting roofs and closing insurance restoration claims.
                    </div>
                    <button
                      onClick={() => onOpenTerritoryModal()}
                      className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-fresh-black font-extrabold text-xs uppercase tracking-wider shrink-0 transition-colors"
                    >
                      Claim Guaranteed Leads
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-fresh-card via-fresh-dark to-fresh-card border-2 border-fresh-orange/40 p-8 sm:p-10 shadow-orange-glow text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-fresh-orange block">
              100% REPLACEMENT POLICY IN WRITING
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-white">
              "If One Of Our Hot Leads Isn't Good, We Replace It."
            </h4>
            <p className="text-sm text-slate-300">
              This gives your roofing business the option to grow rapidly. You no longer carry the risk of no-shows or unqualified contacts.
            </p>
          </div>

          <button
            onClick={() => onOpenTerritoryModal()}
            className="px-8 py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-white font-extrabold text-sm uppercase tracking-wider shadow-orange-sm hover:scale-105 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Lock Your County In</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
