import { talks } from '@/data/talks';
import { EditorialGrid } from '@/components/EditorialGrid';

export default function TalksSection() {
  return (
    <section id="talks" className="scroll-mt-20 border-t border-[#f0f0f0] pt-8">
      <EditorialGrid
        marginContent={
          <span className="uppercase tracking-wide text-xs text-gray-400">TALKS</span>
        }
      >
        <h2 className="text-2xl font-bold text-[#111]">Talks</h2>
      </EditorialGrid>
      <div className="mt-6 space-y-6">
        {talks.map((talk, i) => (
          <EditorialGrid
            key={i}
            marginContent={
              <span className="text-sm text-[#2563eb] font-medium">{talk.date}</span>
            }
          >
            <div className="hover:-translate-y-0.5 transition-transform duration-150">
              <div className="font-bold text-[#111]">{talk.title}</div>
              <div className="mt-1 text-sm text-[#6b7280]">{talk.venue}</div>
              {talk.url && (
                <a
                  href={talk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-[#2563eb] hover:underline"
                >
                  View slides →
                </a>
              )}
            </div>
          </EditorialGrid>
        ))}
      </div>
    </section>
  );
}
