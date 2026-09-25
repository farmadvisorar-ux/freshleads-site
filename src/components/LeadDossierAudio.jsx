import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, ShieldCheck, CheckCircle2, CloudRain, Clock, User, Phone, MapPin, FileText, RotateCcw } from 'lucide-react';
import { sampleLeads } from '../services/leadService';

export default function LeadDossierAudio({ onOpenTerritoryModal }) {
  const [selectedLeadIndex, setSelectedLeadIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(222); // ~3m 42s
  const audioContextRef = useRef(null);
  const intervalRef = useRef(null);

  const activeLead = sampleLeads[selectedLeadIndex];

  // Synthesize realistic subtle audio playback tone pulses using Web Audio API
  const startAudioSynth = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      // Generate a subtle setter voice beep/hum simulation
      const osc = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260 + (selectedLeadIndex * 40), audioContextRef.current.currentTime);
      gain.gain.setValueAtTime(0.03, audioContextRef.current.currentTime);
      osc.connect(gain);
      gain.connect(audioContextRef.current.destination);
      osc.start();
      setTimeout(() => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      }, 400);
    } catch (e) {
      console.log('Web audio synth skipped', e);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      setIsPlaying(true);
      startAudioSynth();
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, [selectedLeadIndex]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="lead-quality" className="py-24 bg-fresh-dark/80 relative border-t border-b border-fresh-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-fresh-card border border-fresh-border text-xs uppercase font-extrabold tracking-wider text-fresh-orange mb-3">
            <Volume2 className="w-4 h-4 text-fresh-orange" />
            <span>Interactive Lead Handoff Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Hear The Homeowner Confirm <br />
            <span className="orange-gradient-text">Before You Roll A Truck.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every single lead from FreshLeads.llc includes the full call audio recording. You hear the setter qualify the homeowner, lock in the inspection day/time, confirm active insurance, and verify damage history.
          </p>
        </div>

        {/* Lead Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
          {sampleLeads.map((lead, idx) => (
            <button
              key={lead.id}
              onClick={() => setSelectedLeadIndex(idx)}
              className={`px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2.5 ${
                selectedLeadIndex === idx
                  ? 'bg-fresh-orange text-white shadow-orange-sm scale-105'
                  : 'bg-fresh-card border border-fresh-border text-slate-300 hover:text-white hover:border-fresh-orange/40'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${selectedLeadIndex === idx ? 'bg-white' : 'bg-emerald-400'}`}></span>
              <span>Sample Lead #{lead.id}: {lead.homeownerName.split(' ')[0]} ({lead.carrier.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        {/* Lead Dossier Deep Dive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Property & Insurance Verification Sheet (7 Cols) */}
          <div className="lg:col-span-7 bg-fresh-card rounded-2xl border border-fresh-border p-6 sm:p-8 shadow-card-dark">
            
            {/* Lead Status Header */}
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-fresh-border gap-4">
              <div>
                <span className="text-[11px] uppercase font-bold text-fresh-slate tracking-wider block">
                  Lead Packet #FL-{activeLead.id}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {activeLead.homeownerName}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Insurance Confirmed</span>
                </span>
                <span className="px-3 py-1 rounded bg-fresh-orange/20 text-fresh-orange border border-fresh-orange/40 text-xs font-bold">
                  Statute Active
                </span>
              </div>
            </div>

            {/* Key Field Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-fresh-border">
              
              <div className="bg-fresh-dark/90 p-4 rounded-xl border border-fresh-border">
                <span className="text-xs text-fresh-slate font-semibold uppercase flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5 text-fresh-orange" />
                  Confirmed Inspection Slot
                </span>
                <div className="text-base font-extrabold text-white">
                  {activeLead.appointmentTime}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium mt-1">
                  ✓ Verified homeowner will be on-site
                </div>
              </div>

              <div className="bg-fresh-dark/90 p-4 rounded-xl border border-fresh-border">
                <span className="text-xs text-fresh-slate font-semibold uppercase flex items-center gap-1 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Active Insurance Carrier
                </span>
                <div className="text-base font-extrabold text-emerald-400">
                  {activeLead.carrier}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Active policy verified by setter
                </div>
              </div>

              <div className="bg-fresh-dark/90 p-4 rounded-xl border border-fresh-border">
                <span className="text-xs text-fresh-slate font-semibold uppercase flex items-center gap-1 mb-1">
                  <CloudRain className="w-3.5 h-3.5 text-fresh-orange" />
                  Storm Date of Loss
                </span>
                <div className="text-base font-extrabold text-white">
                  {activeLead.stormDate}
                </div>
                <div className="text-[11px] text-fresh-orange font-medium mt-1">
                  Radar Flag: {activeLead.hailSize}
                </div>
              </div>

              <div className="bg-fresh-dark/90 p-4 rounded-xl border border-fresh-border">
                <span className="text-xs text-fresh-slate font-semibold uppercase flex items-center gap-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-fresh-orange" />
                  Property Location & Roof
                </span>
                <div className="text-sm font-bold text-white truncate">
                  {activeLead.address}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  {activeLead.roofType}
                </div>
              </div>

            </div>

            {/* Setter Notes Box */}
            <div className="pt-6">
              <span className="text-xs uppercase font-extrabold tracking-wider text-fresh-slate block mb-2">
                Setter Field Notes (Setter: {activeLead.setterName})
              </span>
              <div className="bg-fresh-dark p-4 rounded-xl border border-fresh-border/80 text-sm text-slate-200 leading-relaxed italic border-l-4 border-l-fresh-orange">
                "{activeLead.setterNotes}"
              </div>
            </div>

            {/* Replacement Guarantee Callout */}
            <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white font-bold">FreshLeads 100% Replacement Shield:</strong> If the homeowner cancels, turns out not to have insurance, or was outside the storm perimeter, click one button in your roofer dashboard and we replace it immediately.
              </div>
            </div>

          </div>

          {/* Right Column: Audio Recording Player & Call Transcript (5 Cols) */}
          <div className="lg:col-span-5 bg-fresh-card rounded-2xl border border-fresh-border p-6 sm:p-8 shadow-card-dark">
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-fresh-orange animate-pulse"></span>
                <span className="text-xs font-extrabold uppercase text-slate-300 tracking-wider">
                  Setter Call Audio Stream
                </span>
              </div>
              <span className="text-xs font-mono bg-fresh-dark px-2.5 py-1 rounded text-fresh-orange font-bold">
                {activeLead.callDuration}
              </span>
            </div>

            {/* Main Audio Player Module */}
            <div className="bg-fresh-dark rounded-xl border border-fresh-border p-5 mb-6">
              
              {/* Dynamic Animated Waveform */}
              <div className="flex items-center justify-between h-14 gap-1 px-2 mb-4 bg-fresh-black/60 rounded-lg">
                {activeLead.audioWaveform.map((bar, i) => {
                  const progressPct = (currentTime / duration) * 100;
                  const barPct = (i / activeLead.audioWaveform.length) * 100;
                  const isPast = barPct <= progressPct;

                  return (
                    <div
                      key={i}
                      style={{ 
                        height: isPlaying ? `${Math.max(20, (bar * (0.6 + Math.random() * 0.4)))}%` : `${bar}%`,
                        transition: 'height 0.2s ease'
                      }}
                      className={`w-1.5 rounded-full transition-colors ${
                        isPast 
                          ? 'bg-fresh-orange' 
                          : isPlaying && Math.abs(barPct - progressPct) < 10 
                            ? 'bg-fresh-orange/70' 
                            : 'bg-slate-700'
                      }`}
                    ></div>
                  );
                })}
              </div>

              {/* Progress Bar & Time */}
              <div className="space-y-1 mb-4">
                <div className="w-full bg-fresh-card h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-fresh-orange h-full rounded-full transition-all duration-300"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{activeLead.callDuration}</span>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentTime(0)}
                  className="p-2.5 rounded-lg bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border text-slate-300 hover:text-white transition-colors"
                  title="Restart Audio"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={togglePlay}
                  className="px-6 py-3 rounded-xl bg-fresh-orange hover:bg-fresh-orangeHover text-white font-bold text-sm flex items-center gap-2 shadow-orange-sm hover:scale-105 transition-all"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-white" />
                      <span>Pause Recording</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>Play Setter Call</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Simulated Live Call Transcript */}
            <div className="space-y-3">
              <span className="text-[11px] uppercase font-bold text-fresh-slate tracking-wider block">
                Setter Call Transcript Excerpt
              </span>
              
              <div className="max-h-60 overflow-y-auto space-y-3 pr-2 text-xs">
                {activeLead.simulatedTranscript.map((line, i) => (
                  <div 
                    key={i} 
                    className={`p-3 rounded-lg border leading-relaxed ${
                      line.speaker === 'Setter' 
                        ? 'bg-fresh-dark/90 border-fresh-border text-slate-200' 
                        : 'bg-fresh-card/80 border-fresh-orange/30 text-white font-medium'
                    }`}
                  >
                    <span className={`font-bold block mb-1 uppercase tracking-wider text-[10px] ${
                      line.speaker === 'Setter' ? 'text-fresh-orange' : 'text-emerald-400'
                    }`}>
                      {line.speaker === 'Setter' ? `🎙️ FreshLeads Setter (${activeLead.setterName})` : `🏠 Homeowner (${activeLead.homeownerName.split(' ')[0]})`}
                    </span>
                    {line.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Roofer CTA */}
            <div className="mt-6 pt-6 border-t border-fresh-border">
              <button
                onClick={() => onOpenTerritoryModal()}
                className="w-full py-3 rounded-xl bg-fresh-card hover:bg-fresh-cardHover border border-fresh-border hover:border-fresh-orange/50 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <span>Request Sample Leads In My Zip Code</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
