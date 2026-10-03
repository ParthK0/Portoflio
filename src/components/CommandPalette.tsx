import React, { useState, useEffect, useRef } from 'react';
import { Search, Command, ArrowRight, Palette, Volume2, VolumeX, Mail, Github, Linkedin, Check, X, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/audio';

interface ActionItem {
  id: string;
  category: string;
  label: string;
  detail?: string;
  icon: React.ReactNode;
  perform: () => void;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [soundActive, setSoundActive] = useState(sound.isEnabled());
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { currentTheme, cycleTheme, setThemeById, themes } = useTheme();

  // Keyboard shortcut listener: Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => {
          sound.playBlip(640, 0.04);
          return !prev;
        });
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('parthkhowal@gmail.com');
    setCopiedEmail(true);
    sound.playClick(900, 0.05);
    setTimeout(() => {
      setCopiedEmail(false);
      setIsOpen(false);
    }, 1200);
  };

  const toggleSound = () => {
    const next = sound.toggle();
    setSoundActive(next);
  };

  const allItems: ActionItem[] = [
    // Navigation
    {
      id: 'nav-hero',
      category: 'Navigation',
      label: 'Home // Hero Section',
      detail: 'Orbit system, portrait parallax & 3D stack',
      icon: <ArrowRight className="w-4 h-4" />,
      perform: () => scrollTo('hero'),
    },
    {
      id: 'nav-about',
      category: 'Navigation',
      label: 'About // Pillars & Philosophy',
      detail: 'Core engineering principles',
      icon: <ArrowRight className="w-4 h-4" />,
      perform: () => scrollTo('about'),
    },
    {
      id: 'nav-stack',
      category: 'Navigation',
      label: 'Tech Stack // 3D Interactive Cylinder',
      detail: 'Core technologies & rotating 3D orbit',
      icon: <ArrowRight className="w-4 h-4" />,
      perform: () => scrollTo('orbit'),
    },
    {
      id: 'nav-exp',
      category: 'Navigation',
      label: 'Experience // Career Timeline',
      detail: 'Internships, milestones & roles',
      icon: <ArrowRight className="w-4 h-4" />,
      perform: () => scrollTo('experience'),
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      label: 'Featured Projects // Deep Dives',
      detail: 'PROBE, ReconCraft, Shree Krishna, AetherFace',
      icon: <ArrowRight className="w-4 h-4" />,
      perform: () => scrollTo('projects'),
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      label: 'Contact // Transmission Channel',
      detail: 'Direct message, socials & availability',
      icon: <ArrowRight className="w-4 h-4" />,
      perform: () => scrollTo('contact'),
    },
    // Theme Color Swatches
    ...themes.map((t) => ({
      id: `theme-${t.id}`,
      category: 'Theme Palette',
      label: `Switch Accent: ${t.name}`,
      detail: t.description,
      icon: (
        <span
          className="w-3 h-3 rounded-full border border-white/20"
          style={{ backgroundColor: t.primary }}
        />
      ),
      perform: () => {
        setThemeById(t.id);
        sound.playWarp();
        setIsOpen(false);
      },
    })),
    // Quick Actions
    {
      id: 'act-replay-boot',
      category: 'Actions',
      label: 'Replay Boot Sequence // Loading Screen',
      detail: 'Experience the 3D orbital startup animation',
      icon: <Terminal className="w-4 h-4" />,
      perform: () => {
        setIsOpen(false);
        window.dispatchEvent(new CustomEvent('replay-boot-sequence'));
      },
    },
    {
      id: 'act-cycle-theme',
      category: 'Actions',
      label: 'Cycle Accent Color',
      detail: `Current: ${currentTheme.name}`,
      icon: <Palette className="w-4 h-4" />,
      perform: () => {
        cycleTheme();
        sound.playWarp();
      },
    },
    {
      id: 'act-toggle-sound',
      category: 'Actions',
      label: soundActive ? 'Mute Procedural Audio' : 'Enable Procedural Audio',
      detail: soundActive ? 'Web Audio micro-clicks enabled' : 'Currently muted',
      icon: soundActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />,
      perform: () => {
        toggleSound();
      },
    },
    {
      id: 'act-copy-email',
      category: 'Actions',
      label: copiedEmail ? 'Copied to Clipboard!' : 'Copy Email Address',
      detail: 'parthkhowal@gmail.com',
      icon: copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />,
      perform: copyEmail,
    },
    {
      id: 'act-github',
      category: 'External',
      label: 'Open GitHub Profile',
      detail: 'github.com/ParthK0',
      icon: <Github className="w-4 h-4" />,
      perform: () => {
        window.open('https://github.com/ParthK0', '_blank');
        setIsOpen(false);
      },
    },
    {
      id: 'act-linkedin',
      category: 'External',
      label: 'Open LinkedIn Profile',
      detail: 'linkedin.com/in/parth-khowal-a9299428b',
      icon: <Linkedin className="w-4 h-4" />,
      perform: () => {
        window.open('https://www.linkedin.com/in/parth-khowal-a9299428b', '_blank');
        setIsOpen(false);
      },
    },
  ];

  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          (item.detail && item.detail.toLowerCase().includes(query.toLowerCase())) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const next = (prev + 1) % filteredItems.length;
        sound.playClick(720, 0.015);
        return next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => {
        const next = (prev - 1 + filteredItems.length) % filteredItems.length;
        sound.playClick(720, 0.015);
        return next;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const current = filteredItems[selectedIndex];
      if (current) {
        sound.playClick(900, 0.03);
        current.perform();
      }
    }
  };

  return (
    <>
      {/* Floating Trigger Pill on Desktop / Mobile bottom right */}
      <button
        onClick={() => {
          sound.playBlip(600, 0.03);
          setIsOpen(true);
        }}
        aria-label="Open Command Palette (Cmd+K)"
        className="fixed bottom-6 left-6 z-40 px-3.5 py-2 rounded-full bg-[#121212]/90 hover:bg-[#181818] border border-[#2a2a2a] hover:border-[var(--accent-primary)] text-xs font-mono text-[#AAAAAA] hover:text-[#FFFFFF] flex items-center gap-2 shadow-2xl backdrop-blur-md transition-all duration-300 group cursor-pointer"
        style={{
          boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
        }}
      >
        <Command className="w-3.5 h-3.5 text-[var(--accent-primary)] group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-bold">CMD + K</span>
        <span className="sm:hidden font-bold">MENU</span>
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-[#000000]/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 select-none"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-[#141414] border border-[#2c2c2c] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderColor: currentTheme.borderSubtle,
              boxShadow: `0 0 50px rgba(0,0,0,0.8), 0 0 30px ${currentTheme.primary}15`,
            }}
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#222222] gap-3">
              <Search className="w-4 h-4 text-[#888888]" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or jump to section..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-sm font-mono text-[#EEECE6] placeholder-[#666666] outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#666666] hover:text-[#EEEEEE] rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Items List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1 font-mono text-xs">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-[#666666]">No matching commands found.</div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        sound.playClick(880, 0.03);
                        item.perform();
                      }}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#202020] text-[#FFFFFF]'
                          : 'text-[#AAAAAA] hover:bg-[#181818]'
                      }`}
                      style={{
                        borderLeft: isSelected ? `3px solid ${currentTheme.primary}` : '3px solid transparent',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className={isSelected ? 'text-[#FFFFFF]' : 'text-[#777777]'}>
                          {item.icon}
                        </span>
                        <div>
                          <div className="font-medium text-[#EEECE6]">{item.label}</div>
                          {item.detail && (
                            <div className="text-[10px] text-[#777777]">{item.detail}</div>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#101010] text-[#666666] border border-[#222222]">
                        {item.category}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Hint Bar */}
            <div className="px-4 py-2.5 bg-[#0e0e0e] border-t border-[#1e1e1e] flex items-center justify-between text-[11px] font-mono text-[#666666]">
              <div className="flex items-center gap-3">
                <span>↑↓ to navigate</span>
                <span>↵ to select</span>
                <span>esc to close</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: currentTheme.primary }}
                />
                <span className="text-[#888888]">{currentTheme.name}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
