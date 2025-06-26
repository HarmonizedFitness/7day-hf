
import React, { useEffect } from 'react';
import { useWorkoutTheme } from '@/hooks/useWorkoutTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useWorkoutTheme();

  useEffect(() => {
    // Set CSS custom properties for the current theme
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-accent', theme.accent);
    root.style.setProperty('--theme-text', theme.text);
    root.style.setProperty('--theme-background', theme.background);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
