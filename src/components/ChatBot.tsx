import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  action?: {
    label: string;
    url: string;
  };
}

const QUICK_QUESTIONS = [
  { label: '✍️ SSC Signature Rules', query: 'What are the signature rules for SSC CGL, CHSL and GD?' },
  { label: '🚂 RRB NTPC CEN 06/2026', query: 'What are RRB NTPC photo and signature specifications?' },
  { label: '🖋️ Blue vs Black Ink', query: 'Can I use blue ink for exam signatures or is black ink mandatory?' },
  { label: '📷 NEET Photo & Date', query: 'What are the rules for NEET photo, name and date stamp?' },
  { label: '📄 PDF Export under 300 KB', query: 'How to resize marksheet or caste certificate to PDF under 300 KB?' },
  { label: '🏦 IBPS Thumb Impression', query: 'What is the Left Thumb Impression size for IBPS & SBI?' },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Namaste! 🙏 I am your **SignResize AI Exam Assistant**.\n\nI can help you with exact photo & signature dimensions, file size limits (KB), ink rules, and live webcam troubleshooting for **SSC, RRB, UPSC, IBPS, NEET & State PSCs**.',
      timestamp: 'Just now'
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages, isTyping]);

  const generateAnswer = (userQuery: string): { text: string; action?: { label: string; url: string } } => {
    const q = userQuery.toLowerCase().trim();

    // Blue vs Black Ink
    if (q.includes('blue') || q.includes('black') || q.includes('ink') || q.includes('pen')) {
      return {
        text: '📌 **Ink Color Rules for Govt Exams:**\n\n• **SSC (CGL, CHSL, GD, MTS):** Strictly **Black Ink** on white paper. Blue ink risks automated scanner rejection!\n• **UPSC Civil Services:** Strictly **Black Ink** on white paper.\n• **IBPS / SBI Banking:** Black ink is mandatory for signatures. Blue or black ink is accepted for Left Thumb Impressions.\n• **Railway (RRB NTPC, ALP):** Black ink strongly recommended.\n\n*Pro-tip:* Always sign with a dark gel or rollerball pen on crisp, unruled white paper.',
        action: { label: '📖 Read Blue vs Black Ink Guide', url: '/blog/blue-ink-vs-black-ink-signature-guidelines-govt-exams/' }
      };
    }

    // SSC Rules
    if (q.includes('ssc') || q.includes('cgl') || q.includes('chsl') || q.includes('mts') || q.includes('gd')) {
      return {
        text: '🏛️ **SSC 2026 Official Specifications:**\n\n• **Signature:** 10 KB to 20 KB (JPG/JPEG)\n• **Dimensions:** Width 4.0 cm × Height 2.0 cm (~140 × 60 pixels)\n• **Ink:** Black ink on unruled white paper.\n• **Live Photo (Webcam):** Captured directly on ssc.gov.in. Must have plain light background, no cap/spectacles, and both ears clearly visible.',
        action: { label: '🚀 Open SSC Resizer Tool', url: '/ssc-signature-resize/' }
      };
    }

    // RRB NTPC / Railway
    if (q.includes('rrb') || q.includes('railway') || q.includes('ntpc') || q.includes('alp') || q.includes('group d') || q.includes('cen')) {
      return {
        text: '🚂 **RRB CEN 06/2026 & Railway Standards:**\n\n• **Photograph:** 30 KB to 70 KB (35 mm × 45 mm, 320 × 240 px, plain white background)\n• **Signature:** 30 KB to 70 KB (running handwriting only, NOT block capital letters)\n• **Color:** Black ink on white paper.\n• **Application Window:** Open until October 8, 2026.',
        action: { label: '🚀 Open RRB Preset Tool', url: '/rrb-signature-resize/' }
      };
    }

    // NEET / NTA
    if (q.includes('neet') || q.includes('jee') || q.includes('nta')) {
      return {
        text: '🩺 **NTA NEET 2026 Upload Rules:**\n\n• **Passport Photo:** 10 KB to 200 KB (white background, 80% face coverage showing ears)\n• **Name & Date Stamp:** Must print candidate name and date of photo capture at the bottom\n• **Postcard Size Photo:** 4" × 6" (10 KB to 200 KB)\n• **Signature:** 4 KB to 30 KB (black ink on white paper)\n• **Fingers & Thumb Impression:** 10 KB to 200 KB.',
        action: { label: '🚀 Open NEET Photo Resizer', url: '/neet-photo-resize/' }
      };
    }

    // PDF / Document / Marksheet / Caste
    if (q.includes('pdf') || q.includes('document') || q.includes('certificate') || q.includes('marksheet') || q.includes('caste') || q.includes('300')) {
      return {
        text: '📄 **Document & Certificate PDF Guidelines:**\n\n• Most portals (UPSC OTR, GATE, State PSCs) require caste/category certificates and marksheet PDFs to be **under 300 KB** (or 500 KB).\n• Our Document Resizer tool can compress any scanned image and export it as an **official single-page PDF under 300 KB** in 1 click!',
        action: { label: '📄 Open Document Resizer (PDF)', url: '/document-resizer/' }
      };
    }

    // IBPS / Banking
    if (q.includes('ibps') || q.includes('sbi') || q.includes('bank') || q.includes('po') || q.includes('clerk') || q.includes('thumb')) {
      return {
        text: '🏦 **IBPS & SBI Banking Upload Rules:**\n\n• **Photograph:** 20 KB to 50 KB (200 × 230 px, light/white background)\n• **Signature:** 10 KB to 20 KB (140 × 60 px, Black ink only; NO capital letters)\n• **Left Thumb Impression:** 20 KB to 50 KB (240 × 240 px, Blue or Black ink)\n• **Handwritten Declaration:** 50 KB to 100 KB (strictly English, black ink).',
        action: { label: '🚀 Open IBPS Resizer', url: '/ibps-signature-resize/' }
      };
    }

    // UPSC
    if (q.includes('upsc') || q.includes('ias') || q.includes('cse') || q.includes('nda') || q.includes('cds') || q.includes('otr')) {
      return {
        text: '🏛️ **UPSC Civil Services & OTR Standards:**\n\n• **Photograph:** 20 KB to 300 KB (Min 350 × 350 px, Max 1000 × 1000 px, 3/4th face coverage)\n• **Signature:** 20 KB to 300 KB (Min 350 × 350 px, black ink on white paper)\n• **Photo Requirement:** Name of candidate and date of photo capture must be stamped at the base.',
        action: { label: '🚀 Open UPSC Resizer', url: '/upsc-signature-resize/' }
      };
    }

    // State Police
    if (q.includes('police') || q.includes('up police') || q.includes('rajasthan') || q.includes('bihar') || q.includes('mp police')) {
      return {
        text: '👮 **State Police Recruitment Standards:**\n\n• **UP Police:** Photo 20–50 KB (35×45 mm), Signature 5–20 KB (3.5×1.5 cm, Black ink).\n• **Rajasthan Police (SSO):** Photo 50–100 KB, Signature 20–50 KB.\n• **Bihar Police (CSBC):** Photo 20–50 KB, Hindi & English signatures 10–20 KB each.\n• **MP Police:** Combined Photo & Sign Template under 200 KB.',
        action: { label: '🚀 Open UP Police Resizer', url: '/up-police-signature-resize/' }
      };
    }

    // Live webcam issue
    if (q.includes('webcam') || q.includes('camera') || q.includes('live photo') || q.includes('permission') || q.includes('mobile')) {
      return {
        text: '📸 **SSC Live Webcam Troubleshooting:**\n\n1. Use Google Chrome or Firefox on a laptop or desktop with decent lighting.\n2. In Chrome, click the Padlock/Sliders icon in address bar → Set Camera to **Allow**.\n3. Turn on front lighting (avoid strong backlight/windows behind you).\n4. Plain white or off-white background is required.\n5. Keep spectacles and caps off!',
        action: { label: '📖 Read Complete Webcam Fix Guide', url: '/blog/ssc-live-photo-webcam-guidelines-troubleshooting-2026/' }
      };
    }

    // General resize query
    if (q.includes('resize') || q.includes('kb') || q.includes('compress') || q.includes('how to')) {
      return {
        text: '⚡ **How to Resize in 3 Seconds with SignResize:**\n\n1. Select your target exam preset (e.g. SSC 10–20 KB, RRB 30–70 KB, or Custom KB).\n2. Drag & drop or upload your photo or signature.\n3. Adjust crop box if needed.\n4. Click **Download JPG** (or **Download PDF** for documents) — instant compression processed 100% on your device!',
        action: { label: '🚀 Resize Signature to 10–20 KB Now', url: '/' }
      };
    }

    // Default Fallback
    return {
      text: `Thanks for asking! For "${userQuery}", SignResize offers instant 100% in-browser presets matching all official 2026 recruitment notification gazettes.\n\nYou can select your exact exam from the tool header or browse our 65+ dedicated portal presets.`,
      action: { label: '🧮 Open All 65+ Presets', url: '/government-jobs/' }
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateAnswer(query);
      const newBotMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponse.text,
        timestamp: 'Just now',
        action: botResponse.action
      };
      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 450);
  };

  const formatMessageText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={lIdx}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-bold text-foreground">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
          {lIdx < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Chatbot Launcher Button */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/95 border border-border shadow-lg text-[11px] font-semibold text-foreground backdrop-blur-md pointer-events-none group-hover:scale-105 transition-transform">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Ask Exam AI Copilot</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close Sarkari Exam Assistant' : 'Open Sarkari Exam Assistant'}
          className="relative w-13 h-13 rounded-full bg-gradient-to-tr from-primary to-indigo-600 text-white shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-background animate-ping"></span>
          )}
          {hasUnread && !isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-background"></span>
          )}

          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>
      </div>

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] h-[540px] max-h-[82vh] rounded-2xl border border-border/80 bg-card/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-primary/15 via-background to-indigo-500/10 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm border border-primary/30 shadow-xs">
                🤖
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground">SignResize AI Copilot</h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <p className="text-[10px] text-muted-foreground">Instant photo, sign &amp; 2026 exam specs</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([messages[0]])}
                title="Reset conversation"
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors text-xs"
              >
                🔄
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Assistant"
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-muted/30 border-b border-border/60 overflow-x-auto no-scrollbar flex items-center gap-1.5 whitespace-nowrap">
            {QUICK_QUESTIONS.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip.query)}
                className="text-[10px] px-2.5 py-1 rounded-full bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary font-medium border border-border/80 transition-all shrink-0 hover:scale-102"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3 rounded-2xl whitespace-pre-line leading-relaxed text-xs shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-xs'
                      : 'bg-muted/60 text-foreground border border-border/70 rounded-bl-xs'
                  }`}
                >
                  {formatMessageText(msg.text)}

                  {msg.action && (
                    <div className="mt-2.5 pt-2 border-t border-border/50">
                      <a
                        href={msg.action.url}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold text-[11px] hover:opacity-90 shadow-xs transition-opacity"
                      >
                        <span>{msg.action.label}</span>
                        <span>→</span>
                      </a>
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-muted-foreground mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-muted/60 text-muted-foreground text-xs w-20 border border-border/70">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-background border-t border-border flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask photo/sign rules (e.g. RRB NTPC, SSC ink)..."
              className="flex-1 px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="p-2 rounded-xl bg-primary text-primary-foreground disabled:opacity-40 hover:opacity-90 transition-opacity flex items-center justify-center shadow-xs"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>

        </div>
      )}
    </>
  );
}
