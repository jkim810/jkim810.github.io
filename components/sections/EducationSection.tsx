import { EditorialGrid } from '@/components/EditorialGrid';

interface EducationEntry {
  years: string | string[];
  degree: string;
  institution: string;
  institutionUrl: string;
  major: string;
  details: string[];
}

const education: EducationEntry[] = [
  {
    years: '2020–2024',
    degree: 'PhD',
    institution: 'Weill Cornell Medicine',
    institutionUrl: 'https://weill.cornell.edu',
    major: 'Physiology, Biophysics, and Systems Biology',
    details: [
      'PI: Olivier Elemento (Director of Englander Institute of Precision Medicine)',
    ],
  },
  {
    years: '2019–2020',
    degree: 'MS',
    institution: 'The Cooper Union for the Advancement of Science and Art',
    institutionUrl: 'https://cooper.edu',
    major: 'Electrical Engineering',
    details: [
      'GPA 4.0/4.0',
      'PI: Sam Keene and Eduard Reznik',
      'Half-tuition Scholarship',
    ],
  },
  {
    years: ['2017–2019', '2013–2015'],
    degree: 'BS',
    institution: 'The Cooper Union for the Advancement of Science and Art',
    institutionUrl: 'https://cooper.edu',
    major: 'Electrical Engineering (minor in Computer Science)',
    details: [
      'GPA 3.8/4.0',
      'Full-tuition Scholarship',
    ],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-16 md:scroll-mt-20 border-t border-[#f0f0f0] pt-8">
      <EditorialGrid
        accent={false}
        marginContent={
          <span className="uppercase tracking-wide text-xs text-gray-400">EDUCATION</span>
        }
      >
        <h2 className="text-2xl font-bold text-[#111]">Education</h2>
      </EditorialGrid>
      <div className="mt-6 space-y-8">
        {education.map((entry, i) => (
          <EditorialGrid
            key={i}
            marginContent={
              <span className="text-sm text-[#2563eb] font-medium">
                {Array.isArray(entry.years)
                  ? entry.years.map((y, yi) => <span key={yi} className="block">{y}</span>)
                  : entry.years}
              </span>
            }
          >
            <a
              href={entry.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:-translate-y-0.5 transition-transform duration-150"
            >
              <div className="font-bold text-[#111]">
                {entry.degree} &middot; {entry.institution}
              </div>
              <div className="mt-1 text-sm text-[#6b7280]">{entry.major}</div>
              <ul className="mt-1 text-sm text-[#6b7280] list-disc list-inside">
                {entry.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </a>
          </EditorialGrid>
        ))}
      </div>
    </section>
  );
}
