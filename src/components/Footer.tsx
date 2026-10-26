import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TAKUNDA_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenSpeakerRider: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSpeakerRider, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-[#070709] py-16 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xl font-light font-display tracking-tight text-white block">
              {TAKUNDA_PROFILE.name}
            </span>
            <p className="text-xs font-mono-data text-neutral-500 mt-1">
              Documentary Photography & Keynote Speaking · London · Harare
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono-data">
            <button
              onClick={() => scrollTo('photography')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Photography
            </button>
            <button
              onClick={() => scrollTo('speaking')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Speaking
            </button>
            <button
              onClick={() => scrollTo('narrative')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Narrative
            </button>
            <button
              onClick={onOpenSpeakerRider}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Speaker Rider
            </button>
            <button
              onClick={onOpenBooking}
              className="text-white hover:text-neutral-300 transition-colors cursor-pointer font-medium"
            >
              Inquire / Book
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-data text-neutral-500">
          <div>
            © {new Date().getFullYear()} {TAKUNDA_PROFILE.name}. All photographic works copyrighted.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:takundamboma73@gmail.com"
              className="hover:text-neutral-300 transition-colors"
            >
              takundamboma73@gmail.com
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
