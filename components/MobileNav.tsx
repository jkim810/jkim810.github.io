'use client';

interface MobileNavProps {
  onOpenMenu: () => void;
}

export function MobileNav({ onOpenMenu }: MobileNavProps) {
  return (
    <header
      className="lg:hidden sticky top-0 z-40 h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6"
      aria-label="Mobile navigation"
    >
      <span className="font-semibold text-sm text-gray-900">Junbum Kim</span>
      <button
        onClick={onOpenMenu}
        aria-label="Open menu"
        className="text-gray-600 hover:text-gray-900 text-xl"
      >
        ☰
      </button>
    </header>
  );
}
