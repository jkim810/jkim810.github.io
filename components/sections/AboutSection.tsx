import { EditorialGrid } from '@/components/EditorialGrid';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20">
      <EditorialGrid
        marginContent={
          <span className="uppercase tracking-wide text-xs text-gray-400">ABOUT</span>
        }
      >
        <div>
          <h1 className="font-bold text-[#111] leading-tight" style={{ fontSize: '3rem' }}>
            Junbum Kim
          </h1>
          <p className="mt-2 text-[#6b7280] text-sm tracking-wide">
            Computational Biology · Spatial Omics · Machine Learning
          </p>
          <p className="mt-4 text-base text-[#111]">
            Postdoctoral Associate at Weill Cornell Medicine in the{' '}
            <a
              href="https://elementolab.weill.cornell.edu/"
              className="text-[#2563eb] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elemento Lab
            </a>{' '}
            and{' '}
            <a
              href="https://radiationoncology.weillcornell.org/research/yoffe-lab"
              className="text-[#2563eb] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yoffe Lab
            </a>
            . My research integrates spatial transcriptomics, multiplexed imaging, and machine
            learning to decode tissue architecture in cancer and infectious disease.
          </p>
        </div>
      </EditorialGrid>
    </section>
  );
}
