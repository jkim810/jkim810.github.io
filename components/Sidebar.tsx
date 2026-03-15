import Image from 'next/image';
import Link from 'next/link';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  OrcidIcon,
  GoogleScholarIcon,
} from '@/components/icons/SocialIcons';

const NAV_LINKS = [
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Publications', href: '/#publications', id: 'publications' },
  { label: 'Projects', href: '/#projects', id: 'projects' },
  { label: 'News', href: '/#news', id: 'news' },
  { label: 'Blog', href: '/blog', id: 'blog' },
  { label: 'Tools', href: '/#tools', id: 'tools' },
  { label: 'Talks', href: '/#talks', id: 'talks' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
];

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/jkim810',
    label: 'GitHub',
    Icon: GitHubIcon,
  },
  {
    href: 'https://linkedin.com/in/jkim810',
    label: 'LinkedIn',
    Icon: LinkedInIcon,
  },
  {
    href: 'https://twitter.com/jkim810',
    label: 'Twitter',
    Icon: TwitterIcon,
  },
  {
    href: 'https://orcid.org/0000-0000-0000-0000',
    label: 'ORCID',
    Icon: OrcidIcon,
  },
  {
    href: 'https://scholar.google.com/citations?user=jkim810',
    label: 'Google Scholar',
    Icon: GoogleScholarIcon,
  },
];

interface SidebarProps {
  activeSection?: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="w-[240px] h-screen fixed left-0 top-0 border-r border-gray-100 flex flex-col px-6 py-8">
      {/* Profile */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <Image
          src="/images/profile.jpg"
          alt="Junbum Kim"
          width={80}
          height={80}
          className="rounded-full object-cover"
          priority
        />
        <div className="text-center">
          <p className="font-semibold text-sm text-gray-900">Junbum Kim</p>
          <p className="text-xs text-gray-500 mt-0.5">Postdoctoral Associate</p>
          <p className="text-xs text-gray-500">Weill Cornell Medicine</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1">
        {NAV_LINKS.map(({ label, href, id }) => {
          const isActive = activeSection === id;
          return (
            <Link
              key={id}
              href={href}
              className={`text-sm px-2 py-1.5 rounded transition-colors duration-150 ${
                isActive
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              style={isActive ? { color: '#2563eb' } : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Social icons */}
      <div className="flex flex-row gap-3 mt-6 flex-wrap">
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-gray-700 transition-colors duration-150"
          >
            <Icon />
          </a>
        ))}
      </div>
    </aside>
  );
}
