'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import { Sidebar } from '@/components/Sidebar';
import { NavProvider } from '@/components/NavProvider';

export function ActiveNavWrapper() {
  const activeSection = useActiveSection();

  return (
    <>
      {/* Desktop sidebar — hidden on mobile/tablet */}
      <div className="hidden lg:block">
        <Sidebar activeSection={activeSection} />
      </div>
      {/* Mobile nav (sticky top bar + overlay) */}
      <NavProvider activeSection={activeSection} />
    </>
  );
}
