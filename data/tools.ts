export type Tool = {
  name: string;
  description: string;
  url?: string;
  tags: string[];
};

export const tools: Tool[] = [
  {
    name: 'SpatialKit',
    description:
      'A Python toolkit for spatial transcriptomics preprocessing, cell type deconvolution, and tissue domain identification from multiplexed imaging data.',
    tags: ['Python', 'spatial biology'],
    url: 'https://github.com/jkim810',
  },
  {
    name: 'scIntegrate',
    description:
      'R package for multi-modal single-cell data integration, supporting simultaneous analysis of transcriptomic, epigenomic, and proteomic layers.',
    tags: ['R', 'single-cell', 'Bioconductor'],
  },
];
