import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Amaal | Portfolio',
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Amaal Jama',
  subtitle: 'I am a Self-Taught, Front-End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'nofade.jpg',
  paragraphOne:
    'Hi there, I am a Software Engineer based in London. I enjoy building multipage websites with my HTML, CSS and Javascript knowledge. Mostly using the React framework to efficiently build websites with a beautiful and functional user interface.​​',
  paragraphTwo:
    'I chose to be a developer to be inspired, to inspire and create an impact. I studied and built these projects whilst working full time, which emphasises my great time management skills, hard work and determination.',
  paragraphThree:
    '',

  resume:
    'https://docs.google.com/document/d/1d8YIKU2VnDRYhI26SNWv8TXuysXBB35H1u3JjJQ-20o/edit?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'productivity.png',
    title: 'Productivity App',
    info:
      'A Todo list web application where you can add as many todos, update and delete them as you wish.',
    info2:
      'This was created using React, mainly React Hooks and a custom CSS for a beautiful User Interface.',
    url: 'https://zen-ardinghelli-548a97.netlify.app/',
    repo: 'https://github.com/Ajama94/ReactToDoApp',
  },
  {
    id: nanoid(),
    img: 'weather.jpg',
    title: 'Weather App',
    info:
      'A responsive weather app made through React using an API from openweathermap. By default it shows a landing page with a search bar where you can find the current weather of a city, for example New York or London.',
    info2: 'This project introduced me into APIs and I’m excited to dive more into it.',
    url: 'https://nervous-kalam-d61132.netlify.app/',
    repo: 'https://github.com/Ajama94/WeatherApp',
  },
  {
    id: nanoid(),
    img: 'bank.png',
    title: 'ZenBank',
    info:
      'A bank prototype Website created using React hooks and router. I made sure to make it responsive for all screen sizes. I implemented buttons to navigate and link up pages smoothly. ',
    info2: '',
    url: 'https://competent-nobel-37e98e.netlify.app/',
    repo: 'https://github.com/Ajama94/Bank-project',
  },
  {
    id: nanoid(),
    img: 'trvl.png',
    title: 'WANDER Travel',
    info: 'A REACT website for a fake travel company using react router and hooks. ',
    info2:
      'I made use of animation effects and a background video on the landing page for an interactive and eye catching user interface.',
    url: 'https://wizardly-fermi-327d74.netlify.app/',
    repo: 'https://github.com/Ajama94/WanderReact',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome! Looking forward to your email.',
  btn: '',
  email: 'amaal.codes@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/amaal-jama/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ajama94',
    },
  ],
};

export const githubButtons = {
  isEnabled: false,
};
