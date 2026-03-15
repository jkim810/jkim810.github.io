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
  title: 'Junbum Kim — Computational Biologist',
  description:
    'Postdoctoral Associate at Weill Cornell Medicine. Research in spatial biology, machine learning, and computational oncology.',
  openGraph: {
    title: 'Junbum Kim — Computational Biologist',
    description:
      'Postdoctoral Associate at Weill Cornell Medicine. Research in spatial biology, machine learning, and computational oncology.',
    images: [{ url: '/images/profile.jpg' }],
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
        <div className="flex min-h-screen">
          {/* ActiveNavWrapper handles sidebar (desktop) + mobile nav */}
          <ActiveNavWrapper />

          {/* Main content area */}
          <div className="flex flex-col flex-1 lg:ml-[240px]">
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
