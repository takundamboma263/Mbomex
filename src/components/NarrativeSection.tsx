import React, { useState } from 'react';
import { TAKUNDA_PROFILE, TESTIMONIALS } from '../data/portfolioData';
import { Quote, Award, BookOpen, Compass, Check } from 'lucide-react';

export const NarrativeSection: React.FC = () => {
  const [bioLength, setBioLength] = useState<'short' | 'medium' | 'extended'>('extended');
  const [copiedBio, setCopiedBio] = useState(false);

  const getBioText = () => {
    switch (bioLength) {
      case 'short':
        return TAKUNDA_PROFILE.shortBio;
      case 'medium':
        return TAKUNDA_PROFILE.mediumBio;
      case 'extended':
      default:
        return TAKUNDA_PROFILE.extendedBio;
    }
  };

  const handleCopyBio = () => {
    navigator.clipboard.writeText(getBioText());
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  return (
    <section id="narrative" className="py-20 lg:py-28 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <div>
            <div className="text-xs font-mono-data tracking-wider uppercase text-neutral-400">
              Biography & Visual Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-light font-display text-white tracking-tight mt-1">
              The Architecture of the Gaze
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-data text-neutral-400">
            <span>Harare, Zimbabwe</span>
            <span>·</span>
            <span>London, UK</span>
            <span>·</span>
            <span className="text-neutral-300">Global Citizen</span>
          </div>
        </div>

        {/* Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Philosophical Essay & Bio Switcher */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800/80">
              <span className="text-xs font-mono-data uppercase tracking-wider text-neutral-400">
                Official Biography Length
              </span>

              {/* Segmented Bio Length Switcher */}
              <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-md text-xs font-mono-data">
                <button
                  onClick={() => setBioLength('short')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    bioLength === 'short' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  50 Words
                </button>
                <button
                  onClick={() => setBioLength('medium')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    bioLength === 'medium' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  150 Words
                </button>
                <button
                  onClick={() => setBioLength('extended')}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    bioLength === 'extended' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Full Narrative
                </button>
              </div>
            </div>

            {/* Rendered Bio Text */}
            <div className="prose prose-invert max-w-none">
              <div className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed whitespace-pre-line font-sans">
                {getBioText()}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleCopyBio}
                className="text-xs font-mono-data text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copiedBio ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Copy this biography for event programs</span>
                  </>
                )}
              </button>
            </div>

            {/* Gear & Methodology Callout */}
            <div className="mt-8 p-6 rounded-lg bg-[#0e0e12] border border-neutral-800/80">
              <div className="flex items-center gap-2 text-xs font-mono-data uppercase tracking-wider text-neutral-400 mb-2">
                <Compass className="w-3.5 h-3.5 text-neutral-400" />
                <span>Working Philosophy & Optics</span>
              </div>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {TAKUNDA_PROFILE.gearPhilosophy}
              </p>
            </div>
          </div>

          {/* Right Column: Selected Press & Attributable Testimonials */}
          <div className="lg:col-span-5 space-y-8">
            {/* Monograph & Gallery History */}
            <div className="bg-[#0d0d10] border border-neutral-800 rounded-lg p-6">
              <h4 className="text-xs uppercase font-mono-data text-neutral-400 tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                <span>Selected Exhibitions & Press</span>
              </h4>

              <div className="space-y-4 text-xs font-mono-data">
                <div className="pb-3 border-b border-neutral-800/80">
                  <div className="text-white font-medium">Somerset House · London</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Contemporary Documentary Salon, 2026</div>
                </div>
                <div className="pb-3 border-b border-neutral-800/80">
                  <div className="text-white font-medium">Zeitz Museum of Contemporary Art Africa (MOCAA)</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Symposium & Group Exhibition, Cape Town, 2025</div>
                </div>
                <div className="pb-3 border-b border-neutral-800/80">
                  <div className="text-white font-medium">National Gallery of Zimbabwe</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Generational Memory & Form Solo Suite, 2024</div>
                </div>
                <div>
                  <div className="text-white font-medium">Monocle Magazine & Creative Mornings</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">Featured Profile & Keynote Dispatch, 2025</div>
                </div>
              </div>
            </div>

            {/* Testimonials (Strict Section 1H compliance: full name, role, organization, outcome) */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono-data text-neutral-400 tracking-wider">
                Attributable Endorsements
              </h4>

              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="p-5 rounded-lg bg-[#0d0d10] border border-neutral-800/80 text-xs"
                >
                  <p className="text-neutral-300 font-serif-editorial italic text-sm leading-relaxed mb-3">
                    "{t.quote}"
                  </p>
                  <div className="font-mono-data pt-2 border-t border-neutral-800/60">
                    <span className="text-white font-medium block">{t.name}</span>
                    <span className="text-neutral-400 block text-[11px]">{t.role} · {t.organization}</span>
                    <span className="text-neutral-400 text-[10px] block mt-0.5">{t.eventContext}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
