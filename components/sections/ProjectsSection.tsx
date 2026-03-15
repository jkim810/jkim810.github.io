'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectFilter } from '@/components/ProjectFilter';
import { SectionHeading } from '@/components/SectionHeading';

// Derive unique tags from all projects
const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function ProjectsSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = selected ? projects.filter((p) => p.tags.includes(selected)) : projects;

  return (
    <section id="projects" className="scroll-mt-20 border-t border-[#f0f0f0] pt-8">
      <SectionHeading label="PROJECTS" title="Active Research" />
      <div className="pl-[146px]">
      <ProjectFilter tags={allTags} selected={selected} onSelect={setSelected} />
      {filtered.length === 0 ? (
        <p className="text-[#6b7280]">No projects found.</p>
      ) : (
        <div className="space-y-6">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="hover:-translate-y-0.5 transition-transform duration-150"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-bold text-[#111]">{project.title}</div>
                  <div className="mt-1 text-sm text-[#6b7280]">{project.description}</div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-[#f3f4f6] text-[#374151] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm text-[#2563eb] hover:underline"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </section>
  );
}
