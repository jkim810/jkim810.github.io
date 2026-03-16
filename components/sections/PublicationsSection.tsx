'use client';

import { useState } from 'react';
import { publications } from '@/data/publications';
import { EditorialGrid } from '@/components/EditorialGrid';

function truncateAuthors(authors: string, max = 5): string {
  const parts = authors.split(',').map((s) => s.trim());
  if (parts.length <= max) return authors;
  return parts.slice(0, max).join(', ') + ', et al.';
}

function PubCard({ pub, prominent }: { pub: (typeof publications)[0]; prominent: boolean }) {
  const href = pub.doi ? `https://doi.org/${pub.doi}` : pub.url;
  const hasLink = !!href;
  const inner = (
    <>
      <div className="text-sm font-bold text-[#2563eb] uppercase tracking-wide">{pub.venue}</div>
      <div className={`mt-1 ${prominent ? 'font-bold' : 'font-semibold'} text-[#111]`}>{pub.title}</div>
      <div className="mt-1 text-sm text-[#6b7280]">{truncateAuthors(pub.authors)}</div>
    </>
  );

  if (hasLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:-translate-y-0.5 transition-transform duration-150"
      >
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}

export default function PublicationsSection() {
  const [showAll, setShowAll] = useState(false);

  const selected = publications.filter((p) => p.selected);
  const nonSelected = publications.filter((p) => !p.selected);

  return (
    <section id="publications" className="scroll-mt-16 md:scroll-mt-20 border-t border-[#f0f0f0] pt-8">
      <EditorialGrid
        marginContent={
          <span className="uppercase tracking-wide text-xs text-gray-400">PUBLICATIONS</span>
        }
      >
        <h2 className="text-2xl font-bold text-[#111]">Publications</h2>
      </EditorialGrid>

      <div className="mt-6 space-y-8">
        {selected.map((pub, i) => (
          <EditorialGrid
            key={i}
            marginContent={
              <span className="text-sm text-[#2563eb] font-medium">{pub.year}</span>
            }
          >
            <PubCard pub={pub} prominent={true} />
          </EditorialGrid>
        ))}
      </div>

      <div className="pl-0 md:pl-[146px] mt-8">
        <button
          onClick={() => setShowAll((v) => !v)}
          aria-expanded={showAll}
          className="text-sm text-[#2563eb] hover:underline cursor-pointer"
        >
          {showAll ? 'Hide' : 'Show all publications'}
        </button>
      </div>

      {/* Slide-down animation using CSS grid rows */}
      <div className={`grid transition-all duration-300 ease-in-out ${showAll ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="border-t border-[#f0f0f0] mt-8 pt-6 space-y-6">
            {nonSelected.map((pub, i) => (
              <EditorialGrid
                key={i}
                marginContent={
                  <span className="text-sm text-gray-400">{pub.year}</span>
                }
              >
                <PubCard pub={pub} prominent={false} />
              </EditorialGrid>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
