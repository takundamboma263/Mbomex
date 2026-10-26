import React from 'react';
import { ArrowDown, FileText, Sparkles, Eye, Camera, MapPin } from 'lucide-react';
import { TAKUNDA_PROFILE, INITIAL_PHOTO_WORKS, PhotoWork } from '../data/portfolioData';
import { PhotoArtwork } from './PhotoArtwork';

interface HeroProps {
  onSelectWork: (work: PhotoWork) => void;
  onOpenBooking: () => void;
  onOpenSpeakerRider: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectWork,
  onOpenBooking,
  onOpenSpeakerRider,
}) => {
  const featuredWork = INITIAL_PHOTO_WORKS[0];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-neutral-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Kicker: Clean unboxed metadata with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-mono-data tracking-wider uppercase text-neutral-400">
              <span>Visual Storyteller</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Keynote Speaker</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Harare / London</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight font-display text-white leading-[1.08] [text-wrap:balance]">
              Documenting humanity. <br />
              <span className="font-serif-editorial italic font-normal text-neutral-300">
                Amplifying ideas
              </span>{' '}
              on global stages.
            </h1>

            {/* Editorial Lead Copy */}
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-2xl">
              I investigate the quiet resilience of communities through medium-format documentary photography,
              and translate those insights into keynote oratory on empathy, visual ethics, and leadership for global audiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('photography')}
                className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-black bg-white rounded-md hover:bg-neutral-200 transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-neutral-900 border border-neutral-700/80 rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Book for Keynote
              </button>

              <button
                onClick={onOpenSpeakerRider}
                className="px-4 py-3 text-xs uppercase tracking-wider font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Speaker Rider</span>
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-4 flex items-center gap-6 text-xs text-neutral-500 font-mono-data">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                Harare · London · Worldwide
              </span>
              <span>·</span>
              <span className="truncate max-w-[280px]">
                Featured in Somerset House & TEDx
              </span>
            </div>
          </div>

          {/* Right Column: Featured Artwork Container */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onSelectWork(featuredWork)}
              className="relative cursor-pointer group rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl transition-all duration-300 hover:border-neutral-700"
            >
              {/* Artwork */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <PhotoArtwork work={featuredWork} showOverlay={false} className="w-full h-full" />
              </div>

              {/* Minimal caption band */}
              <div className="p-4 bg-[#0d0d10] border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-data text-neutral-400">
                    <span>{featuredWork.series}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredWork.year}</span>
                  </div>
                  <h3 className="text-sm font-medium text-white tracking-tight mt-0.5">
                    {featuredWork.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono-data text-neutral-400 hidden sm:inline">
                    {featuredWork.camera}
                  </span>
                  <div className="p-1.5 rounded bg-neutral-800/60 text-neutral-300 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column KPI strip below the split */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-8">
          {TAKUNDA_PROFILE.keyStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-light font-display text-white tracking-tight font-mono-data">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono-data mt-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
