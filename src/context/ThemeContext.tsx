import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface ThemeConfig {
  id: string;
  name: string;
  primary: string;
  light: string;
  glow: string;
  subtle: string;
  subtle2: string;
  subtle25: string;
  subtle3: string;
  subtle35: string;
  subtle4: string;
  subtle45: string;
  borderSubtle: string;
  border: string;
  borderMedium: string;
  borderStrong: string;
  icon: string;
  description: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'purple',
    name: 'Electric Purple',
    primary: '#9D6BEE',
    light: '#A87BF5',
    glow: 'rgba(157, 107, 238, 0.38)',
    subtle: 'rgba(157, 107, 238, 0.12)',
    subtle2: 'rgba(168, 123, 245, 0.06)',
    subtle25: 'rgba(157, 107, 238, 0.16)',
    subtle3: 'rgba(157, 107, 238, 0.20)',
    subtle35: 'rgba(157, 107, 238, 0.25)',
    subtle4: 'rgba(157, 107, 238, 0.30)',
    subtle45: 'rgba(157, 107, 238, 0.35)',
    borderSubtle: 'rgba(157, 107, 238, 0.20)',
    border: 'rgba(157, 107, 238, 0.25)',
    borderMedium: 'rgba(157, 107, 238, 0.30)',
    borderStrong: 'rgba(157, 107, 238, 0.45)',
    icon: '🟣',
    description: 'Signature Dennis Snellenberg lavender violet'
  },
  {
    id: 'blue',
    name: 'Cyber Sky Blue',
    primary: '#00D2FF',
    light: '#38BDF8',
    glow: 'rgba(0, 210, 255, 0.38)',
    subtle: 'rgba(0, 210, 255, 0.12)',
    subtle2: 'rgba(56, 189, 248, 0.06)',
    subtle25: 'rgba(0, 210, 255, 0.16)',
    subtle3: 'rgba(0, 210, 255, 0.20)',
    subtle35: 'rgba(0, 210, 255, 0.25)',
    subtle4: 'rgba(0, 210, 255, 0.30)',
    subtle45: 'rgba(0, 210, 255, 0.35)',
    borderSubtle: 'rgba(0, 210, 255, 0.20)',
    border: 'rgba(0, 210, 255, 0.25)',
    borderMedium: 'rgba(0, 210, 255, 0.30)',
    borderStrong: 'rgba(0, 210, 255, 0.45)',
    icon: '🌐',
    description: 'High-frequency cyber sky cyan'
  },
  {
    id: 'yellow',
    name: 'Neon Amber',
    primary: '#FFD000',
    light: '#FDE047',
    glow: 'rgba(255, 208, 0, 0.38)',
    subtle: 'rgba(255, 208, 0, 0.13)',
    subtle2: 'rgba(253, 224, 71, 0.06)',
    subtle25: 'rgba(255, 208, 0, 0.16)',
    subtle3: 'rgba(255, 208, 0, 0.20)',
    subtle35: 'rgba(255, 208, 0, 0.25)',
    subtle4: 'rgba(255, 208, 0, 0.30)',
    subtle45: 'rgba(255, 208, 0, 0.35)',
    borderSubtle: 'rgba(255, 208, 0, 0.20)',
    border: 'rgba(255, 208, 0, 0.25)',
    borderMedium: 'rgba(255, 208, 0, 0.30)',
    borderStrong: 'rgba(255, 208, 0, 0.45)',
    icon: '⚡',
    description: 'Electric radiant golden amber'
  },
  {
    id: 'emerald',
    name: 'Matrix Mint',
    primary: '#00F0A0',
    light: '#34D399',
    glow: 'rgba(0, 240, 160, 0.38)',
    subtle: 'rgba(0, 240, 160, 0.12)',
    subtle2: 'rgba(52, 211, 153, 0.06)',
    subtle25: 'rgba(0, 240, 160, 0.16)',
    subtle3: 'rgba(0, 240, 160, 0.20)',
    subtle35: 'rgba(0, 240, 160, 0.25)',
    subtle4: 'rgba(0, 240, 160, 0.30)',
    subtle45: 'rgba(0, 240, 160, 0.35)',
    borderSubtle: 'rgba(0, 240, 160, 0.20)',
    border: 'rgba(0, 240, 160, 0.25)',
    borderMedium: 'rgba(0, 240, 160, 0.30)',
    borderStrong: 'rgba(0, 240, 160, 0.45)',
    icon: '🟢',
    description: 'Hyper-vibrant emerald neon mint'
  },
  {
    id: 'coral',
    name: 'Sunset Coral',
    primary: '#FF6B4A',
    light: '#FFA07A',
    glow: 'rgba(255, 107, 74, 0.38)',
    subtle: 'rgba(255, 107, 74, 0.12)',
    subtle2: 'rgba(255, 160, 122, 0.06)',
    subtle25: 'rgba(255, 107, 74, 0.16)',
    subtle3: 'rgba(255, 107, 74, 0.20)',
    subtle35: 'rgba(255, 107, 74, 0.25)',
    subtle4: 'rgba(255, 107, 74, 0.30)',
    subtle45: 'rgba(255, 107, 74, 0.35)',
    borderSubtle: 'rgba(255, 107, 74, 0.20)',
    border: 'rgba(255, 107, 74, 0.25)',
    borderMedium: 'rgba(255, 107, 74, 0.30)',
    borderStrong: 'rgba(255, 107, 74, 0.45)',
    icon: '🔥',
    description: 'Radiant sunset flame coral'
  },
  {
    id: 'pink',
    name: 'Hot Rose',
    primary: '#FF3385',
    light: '#FB7185',
    glow: 'rgba(255, 51, 133, 0.38)',
    subtle: 'rgba(255, 51, 133, 0.12)',
    subtle2: 'rgba(251, 113, 133, 0.06)',
    subtle25: 'rgba(255, 51, 133, 0.16)',
    subtle3: 'rgba(255, 51, 133, 0.20)',
    subtle35: 'rgba(255, 51, 133, 0.25)',
    subtle4: 'rgba(255, 51, 133, 0.30)',
    subtle45: 'rgba(255, 51, 133, 0.35)',
    borderSubtle: 'rgba(255, 51, 133, 0.20)',
    border: 'rgba(255, 51, 133, 0.25)',
    borderMedium: 'rgba(255, 51, 133, 0.30)',
    borderStrong: 'rgba(255, 51, 133, 0.45)',
    icon: '🌸',
    description: 'Synthwave neon magenta rose'
  },
  {
    id: 'lime',
    name: 'Cyber Volt',
    primary: '#B8FF00',
    light: '#D9FF43',
    glow: 'rgba(184, 255, 0, 0.35)',
    subtle: 'rgba(184, 255, 0, 0.12)',
    subtle2: 'rgba(217, 255, 67, 0.06)',
    subtle25: 'rgba(184, 255, 0, 0.16)',
    subtle3: 'rgba(184, 255, 0, 0.20)',
    subtle35: 'rgba(184, 255, 0, 0.25)',
    subtle4: 'rgba(184, 255, 0, 0.30)',
    subtle45: 'rgba(184, 255, 0, 0.35)',
    borderSubtle: 'rgba(184, 255, 0, 0.20)',
    border: 'rgba(184, 255, 0, 0.25)',
    borderMedium: 'rgba(184, 255, 0, 0.30)',
    borderStrong: 'rgba(184, 255, 0, 0.45)',
    icon: '⚡',
    description: 'Electrifying acidic volt lime'
  }
];

