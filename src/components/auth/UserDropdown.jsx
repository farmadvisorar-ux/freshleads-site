import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User, LogOut, Shield, ChevronDown, CheckCircle } from 'lucide-react';

export const UserDropdown = () => {
  const { user, profile, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  const displayName = profile?.full_name || user.user_metadata?.full_name || user.email.split('@')[0];
  const avatarInitial = displayName.charAt(0).toUpperCase();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-full py-1.5 px-3 transition text-sm text-slate-200"
      >
        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow">
          {avatarInitial}
        </div>
        <span className="font-medium max-w-[120px] truncate hidden sm:inline">{displayName}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="p-3 border-b border-slate-800">
            <p className="text-sm font-semibold text-slate-100 truncate">{displayName}</p>
            <p className="text-xs text-slate-400 truncate mt-0.5">{user.email}</p>
            <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-semibold">
              <CheckCircle className="w-3 h-3" /> Enterprise Verified
            </div>
          </div>

          <div className="py-1">
            <div className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Account Details
            </div>
            <div className="px-3 py-1.5 text-xs text-slate-300 flex justify-between">
              <span>Role</span>
              <span className="font-semibold text-blue-400 capitalize">{profile?.role || 'Member'}</span>
            </div>
            <div className="px-3 py-1.5 text-xs text-slate-300 flex justify-between">
              <span>Auth Provider</span>
              <span className="font-semibold text-indigo-400 capitalize">{user.app_metadata?.provider || 'Email'}</span>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-1 mt-1">
            <button
              onClick={() => {
                signOut();
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-400 hover:bg-red-950/40 rounded-xl transition"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
