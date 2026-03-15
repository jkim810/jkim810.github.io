'use client';

type Props = {
  tags: string[];
  selected: string | null;
  onSelect: (tag: string | null) => void;
};

export function ProjectFilter({ tags, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1 text-sm rounded border transition-colors focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:outline-none ${
          selected === null
            ? 'bg-[#2563eb] text-white border-[#2563eb]'
            : 'bg-white text-[#374151] border-[#d1d5db] hover:border-[#2563eb]'
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={`px-3 py-1 text-sm rounded border transition-colors focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:outline-none ${
            selected === tag
              ? 'bg-[#2563eb] text-white border-[#2563eb]'
              : 'bg-white text-[#374151] border-[#d1d5db] hover:border-[#2563eb]'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
