import React, { useState, useEffect } from 'react';
import { Mic2, Play, Pause, Download, Calendar, MapPin, Users, CheckCircle2, ChevronRight, Volume2, Sparkles, FileText } from 'lucide-react';
import { KEYNOTE_TOPICS, SPEAKING_ENGAGEMENTS, KeynoteTopic } from '../data/portfolioData';

interface SpeakingSectionProps {
  onBookTopic: (topic: KeynoteTopic) => void;
  onOpenSpeakerRider: () => void;
}

export const SpeakingSection: React.FC<SpeakingSectionProps> = ({
  onBookTopic,
  onOpenSpeakerRider,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(KEYNOTE_TOPICS[0].id);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(24); // percentage

  // Simulate audio playback progress
  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const activeTopicObj = KEYNOTE_TOPICS.find((t) => t.id === selectedTopic) || KEYNOTE_TOPICS[0];

  return (
    <section id="speaking" className="py-20 lg:py-28 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <div>
            <div className="text-xs font-mono-data tracking-wider uppercase text-neutral-400 flex items-center gap-2">
              <Mic2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>Keynote Speaking & Oratory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light font-display text-white tracking-tight mt-1">
              Perspective on Stage
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSpeakerRider}
              className="px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700 rounded-md hover:border-neutral-500 transition-colors cursor-pointer flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Speaker One-Sheet & Rider</span>
            </button>
          </div>
        </div>

        {/* Lead Quote Banner */}
        <div className="my-10 p-8 rounded-lg bg-[#0e0e12] border border-neutral-800/80 relative overflow-hidden">
          <div className="max-w-3xl">
            <p className="text-lg sm:text-xl font-serif-editorial italic text-neutral-200 leading-relaxed">
              "The most powerful voice in the auditorium is rarely the loudest; it is the one that speaks with undeniable clarity and deep human reverence."
            </p>
            <div className="mt-3 text-xs font-mono-data text-neutral-400">
              — Takunda Mboma, Keynote at Global Creative Leadership Summit
            </div>
          </div>
        </div>

        {/* Keynote Topics: Interactive Two-Column Inspector */}
        <div className="mt-12">
          <h3 className="text-xs uppercase font-mono-data text-neutral-400 tracking-wider mb-6">
            01. Signature Keynote Curricula
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Topic Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {KEYNOTE_TOPICS.map((topic, index) => {
                const isActive = topic.id === selectedTopic;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    className={`w-full text-left p-5 rounded-lg border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900 border-neutral-600 shadow-md'
                        : 'bg-[#0d0d10]/60 border-neutral-800/60 hover:border-neutral-700 hover:bg-neutral-900/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono-data text-neutral-400 mb-1.5">
                      <span>0{index + 1} · {topic.format}</span>
                      <span>{topic.duration}</span>
                    </div>
                    <h4 className="text-base font-medium font-display text-white tracking-tight leading-snug">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 line-clamp-2 font-light">
                      {topic.tagline}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: Detailed Topic Profile & Booking Action */}
            <div className="lg:col-span-7 bg-[#0d0d10] border border-neutral-800 rounded-lg p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-data text-neutral-400 mb-2">
                  <span>{activeTopicObj.format}</span>
                  <span>·</span>
                  <span>{activeTopicObj.duration}</span>
                  <span>·</span>
                  <span className="text-neutral-300">Available Worldwide & Virtual</span>
                </div>

                <h3 className="text-2xl font-light font-display text-white tracking-tight">
                  {activeTopicObj.title}
                </h3>
                <p className="text-sm font-serif-editorial italic text-neutral-400 mt-1">
                  {activeTopicObj.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="pt-4 border-t border-neutral-800/80">
                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {activeTopicObj.description}
                </p>
              </div>

              {/* Target Audience */}
              <div className="p-3.5 bg-neutral-900/80 rounded border border-neutral-800/80 text-xs font-mono-data">
                <span className="text-neutral-500 uppercase tracking-wider block text-[10px] mb-1">Ideal For</span>
                <span className="text-neutral-300">{activeTopicObj.audience}</span>
              </div>

              {/* Key Takeaways */}
              <div>
                <h5 className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 mb-3">
                  Core Keynote Takeaways
                </h5>
                <ul className="space-y-2.5">
                  {activeTopicObj.takeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking Action */}
              <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-neutral-400 font-mono-data">
                  Includes pre-event alignment call & custom audience tailoring
                </div>
                <button
                  onClick={() => onBookTopic(activeTopicObj)}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-black bg-white rounded-md hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Book This Keynote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Reel / Keynote Snippet Player */}
        <div className="mt-16 pt-12 border-t border-neutral-800/80">
          <div className="bg-[#0b0b0e] border border-neutral-800 rounded-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-all cursor-pointer shadow-lg shrink-0"
                  aria-label={isPlayingAudio ? 'Pause Audio Clip' : 'Play Audio Clip'}
                >
                  {isPlayingAudio ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black ml-0.5" />}
                </button>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono-data text-neutral-400">
                    <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Live Stage Excerpt · TEDx & Leadership Tour</span>
                  </div>
                  <h4 className="text-base font-medium font-display text-white tracking-tight mt-0.5">
                    "The Architecture of Trust: How the Lens Rewrites Leadership"
                  </h4>
                </div>
              </div>

              <div className="text-xs font-mono-data text-neutral-400 flex items-center gap-3">
                <span>01:14 / 04:30</span>
                <span>·</span>
                <span className="text-neutral-300">Recorded Live in London</span>
              </div>
            </div>

            {/* Audio Waveform visualization */}
            <div className="mt-6">
              <div className="h-10 flex items-center gap-1">
                {Array.from({ length: 48 }).map((_, idx) => {
                  const barHeight = Math.sin(idx * 0.4) * 16 + 20;
                  const isPassed = (idx / 48) * 100 <= audioProgress;

                  return (
                    <button
                      key={idx}
                      onClick={() => setAudioProgress((idx / 48) * 100)}
                      className="flex-1 h-full flex items-center justify-center focus:outline-none group cursor-pointer"
                    >
                      <span
                        style={{ height: `${barHeight}px` }}
                        className={`w-full rounded-full transition-colors ${
                          isPassed
                            ? 'bg-white'
                            : 'bg-neutral-800 group-hover:bg-neutral-600'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 p-4 rounded bg-neutral-900/50 border border-neutral-800/60 text-xs sm:text-sm font-serif-editorial italic text-neutral-300">
                "When you point a camera at someone, you are either taking their dignity or offering an invitation for them to reveal their truth. The same is true every time a CEO addresses their company..."
              </div>
            </div>
          </div>
        </div>

        {/* International Engagements Timeline Table */}
        <div className="mt-16 pt-12 border-t border-neutral-800/80">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs uppercase font-mono-data text-neutral-400 tracking-wider">
              02. Selected International Engagements
            </h3>
            <span className="text-xs font-mono-data text-neutral-400">
              Recent & Confirmed Keynotes
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono-data border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 text-neutral-400">
                  <th className="py-3 px-4 font-normal">Date / Year</th>
                  <th className="py-3 px-4 font-normal">Event & Forum</th>
                  <th className="py-3 px-4 font-normal">Location</th>
                  <th className="py-3 px-4 font-normal">Format</th>
                  <th className="py-3 px-4 font-normal text-right">Delegates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900">
                {SPEAKING_ENGAGEMENTS.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-4 px-4 text-white font-medium whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-white font-medium font-display text-sm">{item.event}</div>
                      <div className="text-neutral-400 text-[11px] mt-0.5">{item.topic}</div>
                    </td>
                    <td className="py-4 px-4 text-neutral-400 whitespace-nowrap">
                      {item.location}
                    </td>
                    <td className="py-4 px-4 text-neutral-300 whitespace-nowrap">
                      {item.format}
                    </td>
                    <td className="py-4 px-4 text-right text-neutral-400 tabular-nums whitespace-nowrap">
                      {item.attendees}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
