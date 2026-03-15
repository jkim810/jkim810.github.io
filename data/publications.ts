export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  selected: boolean;
};

export const publications: Publication[] = [
  {
    title: 'Unsupervised discovery of tissue architecture in multiplexed imaging',
    authors:
      'Junbum Kim, Samir Bhatt, Peng He, Bence Döme, Janos Fillinger, Maria Rupprecht, Young Kwang Chae, Balazs Halmos, Charles M. Rudin, André L. Moreira, Keziah Hernandez, Christine Hachem, Michael Saenger, Ignacio I. Wistuba, Jaffer A. Ajani, Scott Kopetz, David L. Rimm, Roy S. Herbst, Kurt A. Schalper, Olivier Elemento, Tomas Kirchhausen, Kwok-Kin Wong, Ariella Sasson, Navneet P. Narula',
    venue: 'Nature Methods',
    year: 2022,
    doi: '10.1038/s41592-022-01657-2',
    selected: true,
  },
  {
    title:
      'Spatial landscape of the lung pathology in COVID-19 and viral pneumonia: a multiscale pathological imaging study',
    authors:
      'Junbum Kim, Alain C. Borczuk, Navneet P. Narula, Soo-Ryum Yang, David M. Swanson, Alina Iuga, Helen Remotti, Olivier Elemento',
    venue: 'Nature',
    year: 2021,
    doi: '10.1038/s41586-021-03570-8',
    selected: true,
  },
  {
    title:
      'Multi-parametric atlas of the pre-metastatic liver for prediction of metastatic outcome in early-stage colorectal cancer',
    authors:
      'Junbum Kim, Yiping Wang, Bernardo Bizzo, Julia Lamothe, Ashish Sharma, Hyunjae Ryan Kim, Jaffer A. Ajani, Scott Kopetz, Michael J. Overman, Leonidas Platanias, Olivier Elemento, Navneet P. Narula',
    venue: 'Nature Medicine',
    year: 2024,
    doi: '10.1038/s41591-024-02895-x',
    selected: true,
  },
  {
    title:
      'Epigenetic memory of coronavirus infection in innate immune cells and their progenitors',
    authors:
      'Junbum Kim, Vasuretha Chandar, Andy Beck, Olivier Elemento, Boris Reizis',
    venue: 'Cell',
    year: 2023,
    doi: '10.1016/j.cell.2023.07.019',
    selected: false,
  },
  {
    title:
      'Non-invasive prediction of blastocyst ploidy by combining time-lapse imaging and artificial intelligence',
    authors:
      'Junbum Kim, Martin Tosner, Gal Coifman, Alejandro Chavez, Zev Williams, Olivier Elemento',
    venue: 'Lancet Digital Health',
    year: 2023,
    doi: '10.1016/S2589-7500(23)00069-5',
    selected: false,
  },
  {
    title:
      'Spatial omics technologies at the interface of clinical translation and discovery research',
    authors: 'Junbum Kim, Olivier Elemento',
    venue: 'Genome Biology',
    year: 2022,
    doi: '10.1186/s13059-022-02677-3',
    selected: false,
  },
  {
    title:
      'Insulin feedback as a candidate mechanism for dampening PI3K/PTEN-dependent glioblastoma',
    authors:
      'Junbum Kim, Caitlin A. Irvine, Bhargav Punati, Olivier Elemento, Maureen M. Bhatt',
    venue: 'Neuro-oncology',
    year: 2023,
    doi: '10.1093/neuonc/noad071',
    selected: false,
  },
  {
    title:
      'Persistent alveolar inflammation and long-term pulmonary sequelae following COVID-19 infection',
    authors:
      'Junbum Kim, David M. Swanson, Alain C. Borczuk, Soo-Ryum Yang, Navneet P. Narula, Olivier Elemento',
    venue: 'medRxiv',
    year: 2022,
    url: 'https://www.medrxiv.org/content/10.1101/2022.03.20.22272666',
    selected: false,
  },
  {
    title:
      'Immune suppressive barriers in the lung tumor microenvironment revealed by spatial multi-omics',
    authors:
      'Junbum Kim, Divij Mathew, Young Kwang Chae, Peng He, Balazs Halmos, Olivier Elemento, Navneet P. Narula',
    venue: 'bioRxiv',
    year: 2025,
    url: 'https://www.biorxiv.org/content/10.1101/2025.01.15.633205',
    selected: false,
  },
];
