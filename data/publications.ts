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
  // ── First-author papers ──────────────────────────────────────────────────
  {
    title: 'Simultaneous immunomodulation and epithelial-to-mesenchymal transition drives lung adenocarcinoma progression',
    authors:
      'Junbum Kim, Divij Mathew, Young Kwang Chae, Peng He, Balazs Halmos, Olivier Elemento, Navneet P. Narula',
    venue: 'bioRxiv',
    year: 2025,
    url: 'https://www.biorxiv.org/content/10.1101/2025.01.15.633205',
    selected: true,
  },
  {
    title: 'Unsupervised discovery of tissue architecture in multiplexed imaging',
    authors:
      'Junbum Kim, Samir Rustam, Juan Miguel Mosquera, Scott H. Randell, Renat Shaykhiev, André F. Rendeiro, Olivier Elemento',
    venue: 'Nature Methods',
    year: 2022,
    doi: '10.1038/s41592-022-01657-2',
    selected: true,
  },

  // ── Co-author papers ─────────────────────────────────────────────────────
  {
    title:
      'Acquisition of discrete immune suppressive barriers contributes to the initiation and progression of preinvasive to invasive human lung cancer',
    authors:
      'Liron Yoffe, Bhavneet Bhinder, Sung Wook Kang, Haoran Zhang, Arshdeep Singh, Hiranmayi Ravichandran, Geoffrey Markowitz, Mitchell Martin, Junbum Kim, Chen Zhang, Olivier Elemento, Wesley Tansey, Stewart Bates, Timothy E. McGraw, Alain Borczuk, Hyun-Sung Lee, Nasser K. Altorki, Vivek Mittal',
    venue: 'bioRxiv',
    year: 2025,
    url: 'https://www.biorxiv.org/content/10.1101/2024.12.31.630523v1',
    selected: false,
  },
  {
    title:
      'Multi-parametric atlas of the pre-metastatic liver for prediction of metastatic outcome in early-stage pancreatic cancer',
    authors:
      'Linda Bojmar, Constantinos P. Zambirinis, Jonathan M. Hernandez, Jayasree Chakraborty, Lee Shaashua, Junbum Kim, Kofi Ennu Johnson, Samer Hanna, Gokce Askan, Jonas Burman, Hiranmayi Ravichandran, Jian Zheng, Joshua S. Jolissaint, Rami Srouji, Yi Song, Ankur Choubey, Han Sang Kim, Michele Cioffi, Elke van Beek, Carlie Sigel, Jose Jessurun, Paulina Velasco Riestra, Hakon Blomstrand, Carolin Jönsson, Anette Jönsson, Pernille Lauritzen, Weston Buehring, Yonathan Ararso, Dylanne Hernandez, Jessica P. Vinagolu-Baur, Madison Friedman, Caroline Glidden, Laetitia Firmenich, Grace Lieberman, Dianna L. Mejia, Naaz Nasar, Anders P. Mutvei, Doru M. Paul, Yaron Bram, Bruno Costa-Silva, Olca Basturk, Nancy Boudreau, Haiying Zhang, Irina R. Matei, Ayuko Hoshino, David Kelsen, Irit Sagi, Avigdor Scherz, Ruth Scherz-Shouval, Yosef Yarden, Moshe Oren, Mikala Egeblad, Jason S. Lewis, Kayvan Keshari, Paul M. Grandgenett, Michael A. Hollingsworth, Vinagolu K. Rajasekhar, John H. Healey, Bergthor Björnsson, Diane M. Simeone, David A. Tuveson, Christine A. Iacobuzio-Donahue, Jaqueline Bromberg, C. Theresa Vincent, Eileen M. O\'Reilly, Ronald P. DeMatteo, Vinod P. Balachandran, Michael I. D\'Angelica, T. Peter Kingham, Peter J. Allen, Amber L. Simpson, Olivier Elemento, Per Sandström, Robert E. Schwartz, William R. Jarnagin, David Lyden',
    venue: 'Nature Medicine',
    year: 2024,
    doi: '10.1038/s41591-024-03075-7',
    selected: false,
  },
  {
    title: 'Epigenetic memory of coronavirus infection in innate immune cells and their progenitors',
    authors:
      'Jin-Gyu Cheong, Arjun Ravishankar, Siddhartha Sharma, Christopher N. Parkhurst, Simon A. Grassmann, Claire K. Wingert, Paoline Laurent, Sai Ma, Lucinda Paddock, Isabella C. Miranda, Emin Onur Karakaslar, Djamel Nehar-Belaid, Asa Thibodeau, Michael J. Bale, Vinay K. Kartha, Jim K. Yee, Minh Y. Mays, Chenyang Jiang, Andrew W. Daman, Alexia Martinez de Paz, Dughan Ahimovic, Victor Ramos, Alexander Lercher, Erik Nielsen, Sergio Alvarez-Mulett, Ling Zheng, Andrew Earl, Alisha Yallowitz, Lexi Robbins, Elyse LaFond, Karissa L. Weidman, Sabrina Racine-Brzostek, He S. Yang, David R. Price, Louise Leyre, André F. Rendeiro, Hiranmayi Ravichandran, Junbum Kim, Alain C. Borczuk, Charles M. Rice, R. Brad Jones, Edward J. Schenck, Robert J. Kaner, Amy Chadburn, Zhen Zhao, Virginia Pascual, Olivier Elemento, Robert E. Schwartz, Jason D. Buenrostro, Rachel E. Niec, Franck J. Barrat, Lindsay Lief, Joseph C. Sun, Duygu Ucar, Steven Z. Josefowicz',
    venue: 'Cell',
    year: 2023,
    doi: '10.1016/j.cell.2023.07.019',
    selected: false,
  },
  {
    title:
      'A non-invasive artificial intelligence approach for the prediction of human blastocyst ploidy: a retrospective model development and validation study',
    authors:
      'Josue Barnes, Matthew Brendel, Vianne R. Gao, Suraj Rajendran, Junbum Kim, Qianzi Li, Jonas E. Malmsten, Jose T. Sierra, Pantelis Zisimopoulos, Alexandros Sigaras, Pegah Khosravi, Marcos Meseguer, Qiansheng Zhan, Zev Rosenwaks, Olivier Elemento, Nikica Zaninovic, Iman Hajirasouliha',
    venue: 'The Lancet Digital Health',
    year: 2023,
    doi: '10.1016/S2589-7500(22)00213-8',
    selected: false,
  },
  {
    title: 'Insulin feedback is a targetable resistance mechanism of PI3K inhibition in glioblastoma',
    authors:
      'Evan K. Noch, Laura N. Palma, Isaiah Yim, Nayah Bullen, Yuqing Qiu, Hiranmayi Ravichandran, Junbum Kim, Andre Rendeiro, Melissa B. Davis, Olivier Elemento, David J. Pisapia, Kevin Zhai, Hongbiao Carl LeKaye, Jason A. Koutcher, Patrick Y. Wen, Keith L. Ligon, Lewis C. Cantley',
    venue: 'Neuro-Oncology',
    year: 2023,
    doi: '10.1093/neuonc/noad117',
    selected: false,
  },
  {
    title: 'Spatial omics technologies at multimodal and single cell/subcellular level',
    authors:
      'Jiwoon Park, Junbum Kim, Tyler Lewy, Charles M. Rice, Olivier Elemento, André F. Rendeiro, Christopher E. Mason',
    venue: 'Genome Biology',
    year: 2022,
    doi: '10.1186/s13059-022-02824-6',
    selected: false,
  },
  {
    title: 'The spatial landscape of lung pathology during COVID-19 progression',
    authors:
      'André F. Rendeiro, Hiranmayi Ravichandran, Yaron Bram, Vasuretha Chandar, Junbum Kim, Cem Meydan, Jiwoon Park, Jonathan Foox, Tyler Hether, Sarah Warren, Youngmi Kim, Jason Reeves, Steven Salvatore, Christopher E. Mason, Eric C. Swanson, Alain C. Borczuk, Olivier Elemento, Robert E. Schwartz',
    venue: 'Nature',
    year: 2021,
    doi: '10.1038/s41586-021-03475-6',
    selected: true,
  },
  {
    title: 'Persistent alveolar type 2 dysfunction and lung structural derangement in post-acute COVID-19',
    authors:
      'André F. Rendeiro, Hiranmayi Ravichandran, Junbum Kim, Alain C. Borczuk, Olivier Elemento, Robert E. Schwartz',
    venue: 'medRxiv',
    year: 2022,
    url: 'https://www.medrxiv.org/content/10.1101/2022.11.23.22282685v1',
    selected: false,
  },
];
