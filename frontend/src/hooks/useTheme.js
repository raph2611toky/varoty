import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
  }, []);

  const applyTheme = (dark) => {
    const root = document.documentElement;
    if (dark) {
      root.style.colorScheme = 'dark';
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.style.colorScheme = 'light';
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    setIsDark((prev) => {
      applyTheme(!prev);
      return !prev;
    });
  };

  return { isDark, toggleTheme };
};
