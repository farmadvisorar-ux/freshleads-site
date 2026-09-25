import React from 'react';
import { ShieldCheck, Play, CheckCircle2, CloudRain, Clock, MapPin, Sparkles, AlertTriangle, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenTerritoryModal, onSelectLeadSample }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden subtle-grid">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-fresh-orange/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-fresh-orange/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fresh-card/90 border border-fresh-border hover:border-fresh-orange/50 transition-colors shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fresh-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fresh-orange"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              Exclusive Pre-Set Roofing Leads • <span className="text-fresh-orange font-bold">100% Recorded & Insured</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">
              Zero Risk Policy
            </span>
          </div>
        </div>

        {/* Main Hero Typography */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
            Stop Chasing Shared Leads. <br className="hidden sm:inline" />
            <span className="orange-gradient-text">Get Pre-Set Roof Inspections</span> With Call Recordings.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Our expert setters confirm with the homeowner an exact date and time for you to walk the roof, verify active homeowner insurance, and hand over the <strong className="text-white font-semibold">full call recording</strong>. Sourced exclusively from storm dates within the <strong className="text-white font-semibold">legal statute of limitations</strong>.
          </p>

          {/* Core Guarantee Statement Highlight */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-fresh-card/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>If one of our hot leads isn't good for any reason, we replace it. Period.</span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTerritoryModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-white font-extrabold text-base tracking-wide shadow-orange-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span>Check My Territory Availability</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#lead-quality"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border hover:border-fresh-orange/50 text-slate-200 font-bold text-base transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-fresh-orange fill-fresh-orange" />
              <span>Listen To Sample Setter Call</span>
            </a>
          </div>
        </div>

        {/* Hero Interactive Lead Dossier Card Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-b from-fresh-card to-fresh-dark border-2 border-fresh-border/80 shadow-card-dark overflow-hidden group hover:border-fresh-orange/60 transition-all duration-300">
            
            {/* Top Bar */}
            <div className="bg-fresh-dark/90 px-6 py-4 border-b border-fresh-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                  LIVE LEAD HANDOFF DOSSIER • ID #FL-9842
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-fresh-orange/20 text-fresh-orange border border-fresh-orange/40 font-bold px-2.5 py-1 rounded-md">
                  Exclusive To Your Roofing Co.
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold px-2.5 py-1 rounded-md">
                  100% Replaced If Bad
                </span>
              </div>
            </div>

            {/* Dossier Content Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Col 1: Appointment & Homeowner */}
              <div className="space-y-4">
                <div>
                  <span className="text-[11px] uppercase font-bold text-fresh-slate tracking-wider block mb-1">
                    Confirmed Inspection Time
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-fresh-orange shrink-0" />
                    <span>Tomorrow @ 2:00 PM</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold mt-1 block">
                    ✓ Both Decision Makers Confirmed Present
                  </span>
                </div>

                <div className="pt-2 border-t border-fresh-border">
                  <span className="text-[11px] uppercase font-bold text-fresh-slate tracking-wider block mb-1">
                    Homeowner & Property
                  </span>
                  <div className="font-bold text-white text-base">David & Sarah Jenkins</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-fresh-orange shrink-0" />
                    <span>Collin County, TX (75070)</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Roof: <span className="text-white font-medium">30-Yr Architectural (approx 14 yrs)</span>
                  </div>
                </div>
              </div>

              {/* Col 2: Insurance & Storm Data */}
              <div className="space-y-4 md:border-l md:border-fresh-border md:pl-6">
                <div>
                  <span className="text-[11px] uppercase font-bold text-fresh-slate tracking-wider block mb-1">
                    Verified Active Insurance
                  </span>
                  <div className="text-lg font-extrabold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>State Farm (Active)</span>
                  </div>
                  <span className="text-xs text-slate-400 block mt-1">
                    Zero prior claims on current roof
                  </span>
                </div>

                <div className="pt-2 border-t border-fresh-border">
                  <span className="text-[11px] uppercase font-bold text-fresh-slate tracking-wider block mb-1">
                    Storm Date (Statute Active)
                  </span>
                  <div className="font-bold text-white text-base flex items-center gap-1.5">
                    <CloudRain className="w-4 h-4 text-fresh-orange" />
                    <span>May 14, 2024</span>
                  </div>
                  <div className="text-xs text-fresh-orange font-semibold mt-1">
                    Radar Flag: 2.25" Hail Swath Confirmed
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Statute of Limitations: <span className="text-emerald-400 font-bold">14 months remaining</span>
                  </div>
                </div>
              </div>

              {/* Col 3: Audio Recording Preview Player */}
              <div className="bg-fresh-dark/80 rounded-xl p-4 border border-fresh-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase font-extrabold text-fresh-orange tracking-wider">
                      SETTER AUDIO RECORDING
                    </span>
                    <span className="text-xs font-mono text-slate-400">3:42</span>
                  </div>

                  <p className="text-xs text-slate-300 italic mb-3">
                    "Setter confirmed homeowner's neighbor got insurance replacement. State Farm active. Locked for 2 PM."
                  </p>

                  {/* Audio Waveform visualization */}
                  <div className="flex items-end justify-between h-10 gap-1 px-1 py-1 bg-fresh-card rounded-lg mb-3">
                    {[35, 60, 40, 85, 100, 70, 50, 90, 75, 40, 65, 95, 80, 55, 35, 70, 85, 60, 45, 80, 95, 70, 40, 60].map((h, i) => (
                      <div 
                        key={i} 
                        style={{ height: `${h}%` }} 
                        className={`w-1 rounded-full transition-all ${
                          i < 10 ? 'bg-fresh-orange' : 'bg-slate-700'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                <a
                  href="#lead-quality"
                  className="w-full py-2.5 px-3 rounded-lg bg-fresh-orange/20 hover:bg-fresh-orange text-fresh-orange hover:text-white border border-fresh-orange/40 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Listen To Full Recording Demo</span>
                </a>
              </div>

            </div>

            {/* Bottom Quick Bar */}
            <div className="bg-fresh-dark/60 border-t border-fresh-border px-6 py-3 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Recorded setter call + Homeowner address & phone sent directly to your phone / CRM</span>
              </span>
              <span className="text-fresh-slate font-medium">
                Helped over <strong className="text-white">30+ roofers</strong> transform their business model
              </span>
            </div>

          </div>
        </div>

        {/* 4 Proof Pillars Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-fresh-card/60 border border-fresh-border rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">30+</div>
            <div className="text-xs uppercase tracking-wider font-bold text-fresh-orange mt-1">Roofers Scaled</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Consistent calendar volume</div>
          </div>

          <div className="bg-fresh-card/60 border border-fresh-border rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
            <div className="text-xs uppercase tracking-wider font-bold text-fresh-orange mt-1">Calls Recorded</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Listen before you drive</div>
          </div>

          <div className="bg-fresh-card/60 border border-fresh-border rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">VERIFIED</div>
            <div className="text-xs uppercase tracking-wider font-bold text-fresh-orange mt-1">Active Insurance</div>
            <div className="text-[11px] text-slate-400 mt-0.5">No uninsured properties</div>
          </div>

          <div className="bg-fresh-card/60 border border-fresh-border rounded-xl p-4 text-center">
            <div className="text-2xl sm:text-3xl font-black text-white">0% RISK</div>
            <div className="text-xs uppercase tracking-wider font-bold text-emerald-400 mt-1">Lead Replacement</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Bad lead? Replaced fast</div>
          </div>
        </div>

      </div>
    </section>
  );
}
