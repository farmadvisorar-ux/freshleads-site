import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, Mail, Lock, User, Key, Sparkles, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [tab, setTab] = useState(initialTab); // 'login' | 'signup' | 'magiclink' | 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const { signIn, signUp, signInWithMagicLink, resetPassword, isConfigured } = useAuth();

  if (!isOpen) return null;

  const resetFormState = () => {
    setError(null);
    setMessage(null);
    setSubmitting(false);
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
    resetFormState();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetFormState();
    setSubmitting(true);

    try {
      if (!isConfigured) {
        throw new Error('Supabase credentials missing. Add VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY to your .env file to enable live authentication.');
      }

      if (tab === 'login') {
        await signIn({ email, password });
        setMessage('Successfully signed in!');
        setTimeout(() => {
          onClose();
        }, 1000);
      } else if (tab === 'signup') {
        await signUp({ email, password, fullName });
        setMessage('Account created! Please check your email for a confirmation link.');
      } else if (tab === 'magiclink') {
        await signInWithMagicLink({ email });
        setMessage('Magic link sent! Check your inbox to sign in instantly.');
      } else if (tab === 'forgot') {
        await resetPassword({ email });
        setMessage('Password reset link sent! Check your inbox.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during authentication.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[92vh] flex flex-col">
        
        {/* Header banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 sm:p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 p-1.5 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" /> Enterprise Security
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            {tab === 'login' && 'Welcome Back'}
            {tab === 'signup' && 'Create Your Account'}
            {tab === 'magiclink' && 'Sign in with Magic Link'}
            {tab === 'forgot' && 'Reset Password'}
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm mt-1">
            {tab === 'login' && 'Access your FreshLeads account & verified dossiers'}
            {tab === 'signup' && 'Start getting exclusive, pre-set roofing appointments'}
            {tab === 'magiclink' && 'No password needed — we will email you a secure link'}
            {tab === 'forgot' && 'We will send instructions to reset your password'}
          </p>
        </div>

        {!isConfigured && (
          <div className="m-4 p-3 bg-amber-950/60 border border-amber-500/40 rounded-xl text-amber-300 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-200 block">Supabase Config Required:</span>
              Set <code className="bg-amber-900/50 px-1 py-0.5 rounded text-amber-100">VITE_SUPABASE_URL</code> and <code className="bg-amber-900/50 px-1 py-0.5 rounded text-amber-100">VITE_SUPABASE_ANON_KEY</code> in your environment to connect to your Supabase project.
            </div>
          </div>
        )}

        {/* Tab navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 p-1 gap-1 m-4 mb-2 rounded-xl">
          <button
            onClick={() => handleTabChange('login')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              tab === 'login' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => handleTabChange('signup')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              tab === 'signup' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => handleTabChange('magiclink')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              tab === 'magiclink' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Magic Link
          </button>
        </div>

        {/* Form body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 pt-2 space-y-4 overflow-y-auto">
          {error && (
            <div className="p-3 bg-red-950/80 border border-red-500/50 rounded-xl text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {message && (
            <div className="p-3 bg-emerald-950/80 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{message}</span>
            </div>
          )}

          {tab === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-slate-700 focus:border-blue-500 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-100 outline-none transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-slate-950 border border-slate-700 focus:border-blue-500 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-100 outline-none transition"
              />
            </div>
          </div>

          {(tab === 'login' || tab === 'signup') && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-medium text-slate-300">Password</label>
                {tab === 'login' && (
                  <button
                    type="button"
                    onClick={() => handleTabChange('forgot')}
                    className="text-xs text-blue-400 hover:text-blue-300 transition"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-950 border border-slate-700 focus:border-blue-500 rounded-xl pl-9 pr-4 py-2.5 text-sm text-slate-100 outline-none transition"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {submitting ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            ) : (
              <>
                {tab === 'login' && 'Log In'}
                {tab === 'signup' && 'Create Account'}
                {tab === 'magiclink' && 'Send Magic Link'}
                {tab === 'forgot' && 'Send Reset Instructions'}
                <Sparkles className="w-4 h-4" />
              </>
            )}
          </button>

          {tab === 'forgot' && (
            <button
              type="button"
              onClick={() => handleTabChange('login')}
              className="w-full text-xs text-slate-400 hover:text-slate-200 transition text-center mt-2"
            >
              Back to Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
