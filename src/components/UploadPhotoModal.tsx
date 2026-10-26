import React, { useState } from 'react';
import { X, Upload, Camera, Image as ImageIcon, Check } from 'lucide-react';
import { PhotoWork } from '../data/portfolioData';

interface UploadPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWork: (work: PhotoWork) => void;
}

export const UploadPhotoModal: React.FC<UploadPhotoModalProps> = ({
  isOpen,
  onClose,
  onAddWork,
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [series, setSeries] = useState('Transit & Memory');
  const [year, setYear] = useState(2026);
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState<'documentary' | 'portraits' | 'architecture' | 'editorial'>('documentary');
  const [camera, setCamera] = useState('Leica M11');
  const [lens, setLens] = useState('35mm f/1.4 Summilux');
  const [focalLength, setFocalLength] = useState('35mm');
  const [aperture, setAperture] = useState('f/2.8');
  const [shutter, setShutter] = useState('1/500s');
  const [iso, setIso] = useState('ISO 100');
  const [story, setStory] = useState('');
  const [previewData, setPreviewData] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewData(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !location) return;

    const newWork: PhotoWork = {
      id: `custom-pw-${Date.now()}`,
      title,
      subtitle: subtitle || 'Documentary Photographic Study',
      series: series || 'Personal Archive',
      year: Number(year) || 2026,
      location,
      category,
      camera: camera || 'Leica M11',
      lens: lens || '35mm Prime',
      settings: {
        focalLength: focalLength || '35mm',
        aperture: aperture || 'f/2.8',
        shutter: shutter || '1/500s',
        iso: iso || 'ISO 100',
      },
      story: story || 'A quiet exploration of light and human presence observed in the field.',
      customImageData: previewData || undefined,
      svgArtType: 'monochrome_portrait',
    };

    onAddWork(newWork);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]/95 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0d0d10] border border-neutral-800 rounded-lg shadow-2xl p-6 sm:p-8 text-neutral-200 my-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
          <div>
            <span className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block">
              Curator Intake
            </span>
            <h3 className="text-2xl font-light font-display text-white tracking-tight mt-0.5">
              Add Photograph to Portfolio
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          {/* File Upload Slot */}
          <div>
            <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-2">
              Photograph Image File
            </label>
            <div className="relative border-2 border-dashed border-neutral-800 hover:border-neutral-600 rounded-lg p-6 text-center transition-colors bg-neutral-900/40">
              {previewData ? (
                <div className="space-y-3">
                  <img
                    src={previewData}
                    alt="Preview"
                    className="max-h-48 mx-auto rounded object-contain border border-neutral-800"
                  />
                  <div className="text-xs text-emerald-400 font-mono-data flex items-center justify-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Image Loaded Ready for Portfolio</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="w-8 h-8 text-neutral-500 mx-auto" />
                  <p className="text-xs text-neutral-400">
                    Upload JPEG, PNG, or WebP photography
                  </p>
                  <p className="text-[11px] font-mono-data text-neutral-600">
                    (If skipped, an architectural monochrome composition will be rendered)
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Title & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                Artwork Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Shadows on Samora Machel Avenue"
                className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans"
              />
            </div>

            <div>
              <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                Location & City *
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Harare, Zimbabwe"
                className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans"
              />
            </div>
          </div>

          {/* Series & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                Series Name
              </label>
              <input
                type="text"
                value={series}
                onChange={(e) => setSeries(e.target.value)}
                placeholder="e.g. Transit & Memory"
                className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans"
              />
            </div>

            <div>
              <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                Portfolio Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-mono-data cursor-pointer"
              >
                <option value="documentary">Documentary & Street</option>
                <option value="portraits">Portraits of Resilience</option>
                <option value="architecture">Architecture & Form</option>
                <option value="editorial">Editorial Series</option>
              </select>
            </div>
          </div>

          {/* EXIF Data */}
          <div>
            <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
              Camera & Optics EXIF
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <input
                type="text"
                value={camera}
                onChange={(e) => setCamera(e.target.value)}
                placeholder="Camera Body"
                className="px-2.5 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded text-white font-mono-data"
              />
              <input
                type="text"
                value={lens}
                onChange={(e) => setLens(e.target.value)}
                placeholder="Lens"
                className="px-2.5 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded text-white font-mono-data"
              />
              <input
                type="text"
                value={aperture}
                onChange={(e) => setAperture(e.target.value)}
                placeholder="Aperture (f/2.8)"
                className="px-2.5 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded text-white font-mono-data"
              />
              <input
                type="text"
                value={iso}
                onChange={(e) => setIso(e.target.value)}
                placeholder="ISO"
                className="px-2.5 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded text-white font-mono-data"
              />
            </div>
          </div>

          {/* Field Story */}
          <div>
            <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
              Field Notes / Narrative
            </label>
            <textarea
              rows={3}
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Describe the moment, lighting, and cultural context..."
              className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans resize-none"
            />
          </div>

          <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono-data text-neutral-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-black bg-white rounded-md hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Add to Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
