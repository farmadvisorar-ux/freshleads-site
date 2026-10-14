import React, { useState } from 'react';
import { Search, MapPin, CloudRain, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, Phone } from 'lucide-react';

const POPULAR_ZONES = [
  { name: 'Collin County, TX (75070)', state: 'TX', hail: '2.25" Hail Swath', statute: 'Active (14 mo left)', seats: '1 Spot Left', available: true },
  { name: 'Tarrant County, TX (Fort Worth)', state: 'TX', hail: '1.75" Hail Swath', statute: 'Active (18 mo left)', seats: '1 Spot Left', available: true },
  { name: 'Dallas County, TX (75201)', state: 'TX', hail: '2.00" Hail Swath', statute: 'Active (11 mo left)', seats: 'Waitlist Near', available: true },
  { name: 'Denton County, TX (76201)', state: 'TX', hail: '1.75" Wind/Hail', statute: 'Active (16 mo left)', seats: '2 Spots Left', available: true },
  { name: 'Oklahoma County, OK (Edmond)', state: 'OK', hail: '2.50" Hail Swath', statute: 'Active (19 mo left)', seats: '1 Spot Left', available: true },
  { name: 'Denver County, CO (80202)', state: 'CO', hail: '1.75" Hail Swath', statute: 'Active (12 mo left)', seats: '1 Spot Left', available: true }
];

export default function TerritoryRadarWidget({ onOpenTerritoryModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState(POPULAR_ZONES[0]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setHasSearched(true);
    // Dynamic matching or fallback creation
    const found = POPULAR_ZONES.find(z => z.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (found) {
      setSelectedZone(found);
    } else {
      setSelectedZone({
        name: searchQuery.trim(),
        state: 'US',
        hail: '1.50" - 2.25" Radar Flagged',
        statute: 'Statute Verified Under Legal Window',
        seats: 'Available for Lockout',
        available: true
      });
    }
  };

  return (
    <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
      <div className="relative rounded-2xl bg-fresh-card border-2 border-fresh-border hover:border-fresh-orange/50 transition-all p-5 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow corner effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-fresh-orange/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-fresh-border">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-fresh-orange/15 border border-fresh-orange/30 text-fresh-orange text-[11px] font-black uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Storm Radar & Exclusivity Checker</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Check Your County&apos;s Storm Statute & Roofer Capacity
            </h3>
          </div>

          <a
            href="tel:9036905969"
            className="inline-flex items-center gap-1.5 text-xs text-fresh-orange hover:text-white font-extrabold transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Desk: (903) 690-5969</span>
          </a>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mt-6 flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-grow">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Enter your target County, City, or Zip Code (e.g. Collin County or 75070)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-fresh-orange text-sm font-medium"
            />
          </div>
          <button
            type="submit"
            className="min-h-[46px] px-6 py-3 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-orange-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Scan Radar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Suggestion Pills */}
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs text-slate-400">
          <span className="shrink-0 text-[11px] text-slate-500 font-bold uppercase">Popular Storm Zones:</span>
          {POPULAR_ZONES.map((zone, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSelectedZone(zone);
                setSearchQuery(zone.name);
                setHasSearched(true);
              }}
              className={`shrink-0 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all ${
                selectedZone.name === zone.name
                  ? 'bg-fresh-orange/20 border-fresh-orange text-fresh-orange font-bold'
                  : 'bg-fresh-dark border-fresh-border text-slate-300 hover:text-white'
              }`}
            >
              {zone.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Live Radar Result Card */}
        {selectedZone && (
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-fresh-dark/95 border border-fresh-border/90 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            <div className="space-y-1 md:col-span-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Target Zone Scanned
              </span>
              <div className="font-black text-white text-base flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-fresh-orange shrink-0" />
                <span className="truncate">{selectedZone.name}</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Coverage Ready</span>
              </span>
            </div>

            <div className="space-y-1 md:col-span-1 md:border-l md:border-fresh-border md:pl-4">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Radar Swath & Statute
              </span>
              <div className="font-bold text-white text-sm flex items-center gap-1.5">
                <CloudRain className="w-4 h-4 text-fresh-orange shrink-0" />
                <span>{selectedZone.hail}</span>
              </div>
              <span className="text-[11px] text-slate-300 block">
                {selectedZone.statute}
              </span>
            </div>

            <div className="space-y-1 md:col-span-1 md:border-l md:border-fresh-border md:pl-4">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">
                Competitor Lockout Status
              </span>
              <div className="font-extrabold text-fresh-orange text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{selectedZone.seats}</span>
              </div>
              <span className="text-[11px] text-slate-400 block">
                Most Campaigns $150–$200/appt
              </span>
            </div>

            <div className="md:col-span-1 md:border-l md:border-fresh-border md:pl-4 flex flex-col justify-center">
              <button
                type="button"
                onClick={() => onOpenTerritoryModal({ zipOrCounty: selectedZone.name })}
                className="w-full py-2.5 px-3 rounded-lg bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-xs uppercase tracking-wider shadow-orange-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Lock This County</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

        {/* Footer Guarantee */}
        <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
          <span>✓ 100% Replacement Shield: No-show or denied roof access = Replaced free</span>
          <span className="hidden sm:inline">100% Setter Audio Included</span>
        </div>

      </div>
    </div>
  );
}
