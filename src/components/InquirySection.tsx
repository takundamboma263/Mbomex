import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import { TAKUNDA_PROFILE, KeynoteTopic, PhotoWork } from '../data/portfolioData';

interface InquirySectionProps {
  preselectedTopic?: KeynoteTopic | null;
  preselectedPrint?: PhotoWork | null;
  onClearPreselections?: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({
  preselectedTopic,
  preselectedPrint,
  onClearPreselections,
}) => {
  const [inquiryType, setInquiryType] = useState<string>(
    preselectedTopic ? 'speaking' : preselectedPrint ? 'print' : 'speaking'
  );
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [budgetTier, setBudgetTier] = useState('$5,000 – $10,000');
  const [message, setMessage] = useState(
    preselectedTopic
      ? `Hello Takunda,\n\nWe would like to invite you to deliver the keynote "${preselectedTopic.title}" at our upcoming event.`
      : preselectedPrint
      ? `Hello Takunda,\n\nI am inquiring about acquiring an archival fine art print of "${preselectedPrint.title}" (${preselectedPrint.series}, ${preselectedPrint.year}).`
      : ''
  );
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TAKUNDA_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="inquire" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Representation */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono-data tracking-wider uppercase text-neutral-400">
                Direct Inquiries & Bookings
              </div>
              <h2 className="text-3xl sm:text-4xl font-light font-display text-white tracking-tight mt-1">
                Initiate a Conversation
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mt-3">
                For keynote speaking invitations, photographic commissions, print acquisitions, or press interviews, contact Takunda directly or complete the brief.
              </p>
            </div>

            {/* Email Card with One-Click Copy */}
            <div className="p-6 rounded-lg bg-[#0d0d10] border border-neutral-800 space-y-3">
              <span className="text-xs font-mono-data uppercase tracking-wider text-neutral-500 block">
                Direct Email Address
              </span>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${TAKUNDA_PROFILE.email}`}
                  className="text-base sm:text-lg font-mono-data font-medium text-white hover:text-neutral-300 transition-colors truncate"
                >
                  {TAKUNDA_PROFILE.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] font-mono-data text-neutral-500">
                Guaranteed personal response within 24–48 hours.
              </p>
            </div>

            {/* Social & Channel Links */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono-data uppercase tracking-wider text-neutral-500 block">
                Network & Dispatches
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono-data">
                {TAKUNDA_PROFILE.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded bg-neutral-900/60 border border-neutral-800/80 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all flex items-center justify-between"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded border border-neutral-800/60 text-xs font-mono-data text-neutral-400">
              <span className="text-neutral-300 font-medium block mb-1">2026/2027 Calendar</span>
              Currently confirming keynotes for autumn 2026 and winter 2027 international tours. Limited documentary commissions accepted annually to preserve editorial depth.
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0d0d10] border border-neutral-800 rounded-lg p-6 sm:p-10">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-light font-display text-white">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-neutral-400 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, {name}. Your dispatch regarding {inquiryType} has been received. Takunda's team will review the details and reach out to {email} promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      if (onClearPreselections) onClearPreselections();
                    }}
                    className="px-5 py-2 text-xs font-mono-data uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-800 rounded"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-2.5">
                    Nature of Inquiry
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { key: 'speaking', label: 'Keynote Speaking' },
                      { key: 'commission', label: 'Photography Commission' },
                      { key: 'print', label: 'Print Acquisition' },
                      { key: 'press', label: 'Press / Interview' },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setInquiryType(item.key)}
                        className={`p-2.5 text-xs font-medium rounded border transition-all text-center cursor-pointer ${
                          inquiryType === item.key
                            ? 'bg-white text-black border-white font-semibold'
                            : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Helena Vance"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Organization / Event
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Global Creative Summit"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Proposed Date / Window
                    </label>
                    <input
                      type="text"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      placeholder="e.g. November 2026 / Q1 2027"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Location / Mode
                    </label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. London / In-Person / Virtual"
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                      Budget / Honorarium Tier
                    </label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-mono-data cursor-pointer"
                    >
                      <option value="Under $5,000">Under $5,000 (Non-profit / Academic)</option>
                      <option value="$5,000 – $10,000">$5,000 – $10,000 (Keynote / Commission)</option>
                      <option value="$10,000 – $20,000">$10,000 – $20,000 (Summit / Campaign)</option>
                      <option value="$20,000+">$20,000+ (Multi-City Tour / Global Monograph)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono-data uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Engagement Details / Context *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Takunda about the theme, audience size, specific goals, or vision..."
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-neutral-500 font-sans resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] font-mono-data text-neutral-500">
                    * Required fields
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-black bg-white rounded-md hover:bg-neutral-200 transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>Transmit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
