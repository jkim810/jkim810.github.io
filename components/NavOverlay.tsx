'use client';

import Link from 'next/link';

const NAV_LINKS = [
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Publications', href: '/#publications', id: 'publications' },
  { label: 'Projects', href: '/#projects', id: 'projects' },
  { label: 'News', href: '/#news', id: 'news' },
  // TODO: re-add Blog and Talks once content is ready
  { label: 'Tools', href: '/#tools', id: 'tools' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
];

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

export function NavOverlay({ isOpen, onClose, activeSection }: NavOverlayProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white flex flex-col px-6 py-8"
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="self-end text-gray-500 hover:text-gray-900 text-xl mb-8"
      >
        ✕
      </button>

      {/* Nav links */}
      <nav className="flex flex-col gap-4">
        {NAV_LINKS.map(({ label, href, id }) => {
          const isActive = activeSection === id;
          return (
            <Link
              key={id}
              href={href}
              onClick={onClose}
              className={`text-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#2563eb] ${
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
