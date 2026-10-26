import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { TAKUNDA_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenSpeakerRider: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenSpeakerRider }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#09090b]/90 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 lg:px-12 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg font-semibold tracking-tight font-display text-white whitespace-nowrap shrink-0 hover:text-neutral-300 transition-colors"
        >
          {TAKUNDA_PROFILE.name}
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <button
            onClick={() => scrollTo('photography')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Photography
          </button>
          <button
            onClick={() => scrollTo('speaking')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Speaking
          </button>
          <button
            onClick={() => scrollTo('narrative')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Narrative
          </button>
          <button
            onClick={onOpenSpeakerRider}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1"
          >
            Speaker Rider
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </button>
          <button
            onClick={() => scrollTo('inquire')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide uppercase text-black bg-white rounded-md hover:bg-neutral-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Inquire / Book
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#09090b] px-6 py-5 space-y-4 text-sm font-medium text-neutral-300 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollTo('photography')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Photography Portfolio
            </button>
            <button
              onClick={() => scrollTo('speaking')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Speaking Engagements & Topics
            </button>
            <button
              onClick={() => scrollTo('narrative')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Narrative & Biography
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpeakerRider();
              }}
              className="text-left py-2 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>Speaker One-Sheet & Rider</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </button>
            <button
              onClick={() => scrollTo('inquire')}
              className="text-left py-2 hover:text-white transition-colors"
            >
              Inquiries & Representation
            </button>
          </div>

          <div className="pt-3 border-t border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold text-center text-black bg-white rounded-md hover:bg-neutral-200"
            >
              Inquire / Book Keynote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
