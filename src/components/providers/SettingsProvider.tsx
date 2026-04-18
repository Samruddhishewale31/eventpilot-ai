"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const settings = useStore((state) => state.settings);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Handle High Contrast
    if (settings.highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    // Handle Large Text
    if (settings.largeText) {
      root.classList.add("text-lg");
      // Optionally more granular if needed, but text-lg is a good base bump
    } else {
      root.classList.remove("text-lg");
    }

    // Handle Reduced Motion is usually handled via CSS media queries 
    // but we can add a class if we want to force it
  }, [settings]);

  return <>{children}</>;
}
