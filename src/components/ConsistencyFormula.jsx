import React from 'react';
import { Target, TrendingUp, Users, CheckCircle2, XCircle, ArrowRight, Award, Zap } from 'lucide-react';

export default function ConsistencyFormula({ onOpenTerritoryModal }) {
  return (
    <section id="consistency" className="py-24 bg-fresh-dark relative border-t border-fresh-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <Award className="w-4 h-4 text-fresh-orange" />
            <span>Over 30+ Roofing Businesses Transformed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            The Only Thing Holding You Back <br />
            <span className="orange-gradient-text">Is Staying Consistent.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We have helped over <strong>30+ roofers completely revolutionize their business model</strong>. When we analyzed every single contractor who hit $1.5M to $5M in annual storm claims, they all shared one identical secret: <span className="text-fresh-orange font-bold">relentless, uninterrupted appointment consistency.</span>
          </p>
        </div>

        {/* The Two Business Models: Old vs New Consistency Framework */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: The Broken "Feast or Famine" Trap */}
          <div className="rounded-2xl bg-fresh-card border border-red-500/20 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
            
            <div className="flex items-center justify-between pb-6 border-b border-fresh-border mb-6">
              <div>
                <span className="text-xs uppercase font-bold text-red-400 tracking-wider">The Old Way</span>
                <h3 className="text-2xl font-black text-white mt-1">The Feast-or-Famine Trap</h3>
              </div>
              <span className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                <XCircle className="w-6 h-6" />
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Inconsistent Pipeline:</strong> Knocking doors for 2 weeks, signing 4 roofs, then stopping all sales while managing builds.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Wasted Rep Driving:</strong> Burning fuel chasing shared leads sold to 5 other roofers who all spam the homeowner simultaneously.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Uninsured Homeowners:</strong> Driving 45 minutes out to find the resident is renting or has no active property policy.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span><strong>No Audio Pre-Validation:</strong> Blind dispatches where homeowners didn't even know a roofer was coming.</span>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 font-medium">
              Result: Constant revenue rollercoasters, stressed crews, and unpredictable cash flow.
            </div>
          </div>

          {/* Card 2: The FreshLeads Consistent Machine */}
          <div className="rounded-2xl bg-gradient-to-b from-fresh-card to-fresh-cardHover border-2 border-fresh-orange/50 p-8 relative overflow-hidden shadow-orange-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-fresh-orange/10 rounded-full blur-2xl"></div>

            <div className="flex items-center justify-between pb-6 border-b border-fresh-border mb-6">
              <div>
                <span className="text-xs uppercase font-extrabold text-fresh-orange tracking-wider">The FreshLeads Standard</span>
                <h3 className="text-2xl font-black text-white mt-1">The Consistency Engine</h3>
              </div>
              <span className="p-2.5 rounded-xl bg-fresh-orange/15 text-fresh-orange border border-fresh-orange/30">
                <CheckCircle2 className="w-6 h-6" />
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Predictable Weekly Inspections:</strong> 5, 10, or 25 confirmed homeowner inspection slots locked onto your calendar every Monday morning.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>100% Exclusive To You:</strong> Zero lead sharing. The homeowner is expecting only your company.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Active Insurance & Statute Verified:</strong> Every home is confirmed insured and matched to a hail/wind date within legal claim deadlines.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>100% Replacement Shield:</strong> If a lead flakes or isn't qualified, it gets replaced immediately at zero cost.</span>
              </li>
            </ul>

            <div className="mt-8 p-4 rounded-xl bg-fresh-orange/15 border border-fresh-orange/30 text-xs text-slate-100 font-bold flex items-center justify-between">
              <span>Result: Predictable 6- to 7-figure storm restoration revenue.</span>
              <span className="text-fresh-orange uppercase tracking-wider text-[11px]">30+ Roofers Scaled</span>
            </div>
          </div>

        </div>

        {/* The 3 Core Pillars of Roofing Consistency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-fresh-card border border-fresh-border">
            <div className="w-10 h-10 rounded-lg bg-fresh-dark border border-fresh-border flex items-center justify-center text-fresh-orange font-black text-lg mb-4">
              01
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Steady Calendar Volume</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When your sales reps know they have 3 to 5 pre-set inspections every single day, their closing mindset sharpens and closing percentages climb from 25% to 40%+.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-fresh-card border border-fresh-border">
            <div className="w-10 h-10 rounded-lg bg-fresh-dark border border-fresh-border flex items-center justify-center text-fresh-orange font-black text-lg mb-4">
              02
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Listen & Context Before Arrival</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Listening to the homeowner's voice recording in the truck allows your estimator to walk up to the door already knowing their carrier, roof concerns, and setter conversation.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-fresh-card border border-fresh-border">
            <div className="w-10 h-10 rounded-lg bg-fresh-dark border border-fresh-border flex items-center justify-center text-fresh-orange font-black text-lg mb-4">
              03
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Zero Lead Buying Risk</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              With our 100% replacement guarantee on bad leads, you never lose sleep over bad contacts. You can fearlessly maintain consistent appointment volume month after month.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
