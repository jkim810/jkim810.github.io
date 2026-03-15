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
  // TODO: re-add Blog once content is ready — { label: 'Blog', href: '/blog', id: 'blog' },
  { label: 'Tools', href: '/#tools', id: 'tools' },
  // TODO: re-add Talks once populated — { label: 'Talks', href: '/#talks', id: 'talks' },
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
    href: 'https://x.com/junbum_kim',
    label: 'X',
    Icon: TwitterIcon,
  },
  {
    href: 'https://orcid.org/0000-0001-7344-1593',
    label: 'ORCID',
    Icon: OrcidIcon,
  },
  {
    href: 'https://scholar.google.com/citations?user=gdjxtusAAAAJ&hl=en',
    label: 'Google Scholar',
    Icon: GoogleScholarIcon,
  },
];

interface SidebarProps {
  activeSection?: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="w-[240px] h-screen fixed left-0 top-0 flex flex-col px-6 py-8"
      style={{ background: '#f1f5f9', borderRight: '1px solid #e2e8f0' }}>
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
          <p className="font-semibold text-sm" style={{ color: '#0f172a' }}>Junbum Kim</p>
          <p className="text-xs mt-0.5" style={{ color: '#475569' }}>Postdoctoral Associate</p>
          <p className="text-xs" style={{ color: '#475569' }}>Weill Cornell Medicine</p>
        </div>
      </div>

      {/* Nav */}
      <nav aria-label="Main navigation" className="flex flex-col gap-1 flex-1">
        {NAV_LINKS.map(({ label, href, id }) => {
          const isActive = activeSection === id;
          return (
            <Link
              key={id}
              href={href}
              aria-current={isActive ? 'location' : undefined}
              className="text-sm px-2 py-1.5 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-1"
              style={{ color: isActive ? '#2563eb' : '#334155', fontWeight: isActive ? 600 : 400 }}
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
            className="text-[#64748b] hover:text-[#334155] transition-colors duration-150"
          >
            <Icon />
          </a>
        ))}
      </div>
    </aside>
  );
}
