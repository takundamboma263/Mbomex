/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhotographyGallery } from './components/PhotographyGallery';
import { SpeakingSection } from './components/SpeakingSection';
import { NarrativeSection } from './components/NarrativeSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { SpeakerOneSheetModal } from './components/SpeakerOneSheetModal';
import { UploadPhotoModal } from './components/UploadPhotoModal';
import {
  INITIAL_PHOTO_WORKS,
  PhotoWork,
  KeynoteTopic,
  TAKUNDA_PROFILE,
} from './data/portfolioData';

export default function App() {
  const [works, setWorks] = useState<PhotoWork[]>(() => {
    try {
      const saved = localStorage.getItem('takunda_photo_works');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // Fallback
    }
    return INITIAL_PHOTO_WORKS;
  });

  const [selectedLightboxWork, setSelectedLightboxWork] = useState<PhotoWork | null>(null);
  const [isSpeakerRiderOpen, setIsSpeakerRiderOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [preselectedTopic, setPreselectedTopic] = useState<KeynoteTopic | null>(null);
  const [preselectedPrint, setPreselectedPrint] = useState<PhotoWork | null>(null);

  // Sync custom works to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('takunda_photo_works', JSON.stringify(works));
    } catch (e) {
      // Ignore storage errors
    }
  }, [works]);

  const handleSelectWork = (work: PhotoWork) => {
    setSelectedLightboxWork(work);
  };

  const handleCloseLightbox = () => {
    setSelectedLightboxWork(null);
  };

  const handlePrevLightbox = () => {
    if (!selectedLightboxWork) return;
    const currentIndex = works.findIndex((w) => w.id === selectedLightboxWork.id);
    const prevIndex = (currentIndex - 1 + works.length) % works.length;
    setSelectedLightboxWork(works[prevIndex]);
  };

  const handleNextLightbox = () => {
    if (!selectedLightboxWork) return;
    const currentIndex = works.findIndex((w) => w.id === selectedLightboxWork.id);
    const nextIndex = (currentIndex + 1) % works.length;
    setSelectedLightboxWork(works[nextIndex]);
  };

  const handleInquirePrint = (work: PhotoWork) => {
    setSelectedLightboxWork(null);
    setPreselectedPrint(work);
    setPreselectedTopic(null);
    const el = document.getElementById('inquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTopic = (topic: KeynoteTopic) => {
    setPreselectedTopic(topic);
    setPreselectedPrint(null);
    const el = document.getElementById('inquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    setPreselectedTopic(null);
    setPreselectedPrint(null);
    const el = document.getElementById('inquire');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddWork = (newWork: PhotoWork) => {
    setWorks((prev) => [newWork, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* Navigation adhering to Top Bar Contract */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenSpeakerRider={() => setIsSpeakerRiderOpen(true)}
      />

      {/* Hero with Architectural Split & 4-Column Proof Strip */}
      <Hero
        onSelectWork={handleSelectWork}
        onOpenBooking={handleOpenBooking}
        onOpenSpeakerRider={() => setIsSpeakerRiderOpen(true)}
      />

      {/* Photography Portfolio Gallery */}
      <PhotographyGallery
        works={works}
        onSelectWork={handleSelectWork}
        onOpenUpload={() => setIsUploadOpen(true)}
      />

      {/* Speaking Engagements & Keynote Curricula */}
      <SpeakingSection
        onBookTopic={handleBookTopic}
        onOpenSpeakerRider={() => setIsSpeakerRiderOpen(true)}
      />

      {/* Narrative & Visual Philosophy */}
      <NarrativeSection />

      {/* Booking Inquiries & Direct Representation */}
      <InquirySection
        preselectedTopic={preselectedTopic}
        preselectedPrint={preselectedPrint}
        onClearPreselections={() => {
          setPreselectedTopic(null);
          setPreselectedPrint(null);
        }}
      />

      {/* Footer */}
      <Footer
        onOpenSpeakerRider={() => setIsSpeakerRiderOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        work={selectedLightboxWork}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
        onInquirePrint={handleInquirePrint}
      />

      {/* Speaker One-Sheet & Technical AV Rider Modal */}
      <SpeakerOneSheetModal
        isOpen={isSpeakerRiderOpen}
        onClose={() => setIsSpeakerRiderOpen(false)}
        onBookNow={handleOpenBooking}
      />

      {/* Custom Photo Upload Modal */}
      <UploadPhotoModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddWork={handleAddWork}
      />
    </div>
  );
}
