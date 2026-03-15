export type Project = {
  title: string;
  description: string;
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    title: 'Spatial Transcriptomics Analysis Pipeline',
    description:
      'End-to-end pipeline for processing and analyzing multiplexed spatial transcriptomics data (CODEX/MERFISH), including cell segmentation, phenotyping, and tissue architecture discovery.',
    tags: ['spatial biology', 'Python', 'R'],
    url: 'https://github.com/jkim810',
  },
  {
    title: 'ML-Based Tumor Microenvironment Classifier',
    description:
      'Machine learning models trained on spatial proteomics data to classify tumor microenvironment subtypes and predict patient outcomes in solid tumors.',
    tags: ['machine learning', 'oncology', 'Python'],
  },
  {
    title: 'Single-Cell Multi-Omics Integration Tool',
    description:
      'Computational framework for integrating scRNA-seq, ATAC-seq, and spatial data to reveal cell-state transitions and epigenetic regulatory programs.',
    tags: ['single-cell', 'R', 'Bioconductor'],
  },
  {
    title: 'Deep Learning Clinical Outcome Predictor',
    description:
      'Deep neural network leveraging time-lapse embryo imaging and clinical features to non-invasively predict blastocyst ploidy and IVF success rates.',
    tags: ['deep learning', 'clinical', 'Python'],
  },
  {
    title: 'CODEX Image Processing Workflow',
    description:
      'Automated image processing and cell phenotyping workflow for CODEX multiplex immunofluorescence data, enabling high-throughput tissue analysis.',
    tags: ['imaging', 'spatial biology', 'Python'],
  },
];
