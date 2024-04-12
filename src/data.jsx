import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import {MdWorkHistory, MdOutlineSettingsRemote} from 'react-icons/md'
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Experience',
    icon: <MdWorkHistory className='nav__icon' />,
    path: '/workExp',
  },
  {
    id: 4,
    name: 'Projects',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/projects',
  },
  {
    id: 5,
    name: 'Skills',
    icon: <MdOutlineSettingsRemote className='nav__icon' />,
    path: '/skills',
  },

  {
    id: 6,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Swapnil',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Rahate',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '26 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Nagpur, India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 9075200380',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'swapnilrahate6598@gmail.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: 'https://www.linkedin.com/in/swapnil-rahate-b19009213/',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Hindi, Marathi',
  },
];

export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '6+',
    title: 'Completed <br /> Projects',
  },
  
  {
    id: 3,
    no: '2+',
    title: 'Infosys <br /> Certifications',
  },

  {
    id: 4,
    no: '1+',
    title: 'Years of <br />Intern Exp.',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '04/2022 - PRESENT',
    title1: 'System Engineer',
    title2: 'Infosys',
    desc1: 'Improved the user experience of a web application by developing a new user interface using React and Redux.',
    desc2: 'Implemented a new search feature that allowed users to find information more easily.',
    desc3: 'Improved the overall responsiveness of the application. ',
    desc4: 'Successfully deployed the application to production and received positive feedback from users.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '09/2020 - 03/2022',
    title1: 'Front-End Trainee',
    title2: 'Sakssoft',
    desc1: 'Learned the fundamentals of frontend development, including HTML, CSS, and JavaScript.',
    desc2: 'Worked with a mentor to develop my skills and learn the best practices of frontend development.',
    desc3: 'Worked on small projects to gain experience.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '12/2019 - 06/2020',
    title1: 'Intern',
    title2: 'Coperbyte Software Soluctions Pvt Ltd.',
    desc1: 'We have designed Tetris Game with HTML5 which introduces new features like Canvas, Video and audio elements.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title1: 'Engineering Degree',
    title2: 'G. H. Raisoni College of Engineering, Nagpur',
    desc: 'Electronics & Telecomunication',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016',
    title1: 'HSC',
    title2: 'Dharampeth M. P. Deo Memorail Science College, Nagpur',
    desc: 'Science & Electronics',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2013',
    title1: 'SSC',
    title2: 'Benarasidas Ruiya High School, Katol',
    desc: 'General Science',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '25',
  },

  {
    id: 2,
    title: 'JavaScript',
    percentage: '25',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '60',
  },

  {
    id: 4,
    title: 'React',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Redux',
    percentage: '25',
  },

  {
    id: 6,
    title: 'JIRA',
    percentage: '20',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '25',
  },

  {
    id: 8,
    title: 'Git',
    percentage: '55',
  },
];

export const project = [
  {
    id: 1,
    img: Work1,
    title: 'Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'React Portfolio',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JS, React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Ecommerce',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, JS, React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Real-Time Collabration Tool',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language & Tools : ',
        desc: 'React JS, Node JS, Express JS, Socket.io',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Admin Dashboard',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language & Tools : ',
        desc: 'React JS, React Hooks, Motion Framer, Apexchart',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Facebook Clone',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'YouTube Suscriber',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
