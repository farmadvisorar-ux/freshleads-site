import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export default function FaqSection({ onOpenTerritoryModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How does the 100% Lead Replacement Guarantee work?",
      a: "Our policy is simple: You should never pay for bad leads. If a homeowner is a no-show, denies agreeing to an inspection, turns out not to have valid homeowner insurance, or has already signed with another contractor, let us know within 48 hours. We verify the situation and issue an immediate replacement appointment at zero cost to you."
    },
    {
      q: "What does 'storm date in the statute of limitations' mean for my roofing claims?",
      a: "Every state gives homeowners a strict legal window (usually 12 to 24 months from the date of loss) to file an insurance claim for wind or hail damage. FreshLeads.llc only targets storm events where the legal statute of limitations is active and valid. We check NOAA weather radar, hail size swaths, and local claim timelines so your adjusters have legitimate ground to approve the roof."
    },
    {
      q: "How do I receive the setter call recordings and homeowner details?",
      a: "As soon as our setter locks in the inspection, the full lead dossier is sent directly to your phone via SMS alert and to your email. You get the homeowner's full contact info, exact street address, confirmed appointment window, verified insurance carrier, and a direct audio player link to hear the homeowner's voice and setter qualification."
    },
    {
      q: "Are these leads exclusive to my roofing company?",
      a: "Yes, 100% exclusive. We do not sell shared leads or participate in 'first-to-call' races. When an appointment is scheduled for your team, nobody else receives that lead."
    },
    {
      q: "What do the 30+ roofers you've helped have in common?",
      a: "The single biggest differentiator between roofers who struggle and those who scale to $2M - $5M+ in storm restoration is staying consistent. Door-knocking and relying on random referrals creates a 'feast-or-famine' cycle where you sell for two weeks, get swamped installing, and then have an empty calendar. Keeping 5 to 25 pre-set appointments hitting your calendar every single week creates relentless, predictable growth."
    },
    {
      q: "Can you integrate directly with our roofing CRM?",
      a: "Yes! FreshLeads.llc supports direct webhook delivery to JobNimbus, AccuLynx, Roofr, HubSpot, or any custom zapier/webhook setup so appointments appear directly on your sales reps' calendars."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-fresh-dark/90 relative border-t border-fresh-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <HelpCircle className="w-4 h-4 text-fresh-orange" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Everything You Need To Know <br />
            <span className="orange-gradient-text">About FreshLeads.llc</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Got questions about our recordings, replacement policy, or storm dates? Here are direct answers.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-fresh-card border-fresh-orange/50 shadow-orange-sm' 
                    : 'bg-fresh-card/60 border-fresh-border hover:border-fresh-borderLight'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white"
                >
                  <span>{faq.q}</span>
                  <div className={`p-1 rounded-lg bg-fresh-dark transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-fresh-orange' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-fresh-border/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 p-6 rounded-2xl bg-fresh-card border border-fresh-border text-center">
          <p className="text-sm text-slate-300">
            Still have questions about territory availability or custom setter requirements?
          </p>
          <button
            onClick={() => onOpenTerritoryModal()}
            className="mt-3 text-fresh-orange hover:text-fresh-orangeHover font-extrabold text-sm inline-flex items-center gap-1.5"
          >
            <span>Speak With Our Territory Director</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
}
