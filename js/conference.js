const conference = () => {
  const data = [
    {
      id: 1,
      name: 'James Robinson',
      designation: 'Senior Learning Manager, Pedagogy and Training',
      image: './assets/james.webp',
      about: 'James is an ex-teacher, and now manages our training programmes for educators. He still plays with Lego and drinks a lot of tea.',
      social: {
        rpi: { link: 'https://www.raspberrypi.org/blog/author/jamesrobinson/', logo: '<i class="fa-brands fa-raspberry-pi"></i>', aria: 'connect on rpi foundation' },
        linkedin: { link: 'https://www.linkedin.com/in/james-robinson-631467112/', logo: '<i class="fa-brands fa-linkedin"></i>' },
        github: { link: 'https://github.com/jrobinson-uk', logo: '<i class="fa-brands fa-github"></i>' },
        twitter: { link: 'https://twitter.com/legojames', logo: '<i class="fa-brands fa-twitter"></i>' },
      },
    },
    {
      id: 2,
      name: 'Gemma Coleman',
      designation: 'Hello World Editor',
      image: './assets/gemma_colman.webp',
      about: 'Gemma is the Editor of Hello World, our magazine for computing educators. Gemma enjoys being outside as much as possible - climbing, hiking, kayaking and exploring the world.',
      social: {
        rpi: { link: 'https://www.raspberrypi.org/blog/author/gemma-coleman/', logo: '<i class="fa-brands fa-raspberry-pi"></i>', aria: 'connect on rpi foundation' },
        linkedin: null,
        github: null,
        twitter: null,
      },
    },
    {
      id: 3,
      name: 'Naula McHale',
      designation: 'Global Engagement Manager',
      image: './assets/nuala.webp',
      about: 'Naula manages communications and engagement for CoderDojo. She\'s a Dojo mentor and enjoys seeing kids make hilarious projects. She also loves animals, farming, making things, theatre, the art, and food.',
      social: {
        rpi: { link: 'https://www.raspberrypi.org/blog/author/nualamchale/', logo: '<i class="fa-brands fa-raspberry-pi"></i>', aria: 'connect on rpi foundation' },
        linkedin: { link: 'https://www.linkedin.com/in/nuala-louise-mchale-b76b5341/', logo: '<i class="fa-brands fa-linkedin"></i>' },
        github: null,
        twitter: { link: 'https://twitter.com/NuliBouli', logo: '<i class="fa-brands fa-twitter"></i>' },
      },
    },
    {
      id: 4,
      name: 'Richard Hayler',
      designation: 'Senior Programme Manager, Community and Development',
      image: './assets/richard.webp',
      about: 'Richard runs our Citizen Science programme, including the Weather Station project. He\'s an engineer who\'s easily distracted by comics, music, rugby, and LEGO. His quest to combine them into a single activity is ongoing.',
      social: {
        rpi: { link: 'https://www.raspberrypi.org/blog/author/richardhayler/', logo: '<i class="fa-brands fa-raspberry-pi"></i>', aria: 'connect on rpi foundation' },
        linkedin: null,
        github: { link: 'https://github.com/topshed', logo: '<i class="fa-brands fa-github"></i>' },
        twitter: { link: 'https://twitter.com/rdhayler', logo: '<i class="fa-brands fa-twitter"></i>' },
      },
    },
    {
      id: 5,
      name: 'Martin O\'Hanlon',
      designation: 'Senior Learning Manager',
      image: './assets/martin.webp',
      about: 'Martin loves technology and creates projects and learning resources for Raspberry Pi. As a child, he wanted to be either a computer scientist, an astronaut, or a snowboard instructor.',
      social: {
        rpi: { link: 'https://www.raspberrypi.org/blog/author/martinohanlon/', logo: '<i class="fa-brands fa-raspberry-pi"></i>', aria: 'connect on rpi foundation' },
        linkedin: null,
        github: null,
        twitter: null,
      },
    },
    {
      id: 6,
      name: 'Magdalena Jadach',
      designation: 'Software Engineer',
      image: './assets/madga.webp',
      about: 'Software Engineer at Raspberry Pi Foundation. Electronic enthusiast, kazik\'s mum and foodie. An advocate for diversity in tech.',
      social: {
        rpi: { link: 'https://www.raspberrypi.org/blog/author/magda/', logo: '<i class="fa-brands fa-raspberry-pi"></i>', aria: 'connect on rpi foundation' },
        linkedin: null,
        github: null,
        twitter: { link: 'https://twitter.com/magda_jadach', logo: '<i class="fa-brands fa-twitter"></i>' },
      },
    },
  ];
  return data;
};

export default conference;