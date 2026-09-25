import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RoiCalculator({ onOpenTerritoryModal }) {
  const [weeklyAppointments, setWeeklyAppointments] = useState(10);
  const [avgJobValue, setAvgJobValue] = useState(16500);
  const [closeRate, setCloseRate] = useState(35);

  const monthlyAppointments = weeklyAppointments * 4;
  const monthlyClosedJobs = Math.round(monthlyAppointments * (closeRate / 100));
  const monthlyRevenue = monthlyClosedJobs * avgJobValue;
  const annualRevenue = monthlyRevenue * 12;

  return (
    <section id="calculator" className="py-24 bg-fresh-black relative border-t border-fresh-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <Calculator className="w-4 h-4 text-fresh-orange" />
            <span>Interactive Revenue Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            See What Staying Consistent <br />
            <span className="orange-gradient-text">Does To Your Bottom Line.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Plug in your numbers below. Notice how a predictable flow of pre-set, insurance-verified appointments compounds into game-changing annual revenue.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-5xl mx-auto bg-fresh-card rounded-2xl border border-fresh-border shadow-card-dark overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
            
            {/* Slider 1: Weekly Appointments */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Weekly Pre-Set Inspections:</span>
                </label>
                <span className="px-3 py-1 rounded-lg bg-fresh-dark border border-fresh-border text-fresh-orange font-black text-base">
                  {weeklyAppointments} appointments / wk
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="30"
                step="1"
                value={weeklyAppointments}
                onChange={(e) => setWeeklyAppointments(Number(e.target.value))}
                className="w-full h-2.5 bg-fresh-dark rounded-lg appearance-none cursor-pointer accent-fresh-orange"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
                <span>3/wk (Starter)</span>
                <span>10/wk (Standard)</span>
                <span>30/wk (Dominance)</span>
              </div>
            </div>

            {/* Slider 2: Average Job / Claim Value */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Average Insurance Claim Value:</span>
                </label>
                <span className="px-3 py-1 rounded-lg bg-fresh-dark border border-fresh-border text-emerald-400 font-black text-base">
                  ${avgJobValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="9000"
                max="35000"
                step="500"
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full h-2.5 bg-fresh-dark rounded-lg appearance-none cursor-pointer accent-fresh-orange"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
                <span>$9,000 (Asphalt)</span>
                <span>$16,500 (Avg Architectural)</span>
                <span>$35,000+ (Large / Tile)</span>
              </div>
            </div>

            {/* Slider 3: Close Rate */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Inspection-To-Signed-Contract Rate:</span>
                </label>
                <span className="px-3 py-1 rounded-lg bg-fresh-dark border border-fresh-border text-white font-black text-base">
                  {closeRate}%
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="60"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2.5 bg-fresh-dark rounded-lg appearance-none cursor-pointer accent-fresh-orange"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
                <span>15% (Conservative)</span>
                <span>35% (FreshLeads Avg with Audio)</span>
                <span>60% (Top Producers)</span>
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="p-4 rounded-xl bg-fresh-dark/80 border border-fresh-border text-xs text-slate-300 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>100% Lead Replacement Factor:</strong> Flakes and bad appointments are replaced at zero cost, protecting your projected close rate and ROI.
              </span>
            </div>

          </div>

          {/* Results Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-fresh-cardHover to-fresh-dark p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-fresh-border flex flex-col justify-between">
            
            <div>
              <span className="text-xs uppercase font-extrabold text-fresh-slate tracking-wider block mb-1">
                PROJECTED CONSISTENT REVENUE
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                ${monthlyRevenue.toLocaleString()}
                <span className="text-xs font-semibold text-slate-400 ml-1">/ month</span>
              </div>

              {/* Sub-Metrics */}
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center py-2.5 border-b border-fresh-border/60 text-sm">
                  <span className="text-slate-400">Monthly Pre-Set Appointments:</span>
                  <span className="text-white font-bold">{monthlyAppointments} appointments</span>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-fresh-border/60 text-sm">
                  <span className="text-slate-400">Projected Closed Claims / Mo:</span>
                  <span className="text-emerald-400 font-extrabold">{monthlyClosedJobs} signed roofs</span>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-fresh-border/60 text-sm">
                  <span className="text-slate-400">Projected Annual Storm Claims:</span>
                  <span className="text-fresh-orange font-black text-base sm:text-lg">
                    ${annualRevenue.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Consistency Badge */}
              <div className="mt-6 p-3 rounded-lg bg-fresh-orange/10 border border-fresh-orange/30 text-center">
                <span className="text-xs font-extrabold text-fresh-orange uppercase tracking-wider block">
                  Consistency Verdict:
                </span>
                <span className="text-xs text-white font-semibold mt-0.5 block">
                  {monthlyRevenue > 200000 ? '🚀 7-Figure Storm Powerhouse Pace' : '⚡ Predictable Steady Growth Pace'}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button
                onClick={() => onOpenTerritoryModal({ volume: `${weeklyAppointments * 4} appointments / mo` })}
                className="w-full py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-white font-extrabold text-sm uppercase tracking-wider shadow-orange-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Lock In {weeklyAppointments} Weekly Appointments</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-2">
                Protected by our 100% Lead Replacement Guarantee
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
