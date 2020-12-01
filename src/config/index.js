module.exports = {
  siteTitle: 'João Duarte',
  siteDescription:
    'Polyvalent and practical Junior Developer and Game Programmer based in Lisbon, PT with industry experience building and designing applications and videogames.',
  siteKeywords:
    'João Duarte, João, Duarte, JoaoAVDuarte, Junior Programmer, Junior Developer, Game Programmer, Game developer, unity, unreal, web developer, javascript, portugal',
  siteUrl: 'https://joaoduarte.netlify.com',
  siteLanguage: 'en_US',
  name: 'João Duarte',
  location: 'Lisbon, Portugal',
  email: 'jaduarte1998@gmail.com',
  github: 'https://github.com/JoaoAVDuarte',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/JoaoAVDuarte',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/JoaoAVDuarte/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#1d7ffc',
  navyColor: '#1d7ffc',
  darkNavyColor: '#ffffff',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};