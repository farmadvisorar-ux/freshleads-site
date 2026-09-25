import React from 'react';
import { Zap, ShieldCheck, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenTerritoryModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-fresh-black border-t border-fresh-border text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-fresh-border/80">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-fresh-orange/40 shadow-orange-sm bg-fresh-dark">
                <img src="/logo.png" alt="FreshLeads.llc Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                FRESH<span className="text-fresh-orange">LEADS</span>.LLC
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Delivering exclusive, pre-set roofing inspection appointments backed by full call audio recordings, confirmed active homeowner insurance, and storm dates strictly within legal statutes of limitation.
            </p>

            <div className="p-3.5 rounded-xl bg-fresh-card border border-fresh-border text-xs text-slate-300">
              <strong className="text-emerald-400 block mb-1 flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Replacement Guarantee Pledge</span>
              </strong>
              If one of our hot leads isn't good for any legitimate reason, we replace it immediately. Period.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider">Platform</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li><a href="#how-it-works" className="hover:text-fresh-orange transition-colors">How It Works</a></li>
              <li><a href="#lead-quality" className="hover:text-fresh-orange transition-colors">Audio Recordings Demo</a></li>
              <li><a href="#guarantee" className="hover:text-fresh-orange transition-colors">5-Point Quality Engine</a></li>
              <li><a href="#consistency" className="hover:text-fresh-orange transition-colors">The 30+ Roofer Proof</a></li>
              <li><a href="#calculator" className="hover:text-fresh-orange transition-colors">Revenue Calculator</a></li>
              <li><a href="#pricing" className="hover:text-fresh-orange transition-colors">Appointment Packages</a></li>
              <li><a href="#faq" className="hover:text-fresh-orange transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Lead Standards */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider">Quality Standards</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-1.5"><span className="text-fresh-orange">✓</span> Pre-Set Confirmed Time</li>
              <li className="flex items-center gap-1.5"><span className="text-fresh-orange">✓</span> Full Audio Call Recording</li>
              <li className="flex items-center gap-1.5"><span className="text-fresh-orange">✓</span> Active Insurance Verified</li>
              <li className="flex items-center gap-1.5"><span className="text-fresh-orange">✓</span> Statute-Compliant Storm Dates</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-400">✓</span> 100% Lead Replacement</li>
              <li className="flex items-center gap-1.5"><span className="text-fresh-orange">✓</span> 100% Exclusive To You</li>
            </ul>
          </div>

          {/* Contact & Domain */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-wider">Contact & Inquiries</h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a href="mailto:leads@freshleads.llc" className="flex items-center gap-2 hover:text-fresh-orange transition-colors text-slate-200">
                <Mail className="w-4 h-4 text-fresh-orange shrink-0" />
                <span>leads@freshleads.llc</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-fresh-orange shrink-0" />
                <span>Official Domain: FreshLeads.llc</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenTerritoryModal()}
                className="w-full py-2.5 px-3 rounded-lg bg-fresh-orange hover:bg-fresh-orangeHover text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Check Territory
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} FreshLeads.llc. All rights reserved. Specialized Storm Damage Roofing Appointment Leads.
          </div>

          <div className="flex items-center gap-6">
            <span>Domain: <strong className="text-slate-300">FreshLeads.llc</strong></span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border text-slate-300 hover:text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
