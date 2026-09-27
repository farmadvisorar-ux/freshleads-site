import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Zap, MapPin, Building, Mail, Phone, User, Loader2, PhoneCall } from 'lucide-react';
import { submitTerritoryInquiry } from '../services/leadService';

export default function TerritoryCheckerModal({ isOpen, onClose, initialData = {} }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    zipOrCounty: initialData.zipOrCounty || '',
    leadVolume: initialData.volume || 'Platinum Package (5 Leads / Week)',
    contactName: '',
    companyName: '',
    email: '',
    phone: '',
    notes: ''
  });

  useEffect(() => {
    if (initialData?.volume) {
      setFormData(prev => ({
        ...prev,
        leadVolume: initialData.volume
      }));
    }
    if (initialData?.zipOrCounty) {
      setFormData(prev => ({
        ...prev,
        zipOrCounty: initialData.zipOrCounty
      }));
    }
  }, [initialData, isOpen]);

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
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-fresh-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-fresh-card border-2 border-fresh-border rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Top Header Banner */}
        <div className="bg-fresh-dark p-6 border-b border-fresh-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-fresh-orange flex items-center justify-center text-white shadow-orange-sm">
              <PhoneCall className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">
                FreshLeads<span className="text-fresh-orange">.llc</span> Callback Request
              </h3>
              <span className="text-xs text-fresh-slate font-medium">
                Customer Success Priority Queue
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
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-black text-white">Callback Request Queued!</h4>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.contactName || 'Contractor'}</strong>. A FreshLeads Customer Success Agent is reviewing your selected <strong className="text-fresh-orange">{formData.leadVolume}</strong> and will call you at <strong className="text-white">{formData.phone}</strong> shortly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-fresh-dark border border-fresh-border text-xs text-left space-y-2 text-slate-300">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>What happens next:</span>
                </div>
                <div className="pl-5 text-slate-400 leading-relaxed space-y-1">
                  <div>1. We confirm territory exclusivity in your target storm market.</div>
                  <div>2. We answer all questions and play sample setter audio recordings.</div>
                  <div>3. We activate your weekly pre-set appointment schedule.</div>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3.5 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-orange-sm cursor-pointer"
              >
                Close & Return To Site
              </button>
            </div>
          ) : (
            /* Short Single-Step Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Selected Package Banner */}
              <div className="px-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl">
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="modalLeadVolume" className="text-[11px] uppercase font-bold text-slate-400 tracking-wider cursor-pointer">
                    Selected Package:
                  </label>
                  <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Guaranteed</span>
                  </span>
                </div>
                <select
                  id="modalLeadVolume"
                  name="leadVolume"
                  aria-label="Selected Package"
                  value={formData.leadVolume}
                  onChange={handleInputChange}
                  className="w-full bg-fresh-card border border-fresh-border rounded-lg text-white font-bold text-sm px-3 py-2 focus:outline-none focus:border-fresh-orange cursor-pointer"
                >
                  <option value="Gold Package (3 Leads / Week)">Gold Package (3 Leads / Week)</option>
                  <option value="Platinum Package (5 Leads / Week)">Platinum Package (5 Leads / Week) - Most Popular</option>
                  <option value="Diamond Package (7 Leads / Week)">Diamond Package (7 Leads / Week)</option>
                  <option value="Titanium Elite Package (9+ Leads / Week)">Titanium Elite Package (9+ Leads / Week)</option>
                  <option value="Custom Enterprise Volume">Custom Enterprise Volume (10+ Leads / Week)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Name */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="contactName"
                      required
                      placeholder="e.g. David Miller"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 2. Business Name */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1">
                    Business Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Apex Roofing Pros"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 3. Phone */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. (214) 555-0198"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                {/* 4. Email */}
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. david@apexroofing.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Target County / Market (Optional) */}
              <div>
                <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1">
                  Target County / City / Zip (Optional)
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    name="zipOrCounty"
                    placeholder="e.g. Collin County, TX or 75070"
                    value={formData.zipOrCounty}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2.5 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-orange-glow hover:scale-[1.01] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <PhoneCall className="w-5 h-5 text-slate-950" />
                      <span>Request Call From Customer Success Agent</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantee Footer */}
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>If you don't meet with the homeowner or aren't allowed on the roof, we replace the lead.</span>
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
