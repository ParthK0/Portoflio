import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, ChevronRight, Check } from 'lucide-react';

export const ThemeSwitcher: React.FC = () => {
  const { currentTheme, cycleTheme, setThemeById, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showTip, setShowTip] = useState(true);

  return (
    <div
      data-no-cycle="true"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto select-none no-theme-cycle"
    >
      {/* Floating subtle hint popup */}
      {showTip && (
        <div
          data-no-cycle="true"
          className="flex items-center gap-2 px-3 py-1.5 bg-[#000000] border border-[#333333] text-[10px] font-mono text-[#AAAAAA]"
        >
          <span className="w-1.5 h-1.5 bg-[var(--accent-primary)] inline-block animate-pulse" />
          <span>[CLICK ANYWHERE TO CYCLE ACCENT COLOR]</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTip(false);
            }}
            className="text-[#666666] hover:text-[#FFFFFF] text-xs px-1 cursor-pointer ml-1"
            aria-label="Dismiss hint"
          >
            ✕
          </button>
        </div>
      )}

      {/* Expanded Palette Tray */}
      {isOpen && (
        <div
          data-no-cycle="true"
          className="p-3 bg-[#000000] border border-[#333333] flex flex-col gap-2 min-w-[220px]"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#222222] px-1 text-[11px] font-mono text-[#888888]">
            <span className="uppercase tracking-wider font-bold">[ACCENT PALETTE]</span>
            <span className="text-[10px] text-[#555555]">{themes.length} CHANNELS</span>
          </div>

          <div className="flex flex-col gap-1">
            {themes.map((theme, idx) => {
              const isActive = theme.id === currentTheme.id;
              return (
                <button
                  key={theme.id}
                  data-no-cycle="true"
                  onClick={(e) => {
                    e.stopPropagation();
                    setThemeById(theme.id);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 text-xs font-mono transition-colors cursor-pointer border ${
                    isActive
                      ? 'bg-[#141414] text-[#FFFFFF] border-[var(--accent-primary)]'
                      : 'bg-[#000000] text-[#888888] border-transparent hover:text-[#FFFFFF] hover:bg-[#0a0a0a]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 inline-block shrink-0"
                      style={{
                        backgroundColor: theme.primary,
                      }}
                    />
                    <span className="font-medium text-[11px] uppercase">
                      0{idx + 1} // {theme.name}
                    </span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#1a1a1a] text-[9px] font-mono text-[#555555] text-center uppercase">
            CLICK BACKGROUND ANYTIME TO SHIFT
          </div>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <div
        data-no-cycle="true"
        className="flex items-center p-1 bg-[#000000] border border-[#262626] hover:border-[var(--accent-primary)] transition-colors group"
      >
        {/* Cycle Theme Button */}
        <button
          data-no-cycle="true"
          onClick={(e) => {
            e.stopPropagation();
            cycleTheme(e);
          }}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#0a0a0a] text-xs font-mono text-[#CCCCCC] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          title="Click to cycle next color theme"
        >
          {/* Square Color Token */}
          <span
            className="w-2.5 h-2.5 inline-block shrink-0"
            style={{
              backgroundColor: currentTheme.primary,
            }}
          />

          <span className="font-bold tracking-wider uppercase text-[11px]">
            [{currentTheme.name.split(' ')[0]}]
          </span>

          <ChevronRight className="w-3.5 h-3.5 text-[#666666] group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Expand Palette Button */}
        <button
          data-no-cycle="true"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className={`p-2 transition-colors cursor-pointer border-l border-[#222222] ${
            isOpen
              ? 'bg-[var(--accent-primary)] text-[#000000]'
              : 'text-[#888888] hover:text-[#FFFFFF] hover:bg-[#111111]'
          }`}
          title={isOpen ? 'Close color palette' : 'Open 7 color palette'}
          aria-label="Color Palette"
        >
          <Palette className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

