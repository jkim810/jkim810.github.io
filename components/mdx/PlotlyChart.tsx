'use client';

import dynamic from 'next/dynamic';
import type { Data, Layout } from 'plotly.js';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

interface PlotlyChartProps {
  data: Data[];
  layout?: Partial<Layout>;
}

export default function PlotlyChart({ data, layout }: PlotlyChartProps) {
  return (
    <div className="w-full overflow-x-auto my-6">
      <Plot data={data} layout={layout ?? {}} />
    </div>
  );
}
