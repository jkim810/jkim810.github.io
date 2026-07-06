import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ActiveNavWrapper } from '@/components/ActiveNavWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jkim810.github.io'),
  title: {
    default: 'Junbum Kim — ML Engineer & Computational Biologist',
    template: '%s | Junbum Kim',
  },
  description:
    'Personal website of Junbum Kim, AIML Engineer on the AI for Science team at GSK and computational biologist. Research: spatial biology, ML, computational oncology.',
  openGraph: {
    title: 'Junbum Kim — ML Engineer & Computational Biologist',
    description: 'Spatial biology, ML, and computational oncology research.',
    images: [{ url: '/images/profile.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#2563eb] focus:border focus:border-[#2563eb] focus:rounded">Skip to content</a>
        <div className="flex min-h-screen">
          {/* ActiveNavWrapper handles sidebar (desktop) + mobile nav */}
          <ActiveNavWrapper />

          {/* Main content area */}
          <div className="flex flex-col flex-1 lg:ml-[240px]">
            <main id="main-content" className="flex-1 pt-14 lg:pt-0">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
