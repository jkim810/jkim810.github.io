import { SectionHeading } from '@/components/SectionHeading';

const SECTIONS = [
  { id: 'about', label: 'ABOUT', title: 'About' },
  { id: 'publications', label: 'PUBLICATIONS', title: 'Publications' },
  { id: 'projects', label: 'PROJECTS', title: 'Projects' },
  { id: 'news', label: 'NEWS', title: 'News' },
  { id: 'blog', label: 'BLOG', title: 'Blog' },
  { id: 'tools', label: 'TOOLS', title: 'Tools' },
  { id: 'talks', label: 'TALKS', title: 'Talks' },
  { id: 'contact', label: 'CONTACT', title: 'Contact' },
];

export default function Home() {
  return (
    <div className="max-w-[760px] xl:max-w-[900px] qhd:max-w-[1100px] mx-auto px-6 py-12 space-y-24">
      {SECTIONS.map(({ id, label, title }) => (
        <section key={id} id={id} className="scroll-mt-20">
          <SectionHeading label={label} title={title} />
          <div className="mt-8 text-gray-400 text-sm italic">
            Content coming soon…
          </div>
        </section>
      ))}
    </div>
  );
}