interface ThemeContextType {
  currentTheme: ThemeConfig;
  cycleTheme: (e?: React.MouseEvent | MouseEvent | { clientX: number; clientY: number }) => void;
  setThemeById: (id: string) => void;
  themes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'parth_portfolio_accent_theme';

const applyThemeToDOM = (theme: ThemeConfig) => {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme.id);

  // Set all accent CSS variables
  root.style.setProperty('--accent-primary', theme.primary);
  root.style.setProperty('--accent-light', theme.light);
  root.style.setProperty('--accent-glow', theme.glow);
  root.style.setProperty('--accent-subtle', theme.subtle);
  root.style.setProperty('--accent-subtle-2', theme.subtle2);
  root.style.setProperty('--accent-subtle-25', theme.subtle25);
  root.style.setProperty('--accent-subtle-3', theme.subtle3);
  root.style.setProperty('--accent-subtle-35', theme.subtle35);
  root.style.setProperty('--accent-subtle-4', theme.subtle4);
  root.style.setProperty('--accent-subtle-45', theme.subtle45);
  root.style.setProperty('--accent-border-subtle', theme.borderSubtle);
  root.style.setProperty('--accent-border', theme.border);
  root.style.setProperty('--accent-border-medium', theme.borderMedium);
  root.style.setProperty('--accent-border-strong', theme.borderStrong);
};

const triggerTapRipple = (x: number, y: number, color: string, glow: string) => {
  const ripple = document.createElement('div');
  ripple.className = 'theme-ripple';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.boxShadow = `0 0 40px ${glow}`;
  ripple.style.borderColor = color;
  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 700);
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const found = THEMES.find((t) => t.id === saved);
        if (found) return found;
      }
    } catch {
      // Fallback
    }
    return THEMES[0];
  });

  useEffect(() => {
    applyThemeToDOM(currentTheme);
  }, [currentTheme]);

  const cycleTheme = useCallback((e?: React.MouseEvent | MouseEvent | { clientX: number; clientY: number }) => {
    setCurrentTheme((prev) => {
      const currentIndex = THEMES.findIndex((t) => t.id === prev.id);
      const nextIndex = (currentIndex + 1) % THEMES.length;
      const nextTheme = THEMES[nextIndex];

      try {
        localStorage.setItem(STORAGE_KEY, nextTheme.id);
      } catch {
        // localStorage may be disabled
      }

      applyThemeToDOM(nextTheme);

      if (e && typeof e.clientX === 'number' && typeof e.clientY === 'number') {
        triggerTapRipple(e.clientX, e.clientY, nextTheme.primary, nextTheme.glow);
      }

      return nextTheme;
    });
  }, []);

  const setThemeById = useCallback((id: string) => {
    const target = THEMES.find((t) => t.id === id);
    if (!target) return;

    setCurrentTheme(target);
    try {
      localStorage.setItem(STORAGE_KEY, target.id);
    } catch {
      // ignore
    }
    applyThemeToDOM(target);
  }, []);

  // Global Tap Listener: Tap anywhere on website (excluding interactive inputs/buttons/links) to cycle color
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore if clicking on interactive controls
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-no-cycle], .no-theme-cycle, [data-interactive="true"]'
      );
      if (interactive) {
        return;
      }

      // Ignore if user is selecting/highlighting text
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0) {
        return;
      }

      cycleTheme(e);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, [cycleTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, cycleTheme, setThemeById, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
