import { EditorialGrid } from '@/components/EditorialGrid';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 md:scroll-mt-20">
      <EditorialGrid
        accent={false}
        marginContent={
          <span className="uppercase tracking-wide text-xs text-gray-400">ABOUT</span>
        }
      >
        <div>
          <h1 className="font-bold text-[#111] leading-tight" style={{ fontSize: '3rem' }}>
            Junbum Kim
          </h1>
          <p className="mt-2 text-[#6b7280] text-sm tracking-wide">
            Computational Biology · Spatial Omics · Machine Learning · Digital Pathology · Data Engineering
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
            . I develop computational methods for spatial transcriptomics and multiplexed imaging,
            with a focus on tumor microenvironment architecture in colorectal and lung cancers.
            My work spans ETL pipeline engineering, deep learning for digital pathology, and
            graph-based tissue analysis — translating high-dimensional biological data into
            clinically interpretable findings.
          </p>
          <p className="mt-4 text-base text-[#111]">
            My research sits at the intersection of spatial biology and computational oncology.
            I build and apply methods — graph-based tissue analysis, deep learning for digital
            pathology, and multi-modal spatial omics pipelines — to decode how the tumor
            microenvironment is organized and how that organization drives cancer progression
            and treatment resistance. A central question in my work is how immune and stromal
            cell communities are spatially coordinated in solid tumors, and what those patterns
            predict about clinical outcome. Alongside this, I develop open-source tools that
            make high-dimensional spatial data accessible to the broader cancer biology community.
          </p>
        </div>
      </EditorialGrid>
    </section>
  );
}
