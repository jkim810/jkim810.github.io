'use client';

import { useState } from 'react';
import { MobileNav } from '@/components/MobileNav';
import { NavOverlay } from '@/components/NavOverlay';

interface NavProviderProps {
  activeSection?: string;
}

export function NavProvider({ activeSection }: NavProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileNav onOpenMenu={() => setIsOpen(true)} />
      <NavOverlay
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
