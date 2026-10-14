import React from 'react';
import { Check, X, ShieldCheck, Zap, Sparkles, ArrowRight, Phone } from 'lucide-react';

export default function ComparisonTable({ onOpenTerritoryModal }) {
  const comparisonRows = [
    {
      feature: 'Lead Exclusivity',
      freshleads: '100% Exclusive — Sold only to your company',
      shared: 'Shared with 4 to 6 rival roofers simultaneously',
      d2d: 'Exclusive if nobody else knocked the block',
      freshleadsAdvantage: true
    },
    {
      feature: 'Full Call Audio Recording',
      freshleads: 'Included on 100% of appointments before you drive',
      shared: 'Never provided (blind lead contact info only)',
      d2d: 'N/A — rep conversations unmonitored',
      freshleadsAdvantage: true
    },
    {
      feature: 'Active Insurance Pre-Verified',
      freshleads: 'Confirmed active carrier (State Farm, Allstate, USAA, etc.)',
      shared: 'No insurance verification (many renters & uninsured)',
      d2d: 'Must qualify on the doorstep after knocking',
      freshleadsAdvantage: true
    },
    {
      feature: 'Storm Date in Legal Statute',
      freshleads: 'Radar-verified hail/wind swath within claim window',
      shared: 'Random homeowners looking for cheap minor repairs',
      d2d: 'Hit-or-miss depending on canvasser training',
      freshleadsAdvantage: true
    },
    {
      feature: '100% Replacement Policy',
      freshleads: 'Replaced immediately if not met or not allowed on roof',
      shared: 'Zero replacement or credits for ghost leads / no-shows',
      d2d: 'Wasted rep salary and fuel if homeowner is not home',
      freshleadsAdvantage: true
    },
    {
      feature: 'Average Inspection Completion',
      freshleads: '60%+ inspection completion rate on all deliveries',
      shared: '15% - 25% (race-to-the-door phone spam)',
      d2d: '5% - 10% door open-to-inspection rate',
      freshleadsAdvantage: true
    },
    {
      feature: 'Pricing Model',
      freshleads: 'Most campaigns $150–$200 per attend appointment',
      shared: '$90–$140 for shared, unverified contact info',
      d2d: '$3,500–$5,000/mo rep draw + fuel + management',
      freshleadsAdvantage: true
    }
  ];

  return (
    <section id="comparison" className="py-14 sm:py-24 bg-fresh-black relative border-t border-fresh-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <Zap className="w-4 h-4 text-fresh-orange" />
            <span>The Competitive Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Why Top Roofing Contractors <br />
            <span className="orange-gradient-text">Switch To FreshLeads.</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
            Stop burning sales payroll chasing shared internet contacts or having reps sit through ghost appointments. Compare our recorded, guaranteed appointment model against traditional lead sources.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="rounded-2xl border-2 border-fresh-border bg-fresh-card overflow-hidden shadow-2xl">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-fresh-border bg-fresh-dark/90">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider w-1/4">
                    Comparison Metric
                  </th>
                  <th className="p-4 sm:p-5 text-sm sm:text-base font-black text-fresh-orange bg-fresh-orange/10 border-x border-fresh-orange/30 w-1/3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-fresh-orange" />
                      <span>FreshLeads.llc (Pre-Set & Recorded)</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider w-1/5">
                    Shared Lead Brokers (Angi / HomeAdvisor)
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider w-1/5">
                    Door-To-Door Canvassing
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-fresh-border/60 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-fresh-dark/40 transition-colors">
                    {/* Feature */}
                    <td className="p-4 sm:p-5 font-bold text-white">
                      {row.feature}
                    </td>

                    {/* FreshLeads Value */}
                    <td className="p-4 sm:p-5 font-extrabold text-white bg-fresh-orange/5 border-x border-fresh-orange/20">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                        <span>{row.freshleads}</span>
                      </div>
                    </td>

                    {/* Shared Leads */}
                    <td className="p-4 sm:p-5 text-slate-400 font-medium">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{row.shared}</span>
                      </div>
                    </td>

                    {/* D2D */}
                    <td className="p-4 sm:p-5 text-slate-400 font-medium">
                      <div className="flex items-start gap-2">
                        <span className="w-4 h-4 text-amber-400 shrink-0 font-bold">•</span>
                        <span>{row.d2d}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Strip */}
          <div className="p-4 sm:p-6 bg-fresh-dark/95 border-t border-fresh-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                Backed by our <strong>100% Replacement Guarantee</strong>: Didn&apos;t meet the homeowner or walk the roof? It is replaced immediately.
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenTerritoryModal()}
                className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-xs uppercase tracking-wider shadow-orange-sm hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Check My County</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:9036905969"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-fresh-card border border-fresh-border hover:border-fresh-orange text-white font-bold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-fresh-orange" />
                <span>(903) 690-5969</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
