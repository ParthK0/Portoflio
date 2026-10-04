import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface ThemeConfig {
  id: string;
  name: string;
  primary: string;
  light: string;
  subtle: string;
  subtle2: string;
  subtle25: string;
  subtle3: string;
  borderSubtle: string;
  border: string;
  borderMedium: string;
  borderStrong: string;
  dotColor: string;
  description: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'purple',
    name: 'Purple',
    primary: '#9D6BEE',
    light: '#A87BF5',
    subtle: 'rgba(157, 107, 238, 0.12)',
    subtle2: 'rgba(157, 107, 238, 0.20)',
    subtle25: 'rgba(157, 107, 238, 0.25)',
    subtle3: 'rgba(157, 107, 238, 0.30)',
    borderSubtle: 'rgba(157, 107, 238, 0.20)',
    border: 'rgba(157, 107, 238, 0.35)',
    borderMedium: 'rgba(157, 107, 238, 0.50)',
    borderStrong: '#9D6BEE',
    dotColor: '#9D6BEE',
    description: 'Signature solid purple'
  },
  {
    id: 'lightblue',
    name: 'Light Blue',
    primary: '#38BDF8',
    light: '#7DD3FC',
    subtle: 'rgba(56, 189, 248, 0.12)',
    subtle2: 'rgba(56, 189, 248, 0.20)',
    subtle25: 'rgba(56, 189, 248, 0.25)',
    subtle3: 'rgba(56, 189, 248, 0.30)',
    borderSubtle: 'rgba(56, 189, 248, 0.20)',
    border: 'rgba(56, 189, 248, 0.35)',
    borderMedium: 'rgba(56, 189, 248, 0.50)',
    borderStrong: '#38BDF8',
    dotColor: '#38BDF8',
    description: 'Crisp solid sky light blue'
  },
  {
    id: 'yellow',
    name: 'Yellow',
    primary: '#EAB308',
    light: '#FDE047',
    subtle: 'rgba(234, 179, 8, 0.12)',
    subtle2: 'rgba(234, 179, 8, 0.20)',
    subtle25: 'rgba(234, 179, 8, 0.25)',
    subtle3: 'rgba(234, 179, 8, 0.30)',
    borderSubtle: 'rgba(234, 179, 8, 0.20)',
    border: 'rgba(234, 179, 8, 0.35)',
    borderMedium: 'rgba(234, 179, 8, 0.50)',
    borderStrong: '#EAB308',
    dotColor: '#EAB308',
    description: 'Warm solid amber yellow'
  },
  {
    id: 'emerald',
    name: 'Emerald Green',
    primary: '#10B981',
    light: '#34D399',
    subtle: 'rgba(16, 185, 129, 0.12)',
    subtle2: 'rgba(16, 185, 129, 0.20)',
    subtle25: 'rgba(16, 185, 129, 0.25)',
    subtle3: 'rgba(16, 185, 129, 0.30)',
    borderSubtle: 'rgba(16, 185, 129, 0.20)',
    border: 'rgba(16, 185, 129, 0.35)',
    borderMedium: 'rgba(16, 185, 129, 0.50)',
    borderStrong: '#10B981',
    dotColor: '#10B981',
    description: 'Clean solid emerald green'
  },
  {
    id: 'coral',
    name: 'Warm Coral',
    primary: '#F97316',
    light: '#FB923C',
    subtle: 'rgba(249, 115, 22, 0.12)',
    subtle2: 'rgba(249, 115, 22, 0.20)',
    subtle25: 'rgba(249, 115, 22, 0.25)',
    subtle3: 'rgba(249, 115, 22, 0.30)',
    borderSubtle: 'rgba(249, 115, 22, 0.20)',
    border: 'rgba(249, 115, 22, 0.35)',
    borderMedium: 'rgba(249, 115, 22, 0.50)',
    borderStrong: '#F97316',
    dotColor: '#F97316',
    description: 'Solid terracotta warm coral'
  },
  {
    id: 'rose',
    name: 'Rose Pink',
    primary: '#F43F5E',
    light: '#FB7185',
    subtle: 'rgba(244, 63, 94, 0.12)',
    subtle2: 'rgba(244, 63, 94, 0.20)',
    subtle25: 'rgba(244, 63, 94, 0.25)',
    subtle3: 'rgba(244, 63, 94, 0.30)',
    borderSubtle: 'rgba(244, 63, 94, 0.20)',
    border: 'rgba(244, 63, 94, 0.35)',
    borderMedium: 'rgba(244, 63, 94, 0.50)',
    borderStrong: '#F43F5E',
    dotColor: '#F43F5E',
    description: 'Solid refined rose'
  },
  {
    id: 'indigo',
    name: 'Indigo',
    primary: '#6366F1',
    light: '#818CF8',
    subtle: 'rgba(99, 102, 241, 0.12)',
    subtle2: 'rgba(99, 102, 241, 0.20)',
    subtle25: 'rgba(99, 102, 241, 0.25)',
    subtle3: 'rgba(99, 102, 241, 0.30)',
    borderSubtle: 'rgba(99, 102, 241, 0.20)',
    border: 'rgba(99, 102, 241, 0.35)',
    borderMedium: 'rgba(99, 102, 241, 0.50)',
    borderStrong: '#6366F1',
    dotColor: '#6366F1',
    description: 'Solid modern indigo'
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
  root.style.setProperty('--accent-subtle', theme.subtle);
  root.style.setProperty('--accent-subtle-2', theme.subtle2);
  root.style.setProperty('--accent-subtle-25', theme.subtle25);
  root.style.setProperty('--accent-subtle-3', theme.subtle3);
  root.style.setProperty('--accent-border-subtle', theme.borderSubtle);
  root.style.setProperty('--accent-border', theme.border);
  root.style.setProperty('--accent-border-medium', theme.borderMedium);
  root.style.setProperty('--accent-border-strong', theme.borderStrong);
};

// Subtle, clean, non-neon flat circular wave at tap location
const triggerTapRipple = (x: number, y: number, color: string) => {
  const ripple = document.createElement('div');
  ripple.className = 'tap-color-ripple';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.borderColor = color;
  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 550);
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
        triggerTapRipple(e.clientX, e.clientY, nextTheme.primary);
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

  // Global Click Listener: Click anywhere on background to cycle solid color silently
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore interactive controls so buttons/links still perform their own actions
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-no-cycle], .no-theme-cycle, [data-interactive="true"]'
      );
      if (interactive) {
        return;
      }

      // Ignore text selection so user can highlight text without cycling
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
