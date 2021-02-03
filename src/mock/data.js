import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mon PortFolio Développeur Web FullStack', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Bienvenu sur mon portfolio développeur web FullStack', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Salut, mon nom est',
  name: 'Olivier',
  subtitle: 'Je suis Développeur Web FullStack',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Développeur depuis bientôt 10 ans, j\'ai acquis une expertise dans le développement web FullStack. Actuellement en mission au sein d\'un grand groupe sur Sophia Antipolis, je perfectionne mes compétences et en découvrent de nouvelles chaque jour.',
  paragraphTwo: 'HTML, CSS, Javascript, PHP, Java. Voilà ce que j\'adore faire.',
  paragraphThree: 'Développeur la semaine, guitariste le week-end. La musique est ma deuxième passion et je joue actuellement dans plusieurs groupes.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projet1.PNG',
    title: 'Vignette Aide & Contact',
    info: 'Développement de la vignette Aide et Contact de l\'Assistance Orange',
    info2: 'Typescript / Grunt / Sass',
    url: 'https://assistance.orange.fr/assistance-commerciale/l-identification/gerer-vos-mots-de-passe/compte-orange-mot-de-passe-oublie-ou-incorrect_216803-759648',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projet2.png',
    title: 'API FullContact',
    info: 'Développement de l\'API FullContact pour Orange. Cet API est utilisée pour renvoyer les moyens de contacts à afficher dans un contexte particulier.',
    info2: 'PHP 7, Slim 3, Docker, PhpUnit, Sonar',
    url: 'https://assistance.orange.fr/assistance-commerciale/l-identification/gerer-vos-mots-de-passe/compte-orange-mot-de-passe-oublie-ou-incorrect_216803-759648',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projet3.png',
    title: 'Travel By AirFrance',
    info: 'Développement des pages guide de voyage Air France',
    info2: 'HTML, CSS, Java',
    url: 'https://assistance.orange.fr/assistance-commerciale/l-identification/gerer-vos-mots-de-passe/compte-orange-mot-de-passe-oublie-ou-incorrect_216803-759648',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Vous voulez travaillez avec moi? Super !',
  btn: 'Parlons en !',
  email: 'oliv.francois@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/olivier-françois-61792b40/',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
