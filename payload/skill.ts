import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 2,
    },
    { title: 'AWS', level: 2 },
    { title: 'Azure', level: 2 },
    {
      title: 'Spring Boot',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Vue.js',
      level: 3,
    },
    {
      title: 'Vue Composition-api',
      level: 3,
    },
    {
      title: 'Nuxt.js',
      level: 3,
    },
    {
      title: 'React.js',
      level: 3,
    },
    {
      title: 'Typescript',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 3,
    },
    {
      title: 'Scss',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 3,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Webpack',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Jira',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'DevOps',
    },
    {
      title: 'Git / Github',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
