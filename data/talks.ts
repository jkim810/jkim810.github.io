export type Talk = {
  title: string;
  venue: string;
  date: string;
  url?: string;
};

export const talks: Talk[] = [
  {
    title: 'Spatial Biology in Cancer: From Tissue Architecture to Clinical Prediction',
    venue: 'AACR Annual Meeting 2024',
    date: '2024-04',
  },
  {
    title: 'Multiplexed Imaging and Machine Learning for Tumor Microenvironment Profiling',
    venue: 'Keystone Symposia on Single Cell Biology',
    date: '2023-06',
  },
];
