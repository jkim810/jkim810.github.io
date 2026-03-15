import type { ReactNode } from 'react';

interface EditorialGridProps {
  marginContent: ReactNode;
  children: ReactNode;
}

export function EditorialGrid({ marginContent, children }: EditorialGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-0">
      {/* Left margin column */}
      <div className="hidden md:block overflow-hidden whitespace-nowrap text-ellipsis max-w-[130px] text-right pr-4 text-sm text-gray-400">
        {marginContent}
      </div>
      {/* Right content column with spine */}
      <div style={{ borderLeft: '3px solid #2563eb', paddingLeft: '1rem' }}>
        {children}
      </div>
    </div>
  );
}
