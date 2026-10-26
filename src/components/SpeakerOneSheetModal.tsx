import React from 'react';
import { X, Printer, Download, CheckCircle, Mic, Monitor, MapPin, Mail, Globe } from 'lucide-react';
import { TAKUNDA_PROFILE, KEYNOTE_TOPICS, TECHNICAL_RIDER } from '../data/portfolioData';

interface SpeakerOneSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export const SpeakerOneSheetModal: React.FC<SpeakerOneSheetModalProps> = ({
  isOpen,
  onClose,
  onBookNow,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-md p-4 sm:p-6 lg:p-8 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d0d10] border border-neutral-800 rounded-lg shadow-2xl my-auto text-neutral-200 overflow-hidden">
        {/* Floating Top Controls (Hidden on print) */}
        <div className="no-print p-4 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between text-xs font-mono-data">
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Speaker One-Sheet & Technical AV Rider</span>
            <span>·</span>
            <span className="text-white">Takunda Mboma</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable One-Sheet Document Container */}
        <div className="p-8 sm:p-12 space-y-10 bg-[#0d0d10] text-neutral-200">
          {/* Document Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
            <div>
              <span className="text-xs font-mono-data uppercase tracking-widest text-neutral-400 block mb-1">
                Official Speaker Profile & Technical Rider
              </span>
              <h1 className="text-3xl sm:text-4xl font-light font-display text-white tracking-tight">
                {TAKUNDA_PROFILE.name}
              </h1>
              <p className="text-sm font-serif-editorial italic text-neutral-400 mt-1">
                {TAKUNDA_PROFILE.title}
              </p>
            </div>

            <div className="text-xs font-mono-data text-neutral-400 space-y-1 text-left sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>{TAKUNDA_PROFILE.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{TAKUNDA_PROFILE.baseLocations}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded bg-neutral-900/60 border border-neutral-800/80 font-mono-data text-xs">
            {TAKUNDA_PROFILE.keyStats.map((stat, i) => (
              <div key={i}>
                <span className="text-lg font-light text-white block">{stat.value}</span>
                <span className="text-[10px] uppercase text-neutral-400">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Biography Excerpts */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-mono-data tracking-wider text-neutral-400">
              Approved Introductions & Bios
            </h3>

            <div className="space-y-4 text-xs sm:text-sm font-light text-neutral-300 leading-relaxed bg-[#0a0a0c] p-5 rounded border border-neutral-800/60">
              <div>
                <span className="text-[10px] font-mono-data uppercase text-neutral-500 block mb-1">50-Word Stage Intro</span>
                <p>{TAKUNDA_PROFILE.shortBio}</p>
              </div>
              <div className="pt-3 border-t border-neutral-800/60">
                <span className="text-[10px] font-mono-data uppercase text-neutral-500 block mb-1">150-Word Program Bio</span>
                <p>{TAKUNDA_PROFILE.mediumBio}</p>
              </div>
            </div>
          </div>

          {/* Signature Keynote Curricula */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-mono-data tracking-wider text-neutral-400">
              Signature Keynote Curricula
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {KEYNOTE_TOPICS.map((topic, i) => (
                <div key={topic.id} className="p-4 rounded bg-neutral-900/60 border border-neutral-800/80 text-xs">
                  <div className="flex items-center justify-between text-[10px] font-mono-data text-neutral-500 mb-1">
                    <span>0{i + 1} · {topic.format}</span>
                    <span>{topic.duration}</span>
                  </div>
                  <h4 className="text-sm font-medium text-white tracking-tight font-display mb-1">
                    {topic.title}
                  </h4>
                  <p className="text-neutral-400 font-light text-[11px] leading-relaxed">
                    {topic.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stage & AV Rider */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase font-mono-data tracking-wider text-neutral-400">
              Technical Stage & AV Specifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-neutral-300">
              <div className="space-y-2 p-4 rounded bg-neutral-900/40 border border-neutral-800/60">
                <div className="flex items-center gap-2 font-mono-data uppercase text-[11px] text-white">
                  <Mic className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Audio Specifications</span>
                </div>
                <ul className="space-y-1.5 text-neutral-400 list-disc list-inside">
                  {TECHNICAL_RIDER.audio.map((item, i) => (
                    <li key={i} className="text-[11px] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 p-4 rounded bg-neutral-900/40 border border-neutral-800/60">
                <div className="flex items-center gap-2 font-mono-data uppercase text-[11px] text-white">
                  <Monitor className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Projection & Visuals</span>
                </div>
                <ul className="space-y-1.5 text-neutral-400 list-disc list-inside">
                  {TECHNICAL_RIDER.videoAndVisuals.map((item, i) => (
                    <li key={i} className="text-[11px] leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Hospitality & Travel */}
          <div className="p-4 rounded bg-neutral-900/40 border border-neutral-800/60 text-xs font-mono-data">
            <span className="text-white block uppercase text-[11px] mb-1">Travel & Hospitality Policy</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Business class flights for international itineraries exceeding 5 hours. Single direct ground transfers and quiet hotel accommodations in immediate vicinity of venue.
            </p>
          </div>

          {/* Bottom Action (Hidden on print) */}
          <div className="no-print pt-6 border-t border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-mono-data text-neutral-500">
              Takunda Mboma Official Representation
            </span>

            <button
              onClick={() => {
                onClose();
                onBookNow();
              }}
              className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-black bg-white rounded-md hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Direct Booking Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
