import { tools } from '@/data/tools';
import { SectionHeading } from '@/components/SectionHeading';
import { EditorialGrid } from '@/components/EditorialGrid';

export default function ToolsSection() {
  return (
    <section id="tools" className="scroll-mt-16 md:scroll-mt-20 border-t border-[#f0f0f0] pt-8">
      <SectionHeading label="TOOLS" title="Software & Tools" />
      <div className="mt-6 space-y-6">
        {tools.map((tool, i) => (
          <EditorialGrid key={i} marginContent={null}>
            <div className={`flex items-start justify-between gap-4 ${tool.url ? 'hover:-translate-y-0.5 transition-transform duration-150' : ''}`}>
              <div>
                <div className="font-bold text-[#111]">{tool.name}</div>
                <div className="mt-1 text-sm text-[#6b7280]">{tool.description}</div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-[#f3f4f6] text-[#374151] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {tool.url && (
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm text-[#2563eb] hover:underline"
                >
                  View →
                </a>
              )}
            </div>
          </EditorialGrid>
        ))}
      </div>
    </section>
  );
}
