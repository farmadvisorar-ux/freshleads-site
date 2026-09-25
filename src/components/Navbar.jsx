import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, Zap, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenTerritoryModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-fresh-black/90 backdrop-blur-md border-b border-fresh-border/80 py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-fresh-orange/40 shadow-orange-sm group-hover:scale-105 transition-transform bg-fresh-dark">
              <img src="/logo.png" alt="FreshLeads.llc Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                FRESH<span className="text-fresh-orange">LEADS</span>
                <span className="text-xs text-fresh-slate font-semibold ml-1 px-1.5 py-0.5 rounded bg-fresh-border">.LLC</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-fresh-slate block -mt-1">
                Roofing Appointment Engine
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#how-it-works" className="hover:text-fresh-orange transition-colors">How It Works</a>
            <a href="#lead-quality" className="hover:text-fresh-orange transition-colors">Lead Quality & Audio</a>
            <a href="#guarantee" className="hover:text-fresh-orange transition-colors">100% Guarantee</a>
            <a href="#consistency" className="hover:text-fresh-orange transition-colors">The 30+ Roofer Proof</a>
            <a href="#calculator" className="hover:text-fresh-orange transition-colors">ROI Calculator</a>
            <a href="#pricing" className="hover:text-fresh-orange transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-fresh-orange transition-colors">FAQ</a>
          </div>

          {/* Right Action & Territory Status */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-fresh-card border border-fresh-border text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white font-medium">Statute Active Zones</span>
            </div>

            <button
              onClick={() => onOpenTerritoryModal()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-fresh-orange hover:bg-fresh-orangeHover text-white font-bold text-sm tracking-wide shadow-orange-sm hover:shadow-orange-glow transition-all active:scale-95"
            >
              <span>Check Territory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenTerritoryModal()}
              className="px-3 py-1.5 rounded bg-fresh-orange text-white text-xs font-bold"
            >
              Check Territory
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-fresh-card border border-fresh-border text-slate-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-fresh-dark/95 backdrop-blur-xl border-b border-fresh-border px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-fresh-card border border-fresh-border text-xs text-slate-300 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Statute Active Storm Zones Available</span>
          </div>

          <div className="flex flex-col gap-3 text-base font-medium text-slate-200">
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-fresh-orange border-b border-fresh-border/50"
            >
              How It Works
            </a>
            <a 
              href="#lead-quality" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-fresh-orange border-b border-fresh-border/50"
            >
              Lead Quality & Audio Recordings
            </a>
            <a 
              href="#guarantee" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-fresh-orange border-b border-fresh-border/50"
            >
              100% Replacement Guarantee
            </a>
            <a 
              href="#consistency" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-fresh-orange border-b border-fresh-border/50"
            >
              The 30+ Roofer Proof (Consistency)
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-fresh-orange border-b border-fresh-border/50"
            >
              ROI Revenue Calculator
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-fresh-orange border-b border-fresh-border/50"
            >
              Pricing & Tiers
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-fresh-orange"
            >
              FAQ
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTerritoryModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-fresh-orange hover:bg-fresh-orangeHover text-white font-bold text-base shadow-orange-sm"
          >
            <span>Lock In Your Territory</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </nav>
  );
}
