import React from 'react';
import { Zap, ShieldCheck, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

export default function Footer({ 
  onOpenTerritoryModal, 
  onNavigateToBlog, 
  onNavigateHome,
  onNavigateToPrivacy,
  onNavigateToTerms,
  onNavigateToSmsOptIn
}) {
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
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={onNavigateHome}
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-fresh-orange/40 shadow-orange-sm bg-fresh-dark">
                <img src="/freshleads-logo-180x180.jpg" alt="FreshLeads.llc Logo" width="40" height="40" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-fresh-orange transition-colors">
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
              If you do not meet with the homeowner or are not allowed on the roof, we replace the lead. Simple as that.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold text-white tracking-wider">Platform</h3>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li><a href="#how-it-works" className="hover:text-fresh-orange transition-colors">How It Works</a></li>
              <li><a href="#lead-quality" className="hover:text-fresh-orange transition-colors">Audio Recordings Demo</a></li>
              <li><a href="#guarantee" className="hover:text-fresh-orange transition-colors">5-Point Quality Engine</a></li>
              <li><a href="#consistency" className="hover:text-fresh-orange transition-colors">The 30+ Roofer Proof</a></li>
              <li><a href="#pricing" className="hover:text-fresh-orange transition-colors">Appointment Packages</a></li>
              <li><a href="#faq" className="hover:text-fresh-orange transition-colors">FAQ</a></li>
              {onNavigateToBlog && (
                <li>
                  <button 
                    type="button" 
                    onClick={onNavigateToBlog} 
                    className="hover:text-fresh-orange transition-colors font-bold text-fresh-orange flex items-center gap-1.5"
                  >
                    <span>Blog & Cost Guide</span>
                    <span className="text-[9px] bg-fresh-orange text-slate-950 font-black px-1.5 py-0.2 rounded-full">New</span>
                  </button>
                </li>
              )}
              {onNavigateToPrivacy && (
                <li>
                  <button 
                    type="button" 
                    onClick={onNavigateToPrivacy} 
                    className="hover:text-fresh-orange transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
              )}
              {onNavigateToTerms && (
                <li>
                  <button 
                    type="button" 
                    onClick={onNavigateToTerms} 
                    className="hover:text-fresh-orange transition-colors"
                  >
                    Terms of Service & SMS
                  </button>
                </li>
              )}
              {onNavigateToSmsOptIn && (
                <li>
                  <button 
                    type="button" 
                    onClick={onNavigateToSmsOptIn} 
                    className="hover:text-fresh-orange transition-colors text-fresh-orange font-medium flex items-center gap-1.5"
                  >
                    <span>SMS Opt-In & Alerts</span>
                    <span className="text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded-full">TCPA</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Lead Standards */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-extrabold text-white tracking-wider">Quality Standards</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
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
            <h3 className="text-xs uppercase font-extrabold text-white tracking-wider">Contact & Inquiries</h3>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a href="tel:2148314653" className="flex items-center gap-2 hover:text-fresh-orange transition-colors text-white font-bold group">
                <Phone className="w-4 h-4 text-fresh-orange shrink-0 group-hover:scale-110 transition-transform" />
                <span>(214) 831-4653</span>
              </a>
              <a href="mailto:info@freshleads.llc" className="flex items-center gap-2 hover:text-fresh-orange transition-colors text-slate-200">
                <Mail className="w-4 h-4 text-fresh-orange shrink-0" />
                <span>info@freshleads.llc</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-fresh-orange shrink-0" />
                <span>Official Domain: FreshLeads.llc</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenTerritoryModal()}
                className="w-full py-2.5 px-3 rounded-lg bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-xs uppercase tracking-wider transition-all"
              >
                Check Territory
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} FreshLeads.llc. All rights reserved. Specialized Storm Damage Roofing Appointment Leads.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button 
              type="button" 
              onClick={onNavigateToPrivacy} 
              className="text-slate-400 hover:text-fresh-orange underline transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-600">•</span>
            <button 
              type="button" 
              onClick={onNavigateToTerms} 
              className="text-slate-400 hover:text-fresh-orange underline transition-colors cursor-pointer"
            >
              Terms of Service & SMS
            </button>
            <span className="text-slate-600">•</span>
            {onNavigateToSmsOptIn && (
              <>
                <button 
                  type="button" 
                  onClick={onNavigateToSmsOptIn} 
                  className="text-slate-400 hover:text-fresh-orange underline transition-colors cursor-pointer"
                >
                  SMS Opt-In
                </button>
                <span className="text-slate-600">•</span>
              </>
            )}
            <span className="text-slate-300">Domain: <strong className="text-white">FreshLeads.llc</strong></span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border text-slate-300 hover:text-white transition-colors ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* TCPA / CTIA / 10DLC Carrier Communications Notice */}
        <div className="mt-8 pt-6 border-t border-fresh-border/50 text-[11px] text-slate-400 leading-relaxed text-center sm:text-left space-y-1">
          <p>
            <strong className="text-slate-200">TCPA & 10DLC Communications Disclosure:</strong> By submitting your contact details or requesting territory information on FreshLeads.llc, you grant prior express consent to receive telephone calls and SMS/MMS text messages from FreshLeads LLC (including communications via Zoho Voice telephony) at the number provided. Consent is not a condition of purchase. Message frequency varies. Message & data rates may apply. You may reply <strong className="text-slate-200">STOP</strong> to cancel at any time, or <strong className="text-slate-200">HELP</strong> for support.
          </p>
          <p className="text-slate-400">
            <strong className="text-slate-200">Mobile Privacy Guarantee:</strong> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Review our full{' '}
            <button type="button" onClick={onNavigateToPrivacy} className="text-fresh-orange underline hover:text-white">
              Privacy Policy
            </button>{' '}and{' '}
            <button type="button" onClick={onNavigateToTerms} className="text-fresh-orange underline hover:text-white">
              Terms of Service
            </button>.
          </p>
        </div>

      </div>
    </footer>
  );
}
