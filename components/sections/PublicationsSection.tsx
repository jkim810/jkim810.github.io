import { publications } from '@/data/publications';
import { EditorialGrid } from '@/components/EditorialGrid';

export default function PublicationsSection() {
  const selected = publications.filter((p) => p.selected);

  return (
    <section id="publications" className="scroll-mt-20 border-t border-[#f0f0f0] pt-8">
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
            <div className="hover:-translate-y-0.5 transition-transform duration-150">
              <div className="text-sm font-bold text-[#2563eb] uppercase tracking-wide">
                {pub.venue}
              </div>
              <div className="mt-1 font-bold text-[#111]">{pub.title}</div>
              <div className="mt-1 text-sm text-[#6b7280]">{pub.authors}</div>
              {(pub.doi || pub.url) && (
                <a
                  href={pub.doi ? `https://doi.org/${pub.doi}` : pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-[#2563eb] hover:underline"
                >
                  Read paper →
                </a>
              )}
            </div>
          </EditorialGrid>
        ))}
      </div>
    </section>
  );
}
