export type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    title: 'ImmunoRad ROBIN',
    description:
      'VisiumHD spatial transcriptomics study characterizing the tumor microenvironment of radiation-resistant colorectal tumors to identify cellular and molecular mechanisms underlying treatment failure.',
    tags: ['spatial biology', 'Python', 'R'],
  },
  {
    title: 'Tertiary Lymphoid Structure Detection',
    description:
      'Vision-text fusion models (CLIP-based) applied to H&E whole-slide images to detect and characterize tertiary lymphoid structures in lung adenocarcinoma.',
    tags: ['deep learning', 'digital pathology', 'Python'],
  },
  {
    title: 'Early-Stage Lung Cancer AI',
    description:
      'AI pipeline using low-dose chest CT to distinguish aggressive from indolent tumors at a pre-malignant stage, enabling earlier risk stratification for lung cancer screening cohorts.',
    tags: ['deep learning', 'clinical', 'Python'],
  },
  {
    title: 'UTAG: Unsupervised Tissue Architecture Graph',
    description:
      'Graph-based computational framework for unsupervised discovery of tissue microanatomy from multiplexed imaging data, published in Nature Methods (2022, first author).',
    tags: ['spatial biology', 'Python', 'R'],
    url: 'https://doi.org/10.1038/s41592-022-01657-2',
  },
  {
    title: 'Blastocyst Ploidy Prediction',
    description:
      'CNN trained on time-lapse embryo imaging to non-invasively predict chromosomal ploidy status, providing a computational alternative to invasive preimplantation genetic testing.',
    tags: ['deep learning', 'clinical', 'Python'],
  },
];
