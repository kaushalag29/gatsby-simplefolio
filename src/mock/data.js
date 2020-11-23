import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'My Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Kaushal',
  subtitle: 'I\'m the Unknown Developer.' ,
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Computer Science Graduate(2020), passionate about Software Development, Web Penetration Testing & Data Engineering. I like solving real-world problems and try to keep things as simple as possible.',
  paragraphTwo: 'I have worked mostly as a Backend Engineer(Intern), since it helps me understand the underlying implementation and concepts that are required while launching Production-level Projects.',
  paragraphThree: 'I am always ready to adapt and work with new Technology. Security & Privacy comes first into my mind before starting anything afresh. Think More, Code Less!',
  resume: 'https://drive.google.com/file/d/1BxaHyKCpxXsHsdluTLSqmVQN-ZfzhLEX/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.png',
    title: 'Chat With Strangers',
    info: 'Simple Website Interface For Unknown Users To Chat With Each Other Using Random Nick-Name.',
    info2: 'Tech Stack --> Node.js(Express & Socket.io), MongoDB',
    url: 'https://youtu.be/8b7h7xvvCl8',
    repo: 'https://github.com/kaushalag29/Chat-WebSite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.png',
    title: 'Web Reconnaissance',
    info: 'This tool is developed for passively scanning a Website completely with the help of many Github repositories.',
    info2: 'Tech Stack --> Python Scripting',
    url: 'https://www.youtube.com/watch?v=Bx8G4BnEbx8',
    repo: 'https://github.com/kaushalag29/Website-Scanners', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.png',
    title: 'BC Web Hosting Platform',
    info: 'A platform for hosting Website(1.0) using Ethereum Blockchain & IPFS Technology.',
    info2: 'Tech Stack --> Blockchain, IPFS, Metamask, Chrome Extension',
    url: 'https://youtu.be/BoGtQ4uK0-I',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'work.kaushalag29@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@kaushalagarwal_73962',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/kaushal-kumar-agarwal-976854166',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kaushalag29',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
