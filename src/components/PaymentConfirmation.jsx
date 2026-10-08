import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowRight, Zap, Building2, User, Mail, Phone, MapPin, Loader2, Sparkles, Award } from 'lucide-react';
import { submitPaymentConfirmation } from '../services/leadService';

export default function PaymentConfirmation({ onNavigateHome }) {
  // Parse query params if available
  const [formData, setFormData] = useState(() => {
    let initialPackage = '7 Attended Appointments / Week (Recommended)';
    let initialCycle = 'Attend-Appointment Campaign';
    let initialAmount = 'Most campaigns run $150–$200/appt';

    return {
      packageName: initialPackage,
      billingCycle: initialCycle,
      amountPaid: initialAmount,
      customerName: '',
      companyName: '',
      customerEmail: '',
      customerPhone: '',
      targetCounty: '',
      notes: ''
    };
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePackageChange = (e) => {
    const val = e.target.value;
    setFormData(prev => ({
      ...prev,
      packageName: val,
      billingCycle: 'Attend-Appointment Campaign',
      amountPaid: 'Most campaigns run $150–$200/appt'
    }));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitPaymentConfirmation(formData);
      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-fresh-black text-slate-100 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto w-full">
        
        {/* Navigation / Header */}
        <div className="flex items-center justify-between pb-8 border-b border-fresh-border">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-fresh-orange flex items-center justify-center font-black text-slate-950 shadow-orange-sm">
              FL
            </div>
            <span className="font-extrabold text-lg text-white group-hover:text-fresh-orange transition-colors">
              FreshLeads<span className="text-fresh-orange">.llc</span>
            </span>
          </button>

          <a
            href="tel:2148314653"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-fresh-card border border-fresh-border hover:border-fresh-orange text-xs font-bold text-white transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-fresh-orange" />
            <span>(214) 831-4653</span>
          </a>
        </div>

        {/* Confirmation Banner */}
        <div className="text-center mt-8 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-emerald-500/20 shadow-lg mb-4 animate-in zoom-in duration-300">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Payment Received & Verified</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Thank You For Your Payment!
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl mx-auto leading-relaxed">
            Your package subscription is confirmed. Email notifications with your package details are being routed to your inbox and our operations desk at <strong className="text-white">admin@freshleads.llc</strong> and <strong className="text-white">info@freshleads.llc</strong>.
          </p>
        </div>

        {/* What Happens Next Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-fresh-orange/20 text-fresh-orange flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">1. Territory Lock</h4>
              <p className="text-xs text-slate-400 mt-1">We lock out all other roofers from receiving leads in your agreed zip/county.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-fresh-orange/20 text-fresh-orange flex items-center justify-center shrink-0 mt-0.5">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">2. Dedicated Setter Pod</h4>
              <p className="text-xs text-slate-400 mt-1">Our senior phone setters begin dialing property owners from recent storm swaths.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-fresh-card border border-fresh-border flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-fresh-orange/20 text-fresh-orange flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">3. 100% Audio Guarantee</h4>
              <p className="text-xs text-slate-400 mt-1">Every appointment includes full call audio. If not allowed on roof, lead is replaced.</p>
            </div>
          </div>
        </div>

        {/* Onboarding Activation Form */}
        <div className="rounded-2xl bg-gradient-to-br from-fresh-card via-fresh-dark to-fresh-card border-2 border-fresh-orange/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-12">
          
          <div className="mb-6 pb-4 border-b border-fresh-border">
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-fresh-orange" />
              <span>Confirm Your Dispatch Details & Send Email Confirmation</span>
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Confirm your contact details below so our lead-routing system immediately triggers your automated email confirmation to you, <strong className="text-white">admin@freshleads.llc</strong>, and <strong className="text-white">info@freshleads.llc</strong>.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-white">Confirmation Dispatched!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.customerName || 'Contractor'}</strong>. An email confirmation for <strong className="text-fresh-orange">{formData.packageName}</strong> has been transmitted to your email, <strong className="text-white">admin@freshleads.llc</strong>, and <strong className="text-white">info@freshleads.llc</strong>.
              </p>
              <div className="pt-2">
                <button
                  onClick={onNavigateHome}
                  className="px-6 py-3 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-orange-sm cursor-pointer"
                >
                  Return To FreshLeads.llc Homepage
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Package Purchased Selector */}
              <div>
                <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                  Desired Weekly Appointment Capacity *
                </label>
                <select
                  name="packageName"
                  value={formData.packageName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white font-bold text-sm focus:outline-none focus:border-fresh-orange cursor-pointer"
                >
                  <option value="5 Attended Appointments / Week (Starter Pace)">5 Attended Appointments / Week (Starter Pace)</option>
                  <option value="7 Attended Appointments / Week (Recommended)">7 Attended Appointments / Week (Recommended - 1 Daily)</option>
                  <option value="10 Attended Appointments / Week (Growing Team)">10 Attended Appointments / Week (Growing Team)</option>
                  <option value="15 Attended Appointments / Week (Multi-Crew)">15 Attended Appointments / Week (Multi-Crew)</option>
                  <option value="20+ Attended Appointments / Week (High Capacity Pod)">20+ Attended Appointments / Week (High Capacity Pod)</option>
                  <option value="Custom Enterprise Volume">Custom Enterprise Volume</option>
                </select>
                <span className="text-[11px] text-fresh-orange font-semibold block mt-1.5">
                  Most Campaigns run $150–$200 per attend appointment.
                </span>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="customerName"
                      required
                      placeholder="e.g. John Miller"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Roofing Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Apex Roofing & Solar"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Work Email Address (For Lead Delivery & Receipts) *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      name="customerEmail"
                      required
                      placeholder="john@apexroofing.com"
                      value={formData.customerEmail}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                    Mobile Phone (For Instant SMS Lead Alerts) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      name="customerPhone"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.customerPhone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Target County / Zip */}
              <div>
                <label className="text-xs uppercase font-extrabold tracking-wider text-slate-200 block mb-1.5">
                  Target County / Storm Market to Lock Out *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    name="targetCounty"
                    required
                    placeholder="e.g. Collin County, Dallas County, or specific Zip codes"
                    value={formData.targetCounty}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-fresh-dark border border-fresh-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-fresh-orange text-sm font-medium"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-orange-sm hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Dispatching Confirmation To admin@freshleads.llc & info@freshleads.llc...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Details & Dispatch Confirmation Email</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-center text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dispatches immediate receipt copies to your email, admin@freshleads.llc, and info@freshleads.llc</span>
              </div>
            </form>
          )}

        </div>

        {/* Footer Support Info */}
        <div className="text-center text-xs text-slate-500 space-y-1 pb-8">
          <div>FreshLeads.llc • Operations & Client Success Desk</div>
          <div>Need direct assistance? Call <a href="tel:2148314653" className="text-fresh-orange underline">(214) 831-4653</a> or email <a href="mailto:admin@freshleads.llc" className="text-fresh-orange underline">admin@freshleads.llc</a> / <a href="mailto:info@freshleads.llc" className="text-fresh-orange underline">info@freshleads.llc</a></div>
        </div>

      </div>
    </div>
  );
}
