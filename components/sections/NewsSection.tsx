import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { EditorialGrid } from '@/components/EditorialGrid';

type NewsItem = {
  date: string;
  headline: string;
  description: string;
};

function formatDate(d: string): string {
  const [year, month] = d.split('-');
  return new Date(+year, +month - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function NewsSection() {
  const filePath = path.join(process.cwd(), 'data', 'news.yml');
  const raw = fs.readFileSync(filePath, 'utf8');
  const news = yaml.load(raw) as NewsItem[];

  return (
    <section id="news" className="scroll-mt-16 md:scroll-mt-20 border-t border-[#f0f0f0] pt-8">
      <EditorialGrid
        marginContent={
          <span className="uppercase tracking-wide text-xs text-gray-400">NEWS</span>
        }
      >
        <h2 className="text-2xl font-bold text-[#111]">News</h2>
      </EditorialGrid>
      <div className="mt-6 space-y-6">
        {news.map((item, i) => (
          <EditorialGrid
            key={i}
            marginContent={
              <span className="text-sm text-[#2563eb] font-medium">{formatDate(item.date)}</span>
            }
          >
            <div>
              <div className="font-bold text-[#111]">{item.headline}</div>
              <div className="mt-1 text-sm text-[#6b7280]">{item.description}</div>
            </div>
          </EditorialGrid>
        ))}
      </div>
    </section>
  );
}
