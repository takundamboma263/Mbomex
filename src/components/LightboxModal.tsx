import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, Calendar, Info, Layers } from 'lucide-react';
import { PhotoWork } from '../data/portfolioData';
import { PhotoArtwork } from './PhotoArtwork';

interface LightboxModalProps {
  work: PhotoWork | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onInquirePrint: (work: PhotoWork) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  work,
  onClose,
  onPrev,
  onNext,
  onInquirePrint,
}) => {
  useEffect(() => {
    if (!work) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [work, onClose, onPrev, onNext]);

  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Top Header Bar */}
      <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-neutral-400 z-10 font-mono-data text-xs">
        <div className="flex items-center gap-2">
          <span>Takunda Mboma Archive</span>
          <span>/</span>
          <span className="text-white">{work.series}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-neutral-900/80 border border-neutral-700 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close Lightbox (ESC)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-7xl h-full max-h-[88vh] flex flex-col lg:flex-row gap-8 items-center justify-between mt-10">
        {/* Left: Photographic Canvas & Controls */}
        <div className="relative flex-1 w-full h-[55vh] lg:h-full flex items-center justify-center overflow-hidden rounded-lg bg-black border border-neutral-800/80">
          <PhotoArtwork work={work} showOverlay={false} className="w-full h-full" />

          {/* Previous Arrow */}
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-neutral-700/60 text-white hover:bg-neutral-800 transition-all cursor-pointer backdrop-blur-sm"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 border border-neutral-700/60 text-white hover:bg-neutral-800 transition-all cursor-pointer backdrop-blur-sm"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right: Technical Inspector & Editorial Notes */}
        <div className="w-full lg:w-96 flex flex-col justify-between overflow-y-auto max-h-[35vh] lg:max-h-full space-y-6 text-neutral-300 pr-2">
          <div>
            {/* Metadata breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-mono-data text-neutral-400">
              <span>{work.series}</span>
              <span aria-hidden="true">·</span>
              <span>{work.year}</span>
            </div>

            <h3 className="text-2xl font-light font-display text-white tracking-tight mt-1">
              {work.title}
            </h3>
            {work.subtitle && (
              <p className="text-xs text-neutral-400 mt-1 font-serif-editorial italic">
                {work.subtitle}
              </p>
            )}

            <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-2 font-mono-data">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>{work.location}</span>
            </div>

            {/* Story / Field Notes */}
            <div className="mt-5 pt-4 border-t border-neutral-800/80">
              <h4 className="text-xs uppercase tracking-wider font-mono-data text-neutral-400 mb-2">
                Field Notes
              </h4>
              <p className="text-sm font-light leading-relaxed text-neutral-300">
                {work.story}
              </p>
            </div>

            {/* Exhibition / Dimensions */}
            {(work.exhibition || work.dimensions) && (
              <div className="mt-4 pt-3 border-t border-neutral-800/80 text-xs font-mono-data space-y-1.5">
                {work.exhibition && (
                  <div className="flex items-start gap-2 text-neutral-400">
                    <span className="text-neutral-500 shrink-0">Exhibition:</span>
                    <span className="text-neutral-300">{work.exhibition}</span>
                  </div>
                )}
                {work.dimensions && (
                  <div className="flex items-start gap-2 text-neutral-400">
                    <span className="text-neutral-500 shrink-0">Medium:</span>
                    <span className="text-neutral-300">{work.dimensions}</span>
                  </div>
                )}
                {work.edition && (
                  <div className="flex items-start gap-2 text-neutral-400">
                    <span className="text-neutral-500 shrink-0">Edition:</span>
                    <span className="text-neutral-300">{work.edition}</span>
                  </div>
                )}
              </div>
            )}

            {/* Camera & EXIF Data */}
            <div className="mt-5 pt-4 border-t border-neutral-800/80">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono-data text-neutral-400 mb-2.5">
                <Camera className="w-3.5 h-3.5" />
                <span>Camera & Exposure Telemetry</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono-data bg-neutral-900/80 p-3 rounded-lg border border-neutral-800">
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Body</span>
                  <span className="text-white font-medium">{work.camera}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Lens</span>
                  <span className="text-white font-medium truncate block">{work.lens}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Focal & Aperture</span>
                  <span className="text-white font-medium">
                    {work.settings.focalLength} · {work.settings.aperture}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">Shutter & ISO</span>
                  <span className="text-white font-medium">
                    {work.settings.shutter} · {work.settings.iso}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-4 border-t border-neutral-800/80">
            <button
              onClick={() => onInquirePrint(work)}
              className="w-full py-2.5 text-xs uppercase tracking-wider font-semibold text-black bg-white rounded-md hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Inquire About Print Acquisition
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
