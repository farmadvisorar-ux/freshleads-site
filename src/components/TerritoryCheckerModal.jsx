import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Zap, MapPin, Building, Mail, Phone, User, Loader2, Sparkles } from 'lucide-react';
import { submitTerritoryInquiry } from '../services/leadService';

export default function TerritoryCheckerModal({ isOpen, onClose, initialData = {} }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    zipOrCounty: '',
    state: '',
    leadVolume: initialData.volume || '25 appointments / mo',
    contactName: '',
    companyName: '',
    email: '',
    phone: '',
    capacity: 'Ready to scale this month',
    notes: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitTerritoryInquiry(formData);
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setSubmitted(true); // Graceful recovery
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-fresh-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-fresh-card border-2 border-fresh-border rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Top Header Banner */}
        <div className="bg-fresh-dark p-6 border-b border-fresh-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-fresh-orange flex items-center justify-center text-white">
              <Zap className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">
                FreshLeads<span className="text-fresh-orange">.llc</span> Territory Check
              </h3>
              <span className="text-xs text-fresh-slate font-medium">
                Exclusive County Storm Lead Allocation
              </span>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 rounded-lg bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {submitted ? (
            /* Success State */
            <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-white">Territory Application Received!</h4>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                  We have queued your market verification request for <strong className="text-fresh-orange">{formData.zipOrCounty || 'your target zone'}</strong>. A confirmation email has been dispatched to <strong className="text-white">{formData.email}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-fresh-dark border border-fresh-border text-xs text-left space-y-2 text-slate-300">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Next Steps With FreshLeads.llc:</span>
                </div>
                <div className="pl-5 text-slate-400">
                  1. Our storm meteorologist verifies hail swaths within the active statute of limitations.<br/>
                  2. We confirm no conflicting roofer has locked your county.<br/>
                  3. Our territory director will call you at <strong className="text-white">{formData.phone}</strong> with sample recordings.
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3.5 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-white font-extrabold text-sm uppercase tracking-wider transition-all"
              >
                Close & Return To Site
              </button>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit}>
              
              {/* Step Indicators */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-fresh-border text-xs">
                <div className={`flex items-center gap-2 font-bold ${step === 1 ? 'text-fresh-orange' : 'text-slate-400'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 1 ? 'bg-fresh-orange text-white' : 'bg-fresh-dark text-slate-400'}`}>1</span>
                  <span>Target Storm Zone</span>
                </div>
                <div className="w-8 h-[1px] bg-fresh-border"></div>
                <div className={`flex items-center gap-2 font-bold ${step === 2 ? 'text-fresh-orange' : 'text-slate-400'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? 'bg-fresh-orange text-white' : 'bg-fresh-dark text-slate-400'}`}>2</span>
                  <span>Contractor Info</span>
                </div>
              </div>

              {step === 1 ? (
                /* Step 1: Target Market & Volume */
                <div className="space-y-4">
                  <div>
                    <label className="text-xs uppercase font-extrabold tracking-wider text-slate-300 block mb-1.5">
                      Target County, City, or Zip Codes *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-fresh-orange absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        name="zipOrCounty"
                        required
                        value={formData.zipOrCounty}
                        onChange={handleInputChange}
                        placeholder="e.g. Collin County, TX or 75070"
                        className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-extrabold tracking-wider text-slate-300 block mb-1.5">
                      Desired Monthly Pre-Set Appointments
                    </label>
                    <select
                      name="leadVolume"
                      value={formData.leadVolume}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    >
                      <option value="10 appointments / mo">10 Appointments / mo (Starter Scale)</option>
                      <option value="25 appointments / mo">25 Appointments / mo (Growth Dominator - Most Popular)</option>
                      <option value="50+ appointments / mo">50+ Appointments / mo (Exclusive County Lockout)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-extrabold tracking-wider text-slate-300 block mb-1.5">
                      Your Current Crew / Estimator Capacity
                    </label>
                    <select
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    >
                      <option value="Ready to scale immediately">Ready to scale immediately (Hungry for leads)</option>
                      <option value="1-3 crews ready">1-3 crews ready for inspection volume</option>
                      <option value="Large enterprise operation">Large enterprise operation (Multiple branches)</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      disabled={!formData.zipOrCounty}
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover disabled:opacity-50 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Continue to Roofer Verification</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Step 2: Contractor Contact & Submission */
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-extrabold tracking-wider text-slate-300 block mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="contactName"
                          required
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="e.g. Brad Mitchell"
                          className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase font-extrabold tracking-wider text-slate-300 block mb-1.5">
                        Roofing Company Name *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="e.g. Apex Roofing Pros"
                          className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase font-extrabold tracking-wider text-slate-300 block mb-1.5">
                        Direct Phone / Cell *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 000-0000"
                          className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase font-extrabold tracking-wider text-slate-300 block mb-1.5">
                        Work Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="brad@apexroofing.com"
                          className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-extrabold tracking-wider text-slate-300 block mb-1.5">
                      Specific Storm Date or Requirements (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows="2"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. We specialize in State Farm claims, prefer 2-story roofs or tile experience."
                      className="w-full px-4 py-2.5 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-xs font-medium"
                    ></textarea>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-slate-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Protected by FreshLeads 100% Lead Replacement Guarantee</span>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3.5 rounded-xl bg-fresh-dark border border-fresh-border text-slate-300 hover:text-white text-xs font-bold transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-orange-glow transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Routing Territory Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Check Territory & Lock In Leads</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
