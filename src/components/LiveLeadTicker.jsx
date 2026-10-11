import React from 'react';
import { Zap, ShieldCheck, Clock, MapPin } from 'lucide-react';

const RECENT_DISPATCHES = [
  { county: 'Collin County, TX', carrier: 'State Farm', roof: 'Architectural Shingle', time: '14 min ago', status: 'Confirmed 2:00 PM Tomorrow' },
  { county: 'Oklahoma County, OK', carrier: 'USAA', roof: '30-Yr Architectural', time: '38 min ago', status: 'Confirmed Friday 10:00 AM' },
  { county: 'Tarrant County, TX', carrier: 'Allstate', roof: 'Impact Resistant Shingle', time: '1 hour ago', status: 'Confirmed Thursday 3:30 PM' },
  { county: 'Denver County, CO', carrier: 'Travelers', roof: 'Composition Shingle', time: '2 hours ago', status: 'Confirmed Tomorrow 11:00 AM' },
  { county: 'Denton County, TX', carrier: 'Liberty Mutual', roof: 'Architectural Shingle', time: '3 hours ago', status: 'Confirmed Friday 1:00 PM' },
  { county: 'Dallas County, TX', carrier: 'Chubb', roof: 'Tile / Heavy Shingle', time: '4 hours ago', status: 'Confirmed Monday 10:00 AM' },
];

export default function LiveLeadTicker({ onOpenTerritoryModal }) {
  return (
    <div className="bg-fresh-dark/95 border-y border-fresh-border py-2.5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Left Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-[11px] uppercase font-black text-emerald-400 tracking-wider">
            Live Setter Activity:
          </span>
        </div>

        {/* Scrolling Items */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-0.5 text-xs text-slate-300">
          {RECENT_DISPATCHES.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 shrink-0 bg-fresh-card/80 px-3 py-1 rounded-full border border-fresh-border/80"
            >
              <MapPin className="w-3 h-3 text-fresh-orange shrink-0" />
              <span className="font-bold text-white">{item.county}</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold">{item.carrier}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 text-[11px]">{item.status}</span>
              <span className="text-[10px] text-slate-500 italic">({item.time})</span>
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <button
          onClick={() => onOpenTerritoryModal()}
          className="shrink-0 text-fresh-orange hover:text-white font-extrabold text-xs underline cursor-pointer hidden md:inline-flex items-center gap-1"
        >
          <span>Claim Your Territory</span>
          <span>&rarr;</span>
        </button>

      </div>
    </div>
  );
}
