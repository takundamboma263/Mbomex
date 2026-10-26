import React, { useState } from 'react';
import { Camera, SlidersHorizontal, LayoutGrid, Columns2, PlusCircle, Maximize2 } from 'lucide-react';
import { PhotoWork } from '../data/portfolioData';
import { PhotoArtwork } from './PhotoArtwork';

interface PhotographyGalleryProps {
  works: PhotoWork[];
  onSelectWork: (work: PhotoWork) => void;
  onOpenUpload: () => void;
}

type CategoryFilter = 'all' | 'documentary' | 'portraits' | 'architecture' | 'editorial';
type ViewMode = 'bento' | 'masonry' | 'contact_sheet';

export const PhotographyGallery: React.FC<PhotographyGalleryProps> = ({
  works,
  onSelectWork,
  onOpenUpload,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('bento');

  const filteredWorks = works.filter((work) => {
    if (activeCategory === 'all') return true;
    return work.category === activeCategory;
  });

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All Works' },
    { key: 'documentary', label: 'Documentary & Street' },
    { key: 'portraits', label: 'Portraits of Resilience' },
    { key: 'architecture', label: 'Architecture & Form' },
    { key: 'editorial', label: 'Editorial Series' },
  ];

  return (
    <section id="photography" className="py-20 lg:py-28 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <div>
            <div className="text-xs font-mono-data tracking-wider uppercase text-neutral-400">
              Curated Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-light font-display text-white tracking-tight mt-1">
              Visual Archives & Series
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md font-light leading-relaxed">
            Each monograph is shot on manual prime optics. A study of light, architectural weight, and human dignity across changing urban environments.
          </p>
        </div>

        {/* Controls Toolbar: Functional Segmented Filter Buttons + View Modes */}
        <div className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Category Tabs (Segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/90 border border-neutral-800 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right Toolbar: View Mode + Upload Button */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900/90 border border-neutral-800 rounded-lg text-xs font-mono-data">
              <button
                onClick={() => setViewMode('bento')}
                className={`px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'bento'
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Bento Editorial Grid"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Bento</span>
              </button>

              <button
                onClick={() => setViewMode('masonry')}
                className={`px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'masonry'
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Masonry Gallery"
              >
                <Columns2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Masonry</span>
              </button>

              <button
                onClick={() => setViewMode('contact_sheet')}
                className={`px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewMode === 'contact_sheet'
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Contact Sheet & EXIF Technical View"
              >
                <Camera className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Contact Sheet</span>
              </button>
            </div>

            {/* Custom Photo Upload trigger */}
            <button
              onClick={onOpenUpload}
              className="px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
              title="Add your photo to the portfolio"
            >
              <PlusCircle className="w-3.5 h-3.5 text-neutral-400" />
              <span>Add Work</span>
            </button>
          </div>
        </div>

        {/* Gallery Content */}
        {filteredWorks.length === 0 ? (
          <div className="py-20 text-center text-neutral-500 font-mono-data text-xs">
            No photographic works found under this series category.
          </div>
        ) : viewMode === 'bento' ? (
          /* Bento Box Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredWorks.map((work, idx) => {
              // Create dynamic bento rhythm: 1st and 5th items can span 2 columns on large screens
              const isFeature = idx === 0 || idx === 4;

              return (
                <div
                  key={work.id}
                  onClick={() => onSelectWork(work)}
                  className={`group relative rounded-lg overflow-hidden border border-neutral-800/80 bg-neutral-900/60 transition-all duration-300 hover:border-neutral-600 hover:shadow-xl cursor-pointer ${
                    isFeature ? 'md:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                  }`}
                >
                  <PhotoArtwork work={work} className="w-full h-full" />

                  {/* Top-right zoom hint */}
                  <div className="absolute top-3 right-3 p-1.5 rounded bg-black/60 text-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        ) : viewMode === 'masonry' ? (
          /* Clean 2-column or 3-column Masonry */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => onSelectWork(work)}
                className="group relative rounded-lg overflow-hidden border border-neutral-800/80 bg-neutral-900/60 transition-all duration-300 hover:border-neutral-600 hover:shadow-xl cursor-pointer aspect-[4/3]"
              >
                <PhotoArtwork work={work} className="w-full h-full" />
                <div className="absolute top-3 right-3 p-1.5 rounded bg-black/60 text-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Contact Sheet & EXIF Technical View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                onClick={() => onSelectWork(work)}
                className="group border border-neutral-800 rounded-lg overflow-hidden bg-[#0d0d10] p-4 flex flex-col justify-between hover:border-neutral-600 transition-all cursor-pointer"
              >
                <div>
                  {/* Photo frame */}
                  <div className="aspect-[4/3] rounded overflow-hidden bg-black mb-3">
                    <PhotoArtwork work={work} showOverlay={false} className="w-full h-full" />
                  </div>

                  {/* Editorial Title */}
                  <div className="flex items-center gap-2 text-xs font-mono-data text-neutral-400">
                    <span>{work.series}</span>
                    <span aria-hidden="true">·</span>
                    <span>{work.year}</span>
                  </div>
                  <h3 className="text-base font-medium text-white tracking-tight mt-1 font-display">
                    {work.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{work.location}</p>
                </div>

                {/* Technical EXIF strip */}
                <div className="mt-4 pt-3 border-t border-neutral-800/80 font-mono-data text-[11px] text-neutral-400 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Camera</span>
                    <span className="text-neutral-300">{work.camera}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Optics</span>
                    <span className="text-neutral-300">{work.lens}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Exposure</span>
                    <span className="text-neutral-300">
                      {work.settings.focalLength} · {work.settings.aperture} · {work.settings.shutter} · {work.settings.iso}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery Footer Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono-data pt-6 border-t border-neutral-800/80">
          <span>Archival prints produced on Hahnemühle Baryta or 100% Cotton Rag</span>
          <span className="mt-2 sm:mt-0">Custom framing & international gallery shipping available</span>
        </div>
      </div>
    </section>
  );
};
