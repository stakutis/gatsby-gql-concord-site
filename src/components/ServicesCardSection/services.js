import { FaDesktop } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { FaMobile } from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';

export const servicesWeb = [
  {
    id: 1,
    title: 'Front End',
    icon: FaDesktop,
    description: ['React', 'Redux', 'Gatsby', 'HTML, CSS, Javascript', 'Auth0', 'D3']
  },
  {
    id: 2,
    title: 'Server Side',
    icon: FaServer,
    description: ['Node.js', 'Serverless AWS Lambda', 'Java', 'REST API Design', 'Python Django']
  },
  {
    id: 3,
    title: 'DevOps',
    icon: FaWrench,
    description: ['Docker', 'AWS Suite', 'Jenkins', 'Travis CI', 'Git', 'JWT Authentication']
  },
  {
    id: 4,
    title: 'Databases',
    icon: FaDatabase,
    description: ['AWS RDS Setup', 'Postgres', 'DynamoDB', 'MySQL']
  },
  {
    id: 5,
    title: 'Mobile',
    icon: FaMobile,
    description: [
      'Responsive Web Design',
      'Progressive Web App',
      'Mobile Site Development',
      'React Native'
    ]
  }
];
