'use client';

import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<Theme>('dark');

  const applyTheme = useCallback((theme: string) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleThemeChange = useCallback((newTheme: Theme) => {
    setActiveTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }, [applyTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      handleThemeChange(savedTheme);
    } else {
      handleThemeChange('dark');
    }
  }, [handleThemeChange]);

  const value = useMemo(() => ({
    theme: activeTheme,
    setTheme: handleThemeChange,
  }), [activeTheme, handleThemeChange]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
