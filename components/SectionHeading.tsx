import { EditorialGrid } from '@/components/EditorialGrid';

interface SectionHeadingProps {
  label: string;
  title: string;
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <EditorialGrid
      marginContent={
        <span className="uppercase tracking-wide text-xs text-gray-400">
          {label}
        </span>
      }
    >
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </EditorialGrid>
  );
}
