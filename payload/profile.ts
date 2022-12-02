import { faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faDev } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '심세영',
    small: '(Jane Sim)',
  },
  contact: [
    {
      title: 'ssiox3@gmail.com',
      link: 'mailto:ssiox3@gmail.com',
      icon: faEnvelope,
    },

    // {
    //   title: 'Please contact me by email',
    //   icon: faPhone,
    //   badge: true,
    // },
    {
      title: 'https://github.com/Jane-Sim',
      link: 'https://github.com/Jane-Sim',
      icon: faGithub,
    },
    {
      title: 'https://janesim.notion.site',
      link: 'https://janesim.notion.site/sim-kkong-39878eb6c4fd4bf09979cf19250cec98',
      icon: faDev,
    },
    {
      title: 'https://simkkong.tistory.com',
      link: 'https://simkkong.tistory.com',
      icon: faBook,
    },
  ],
  notice: {
    title: '휴대전화가 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
    disable: true,
  },
};

export default profile;
