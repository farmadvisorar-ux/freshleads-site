import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, Zap, Menu, X, ArrowRight, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { UserDropdown } from './auth/UserDropdown';

export default function Navbar({ onOpenTerritoryModal, onNavigateToBlog, onNavigateHome, onNavigateToSmsOptIn, onOpenAuthModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();

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
          <a 
            href="/" 
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-fresh-orange/40 shadow-orange-sm group-hover:scale-105 transition-transform bg-fresh-dark">
              <img src="/freshleads-logo-180x180.jpg" alt="FreshLeads.llc Logo" width="40" height="40" className="w-full h-full object-cover" />
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
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#how-it-works" className="hover:text-fresh-orange transition-colors">How It Works</a>
            <a href="#lead-quality" className="hover:text-fresh-orange transition-colors">Lead Quality & Audio</a>
            <a href="#guarantee" className="hover:text-fresh-orange transition-colors">100% Guarantee</a>
            <a href="#consistency" className="hover:text-fresh-orange transition-colors">The 30+ Roofer Proof</a>
            <a href="#pricing" className="hover:text-fresh-orange transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-fresh-orange transition-colors">FAQ</a>
            {onNavigateToSmsOptIn && (
              <button
                type="button"
                onClick={onNavigateToSmsOptIn}
                className="hover:text-fresh-orange transition-colors cursor-pointer text-slate-300"
              >
                SMS Opt-In
              </button>
            )}
            <button
              type="button"
              onClick={onNavigateToBlog}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fresh-card hover:bg-fresh-cardHover border border-fresh-orange/40 text-fresh-orange hover:text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Blog</span>
              <span className="text-[10px] bg-fresh-orange text-slate-950 font-black px-1.5 py-0.2 rounded-full">New</span>
            </button>
          </div>

          {/* Right Action & Auth */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:2148314653"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border hover:border-fresh-orange/60 text-white font-extrabold text-xs tracking-wide transition-all group shadow-sm"
              title="Call FreshLeads Main Line: (214) 831-4653"
            >
              <Phone className="w-3.5 h-3.5 text-fresh-orange group-hover:scale-110 transition-transform" />
              <span>(214) 831-4653</span>
            </a>

            {user ? (
              <UserDropdown />
            ) : (
              <button
                onClick={() => onOpenAuthModal && onOpenAuthModal('login')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs transition-colors"
              >
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>Log In</span>
              </button>
            )}

            <button
              onClick={() => onOpenTerritoryModal()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-sm tracking-wide shadow-orange-sm hover:shadow-orange-glow transition-all active:scale-95"
            >
              <span>Check Territory</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Mobile Action Buttons & Menu Toggle */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
            <a
              href="tel:2148314653"
              className="p-2 rounded-lg bg-fresh-card border border-fresh-border text-fresh-orange hover:text-white transition-colors flex items-center justify-center"
              title="Call (214) 831-4653"
              aria-label="Call FreshLeads directly"
            >
              <Phone className="w-4 h-4 fill-fresh-orange/20" />
            </a>

            <button
              onClick={() => onOpenTerritoryModal()}
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-fresh-orange text-slate-950 text-xs font-black shadow-sm"
            >
              Check Territory
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-fresh-card border border-fresh-border text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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

          <div className="flex flex-col gap-1 text-base font-medium text-slate-200">
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-lg hover:bg-fresh-card hover:text-fresh-orange transition-colors flex items-center justify-between border-b border-fresh-border/40"
            >
              <span>How It Works</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#lead-quality" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-lg hover:bg-fresh-card hover:text-fresh-orange transition-colors flex items-center justify-between border-b border-fresh-border/40"
            >
              <span>Lead Quality & Audio Recordings</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#guarantee" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-lg hover:bg-fresh-card hover:text-fresh-orange transition-colors flex items-center justify-between border-b border-fresh-border/40"
            >
              <span>100% Replacement Guarantee</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#consistency" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-lg hover:bg-fresh-card hover:text-fresh-orange transition-colors flex items-center justify-between border-b border-fresh-border/40"
            >
              <span>The 30+ Roofer Proof</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-lg hover:bg-fresh-card hover:text-fresh-orange transition-colors flex items-center justify-between border-b border-fresh-border/40"
            >
              <span>Pricing & Model ($150–$200)</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-2 rounded-lg hover:bg-fresh-card hover:text-fresh-orange transition-colors flex items-center justify-between border-b border-fresh-border/40"
            >
              <span>FAQ</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <button 
              type="button" 
              onClick={() => { setMobileMenuOpen(false); onNavigateToBlog?.(); }} 
              className="w-full text-left py-3 px-2 rounded-lg hover:bg-fresh-card hover:text-fresh-orange font-bold text-fresh-orange flex items-center justify-between border-b border-fresh-border/40"
            >
              <span>Blog & 2026 Cost Guide</span>
              <span className="text-[10px] bg-fresh-orange text-slate-950 font-black px-2 py-0.5 rounded-full">New</span>
            </button>
            {onNavigateToSmsOptIn && (
              <button 
                type="button" 
                onClick={() => { setMobileMenuOpen(false); onNavigateToSmsOptIn(); }} 
                className="w-full text-left py-3 px-2 rounded-lg hover:bg-fresh-card hover:text-fresh-orange font-bold text-slate-200 flex items-center justify-between border-b border-fresh-border/40"
              >
                <span>SMS Opt-In & Alerts</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">TCPA</span>
              </button>
            )}
          </div>

          {/* User Auth Status in Mobile Menu */}
          <div className="pt-2 border-t border-fresh-border/60">
            {user ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-fresh-card border border-fresh-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-fresh-orange/20 text-fresh-orange flex items-center justify-center font-bold text-xs">
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="text-left truncate max-w-[180px]">
                    <div className="text-xs font-bold text-white truncate">{user.user_metadata?.full_name || 'Logged In'}</div>
                    <div className="text-[10px] text-slate-400 truncate">{user.email}</div>
                  </div>
                </div>
                <UserDropdown />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuthModal?.('login');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border text-slate-200 font-bold text-sm transition-colors"
              >
                <User className="w-4 h-4 text-blue-400" />
                <span>Log In to FreshLeads Portal</span>
              </button>
            )}
          </div>

          <div className="pt-2 space-y-2.5">
            <a
              href="tel:2148314653"
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 rounded-xl bg-fresh-card border border-fresh-border hover:border-fresh-orange text-white font-black text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-fresh-orange" />
              <span>Call Us Direct: (214) 831-4653</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerritoryModal();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3.5 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-base shadow-orange-sm active:scale-98 transition-all"
            >
              <span>Lock In Your Territory</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
