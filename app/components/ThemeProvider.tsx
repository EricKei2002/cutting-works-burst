"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { scheduleIdle } from "@/lib/utils";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isReady: boolean;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "burst-theme";

function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const rootTheme = document.documentElement.dataset.theme;
  if (rootTheme === "light" || rootTheme === "dark") {
    return rootTheme;
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
  root.style.setProperty("color-scheme", theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => resolveInitialTheme());
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    applyTheme(theme);
    if (isReady) {
      scheduleIdle(() => {
        window.localStorage.setItem(STORAGE_KEY, theme);
      });
    }
  }, [theme, isReady]);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mediaQuery: MediaQueryList | null = null;
    let handleMediaChange: ((event: MediaQueryListEvent) => void) | undefined;
    let handleStorage: ((event: StorageEvent) => void) | undefined;

    const setup = () => {
      mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      handleMediaChange = (event: MediaQueryListEvent) => {
        const storedTheme = window.localStorage.getItem(STORAGE_KEY);
        if (storedTheme !== "light" && storedTheme !== "dark") {
          setThemeState(event.matches ? "dark" : "light");
        }
      };

      mediaQuery.addEventListener("change", handleMediaChange);

      handleStorage = (event: StorageEvent) => {
        if (event.key === STORAGE_KEY && (event.newValue === "light" || event.newValue === "dark")) {
          setThemeState(event.newValue);
        }
      };

      window.addEventListener("storage", handleStorage);
    };

    const cancelIdleSetup = scheduleIdle(setup);

    return () => {
      cancelIdleSetup?.();
      if (mediaQuery && handleMediaChange) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      }
      if (handleStorage) {
        window.removeEventListener("storage", handleStorage);
      }
    };
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isReady,
    }),
    [theme, setTheme, toggleTheme, isReady],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
