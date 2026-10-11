import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function RoiCalculator({ onOpenTerritoryModal }) {
  const [weeklyAppointments, setWeeklyAppointments] = useState(7);
  const [leadCost, setLeadCost] = useState(175); // $150 - $200 mid-point
  const [avgJobValue, setAvgJobValue] = useState(15000); // average hail claim
  const [closeRate, setCloseRate] = useState(35); // 35% close rate with audio dossiers

  const monthlyAppointments = weeklyAppointments * 4;
  const monthlyInvestment = monthlyAppointments * leadCost;
  const monthlyClosedJobs = Math.max(1, Math.round(monthlyAppointments * (closeRate / 100)));
  const monthlyRevenue = monthlyClosedJobs * avgJobValue;
  const annualRevenue = monthlyRevenue * 12;
  const estimatedNetProfit = Math.round(monthlyRevenue * 0.40); // 40% roofing margin typical
  const netRoi = monthlyInvestment > 0 ? Math.round((monthlyRevenue / monthlyInvestment)) : 0;

  return (
    <section id="roi-calculator" className="py-14 sm:py-24 bg-fresh-dark/95 relative border-t border-fresh-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <Calculator className="w-4 h-4 text-fresh-orange" />
            <span>Interactive Roofing ROI Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            See What Predictable Appointments <br />
            <span className="orange-gradient-text">Do To Your Bottom Line.</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
            At <strong>$150–$200 per attend appointment</strong>, backed by full call audio and our 100% replacement guarantee, calculate your projected monthly closed claims and return on investment.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-5xl mx-auto bg-fresh-card rounded-2xl border-2 border-fresh-border/80 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 p-5 sm:p-8 space-y-6 sm:space-y-8">
            
            {/* Slider 1: Weekly Appointments */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <span>Weekly Attended Appointments:</span>
                </label>
                <span className="px-3 py-1 rounded-lg bg-fresh-dark border border-fresh-border text-fresh-orange font-black text-sm sm:text-base">
                  {weeklyAppointments} appointments / wk
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={weeklyAppointments}
                onChange={(e) => setWeeklyAppointments(Number(e.target.value))}
                className="w-full h-2.5 bg-fresh-dark rounded-lg appearance-none cursor-pointer accent-fresh-orange"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                <span>5/wk (Starter)</span>
                <span>7/wk (1 Daily • Recommended)</span>
                <span>12/wk (Team)</span>
                <span>25/wk (Multi-Crew)</span>
              </div>
            </div>

            {/* Slider 2: Average Claim Value */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <span>Average Insurance Claim Value:</span>
                </label>
                <span className="px-3 py-1 rounded-lg bg-fresh-dark border border-fresh-border text-emerald-400 font-black text-sm sm:text-base">
                  ${avgJobValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="30000"
                step="1000"
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full h-2.5 bg-fresh-dark rounded-lg appearance-none cursor-pointer accent-fresh-orange"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                <span>$10,000 (3-Tab Shingle)</span>
                <span>$15,000 (Avg Architectural)</span>
                <span>$30,000+ (Large / Commercial)</span>
              </div>
            </div>

            {/* Slider 3: Close Rate */}
            <div>
              <div className="flex justify-between items-center mb-2.5">
                <label className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                  <span>Inspection-To-Signed Contingency Rate:</span>
                </label>
                <span className="px-3 py-1 rounded-lg bg-fresh-dark border border-fresh-border text-white font-black text-sm sm:text-base">
                  {closeRate}%
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="50"
                step="1"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2.5 bg-fresh-dark rounded-lg appearance-none cursor-pointer accent-fresh-orange"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                <span>20% (Conservative)</span>
                <span>35% (FreshLeads Avg with Audio)</span>
                <span>50% (Experienced Estimators)</span>
              </div>
            </div>

            {/* Campaign Cost Range Note */}
            <div className="p-4 rounded-xl bg-fresh-dark/90 border border-fresh-border text-xs text-slate-300 space-y-1.5">
              <div className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero-Risk Replacement Guarantee Included:</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Most campaigns run $150–$200 per attend appointment. If you do not meet with the homeowner or are not allowed on the roof, the appointment is replaced immediately at zero cost.
              </p>
            </div>

          </div>

          {/* Results Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-fresh-cardHover via-fresh-dark to-fresh-card p-5 sm:p-8 border-t lg:border-t-0 lg:border-l border-fresh-border flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] uppercase font-extrabold text-fresh-slate tracking-wider">
                  PROJECTED MONTHLY REVENUE
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-extrabold px-2 py-0.5 rounded">
                  {netRoi}x ROAS
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
                ${monthlyRevenue.toLocaleString()}
                <span className="text-xs font-semibold text-slate-400 ml-1">/ month</span>
              </div>

              {/* Sub-Metrics */}
              <div className="mt-6 space-y-3.5">
                <div className="flex justify-between items-center py-2 border-b border-fresh-border/60 text-xs sm:text-sm">
                  <span className="text-slate-400">Monthly Confirmed Inspections:</span>
                  <span className="text-white font-bold">{monthlyAppointments} appointments</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-fresh-border/60 text-xs sm:text-sm">
                  <span className="text-slate-400">Est. Monthly Lead Investment:</span>
                  <span className="text-fresh-orange font-bold">${monthlyInvestment.toLocaleString()} (at ~$175/lead)</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-fresh-border/60 text-xs sm:text-sm">
                  <span className="text-slate-400">Projected Signed Roof Claims:</span>
                  <span className="text-emerald-400 font-black text-sm">{monthlyClosedJobs} signed roofs / mo</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-fresh-border/60 text-xs sm:text-sm">
                  <span className="text-slate-400">Est. Net Profit (at ~40% Margin):</span>
                  <span className="text-white font-extrabold text-sm sm:text-base">
                    ${estimatedNetProfit.toLocaleString()} / mo
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 text-xs sm:text-sm">
                  <span className="text-slate-400">Projected Annual Storm Claims:</span>
                  <span className="text-fresh-orange font-black text-base sm:text-lg">
                    ${annualRevenue.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Consistency Pill */}
              <div className="mt-5 p-3 rounded-xl bg-fresh-orange/10 border border-fresh-orange/30 text-center">
                <span className="text-xs font-extrabold text-fresh-orange uppercase tracking-wider block">
                  Growth Trajectory:
                </span>
                <span className="text-xs text-white font-bold mt-0.5 block">
                  {monthlyRevenue >= 150000 ? '🚀 7-Figure Regional Powerhouse' : '⚡ High-Margin Predictable Scaling'}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6 pt-4 border-t border-fresh-border/80">
              <button
                onClick={() => onOpenTerritoryModal({ volume: `${weeklyAppointments} Attended Appointments / Week (Recommended)` })}
                className="w-full min-h-[48px] py-3.5 px-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-orange-glow hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In {weeklyAppointments} Weekly Inspections</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
              <div className="text-center text-[10px] text-slate-400 mt-2">
                100% Replacement Shield: You only pay for real, attended roof inspections.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
