'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectFilter } from '@/components/ProjectFilter';
import { SectionHeading } from '@/components/SectionHeading';
import { EditorialGrid } from '@/components/EditorialGrid';

// Derive unique tags from all projects
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function ProjectsSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = selected ? projects.filter((p) => p.tags.includes(selected)) : projects;

  return (
    <section id="projects" className="scroll-mt-16 md:scroll-mt-20 border-t border-[#f0f0f0] pt-8">
      <SectionHeading label="PROJECTS" title="Active Research" />
      <div className="pl-0 md:pl-[146px] mt-6 mb-6">
        <ProjectFilter tags={allTags} selected={selected} onSelect={setSelected} />
      </div>
      <div className="space-y-6">
        {filtered.length === 0 ? (
          <EditorialGrid marginContent={null}>
            <p className="text-[#6b7280]">No projects found.</p>
          </EditorialGrid>
        ) : (
          filtered.map((project, i) => (
            <EditorialGrid key={i} marginContent={null} accent={!!project.url}>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:-translate-y-0.5 transition-transform duration-150"
                >
                  <div className="font-bold text-[#111]">{project.title}</div>
                  <div className="mt-1 text-sm text-[#6b7280]">{project.description}</div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-[#f3f4f6] text-[#374151] rounded">{tag}</span>
                    ))}
                  </div>
                </a>
              ) : (
                <div>
                  <div className="font-bold text-[#111]">{project.title}</div>
                  <div className="mt-1 text-sm text-[#6b7280]">{project.description}</div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-[#f3f4f6] text-[#374151] rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </EditorialGrid>
          ))
        )}
      </div>
    </section>
  );
}
