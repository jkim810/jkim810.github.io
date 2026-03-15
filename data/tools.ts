export type Tool = {
  name: string;
  description: string;
  url?: string;
  tags: string[];
};

export const tools: Tool[] = [
  {
    name: 'sc_tools',
    description:
      'Snakemake-driven Python toolkit for spatial transcriptomics and single-cell omics analysis. Supports Visium, Visium HD, Xenium, IMC, and CosMx with unified modules for QC, preprocessing, deconvolution, spatial clustering, and visualization.',
    tags: ['Python', 'spatial biology', 'single-cell'],
    url: 'https://github.com/yoffelab/sc_tools',
  },
  {
    name: 'AutoPathAI',
    description:
      'AI framework for automated histopathological analysis of H&E whole-slide images. Trains deep-learning segmentation models (U-Net, DeepLab, Vision Transformers) to quantify tissue architecture features including tertiary lymphoid structures.',
    tags: ['Python', 'deep learning', 'digital pathology'],
    url: 'https://github.com/yoffelab/AutoPathAI',
  },
  {
    name: 'imc',
    description:
      'End-to-end Python package for Imaging Mass Cytometry (IMC) data processing and analysis — from raw MCD/TIFF files through cell segmentation, single-cell quantification, clustering, and community detection across multi-sample studies.',
    tags: ['Python', 'spatial biology', 'IMC'],
    url: 'https://github.com/ElementoLab/imc',
  },
  {
    name: 'utag',
    description:
      'Graph-based Python package for unsupervised discovery of tissue microanatomy from multiplexed imaging data. Implements the method published in Nature Methods (2022).',
    tags: ['Python', 'spatial biology'],
    url: 'https://github.com/ElementoLab/utag',
  },
];
