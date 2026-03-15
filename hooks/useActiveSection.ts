'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SECTION_IDS = ['about', 'publications', 'projects', 'news', 'tools', 'contact'];

export function useActiveSection(): string {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    // TODO: re-enable when Blog is added back to nav
    // if (pathname.startsWith('/blog')) { setActiveSection('blog'); return; }

    setActiveSection('about');

    const sectionMap = new Map<Element, string>();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length === 0) return;
      const topmost = visible.reduce((prev, curr) =>
        prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
      );
      const id = sectionMap.get(topmost.target);
      if (id) setActiveSection(id);
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0,
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionMap.set(el, id);
        observer.observe(el);
      }
    });

    // Fallback: when near the bottom of the page, activate the section whose
    // top is closest to (but still above) the middle of the viewport.
    const handleScroll = () => {
      const nearBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      if (!nearBottom) return;

      const mid = window.innerHeight / 2;
      let best: string | null = null;
      let bestDist = Infinity;

      sectionMap.forEach((id, el) => {
        const top = el.getBoundingClientRect().top;
        if (top <= mid) {
          const dist = mid - top;
          if (dist < bestDist) {
            bestDist = dist;
            best = id;
          }
        }
      });

      if (best) setActiveSection(best);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return activeSection;
}
