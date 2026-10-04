import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, ChevronRight, Check } from 'lucide-react';

export const ThemeSwitcher: React.FC = () => {
  const { currentTheme, cycleTheme, setThemeById, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      aria-label="Color Palette Controls"
      data-no-cycle="true"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto select-none no-theme-cycle"
    >
      {/* Expanded Palette Tray */}
      {isOpen && (
        <div
          data-no-cycle="true"
          className="p-3.5 rounded-2xl bg-[#161616] border border-[#262626] shadow-2xl shadow-black/80 flex flex-col gap-2 min-w-[230px]"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#262626] px-1 text-xs font-mono text-[#A0A0A0]">
            <span className="font-semibold uppercase tracking-wider text-[#FFFFFF]">Solid Accents</span>
            <span className="text-[11px] text-[#707070]">{themes.length} colors</span>
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
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#1F1F1F] text-[#FFFFFF] border-[var(--accent-primary)]'
                      : 'bg-[#181818] text-[#A0A0A0] border-transparent hover:text-[#FFFFFF] hover:bg-[#202020]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block shrink-0 shadow-sm"
                      style={{
                        backgroundColor: theme.primary,
                      }}
                    />
                    <span className="font-medium text-xs">
                      {idx + 1}. {theme.name}
                    </span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Pill */}
      <div
        data-no-cycle="true"
        className="flex items-center rounded-full bg-[#161616]/95 backdrop-blur-md border border-[#262626] hover:border-[var(--accent-primary)] transition-all p-1 shadow-xl shadow-black/60 group"
      >
        {/* Cycle Theme Button */}
        <button
          data-no-cycle="true"
          onClick={(e) => {
            e.stopPropagation();
            cycleTheme(e);
          }}
          className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#E0E0E0] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          title="Click to cycle next solid color"
        >
          {/* Solid Color Dot */}
          <span
            className="w-2.5 h-2.5 rounded-full inline-block shrink-0 transition-transform duration-300 group-hover:scale-125"
            style={{
              backgroundColor: currentTheme.primary,
            }}
          />

          <span className="font-semibold tracking-wide text-xs">
            {currentTheme.name}
          </span>

          <ChevronRight className="w-3.5 h-3.5 text-[#707070] group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Expand Palette Button */}
        <button
          data-no-cycle="true"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className={`p-2 rounded-full transition-all cursor-pointer ${
            isOpen
              ? 'bg-[var(--accent-primary)] text-[#111111]'
              : 'text-[#A0A0A0] hover:text-[#FFFFFF] hover:bg-[#202020]'
          }`}
          title={isOpen ? 'Close solid palette' : 'View all 7 solid colors'}
          aria-label="Color Palette Menu"
        >
          <Palette className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
