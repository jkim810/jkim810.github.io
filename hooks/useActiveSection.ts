'use client';

import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'publications', 'projects', 'news', 'blog', 'tools', 'talks', 'contact'];

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    // If we're on the blog page, return 'blog'
    if (window.location.pathname.startsWith('/blog')) {
      setActiveSection('blog');
      return;
    }

    const observers: IntersectionObserver[] = [];

    const sectionMap = new Map<Element, string>();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length === 0) return;
      // Pick the one closest to top
      const topmost = visible.reduce((prev, curr) =>
        prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
      );
      const id = sectionMap.get(topmost.target);
      if (id) setActiveSection(id);
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionMap.set(el, id);
        observer.observe(el);
      }
    });

    observers.push(observer);

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return activeSection;
}
