"use client";

import { useEffect, useState } from "react";

/** Tracks which document section is currently being read. */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = ids.join("|");

  useEffect(() => {
    const list = key.split("|").filter(Boolean);
    if (list.length === 0) return;

    const visibility = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting);
        }
        const current = list.find((id) => visibility.get(id));
        setActiveId(current ?? null);
      },
      { rootMargin: "-140px 0px -55% 0px", threshold: 0 },
    );

    for (const id of list) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
