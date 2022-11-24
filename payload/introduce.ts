import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹 서비스의 프론트엔드 개발과 퍼블릭 인프라 경험을 했습니다.',
    'Vue.js, React.js, AWS, Azure, Git 등을 사용하여 유연하고 재배포가 빠른 프론트엔드 개발을 합니다.',
    '비즈니스 로직을 고민하며, 개발자가 원하는 게 아닌 서비스의 비즈니스 로직을 위해 기획자, 디자이너와 협업합니다.',
    '사용자 친화적인 UX를 만드려고 노력하고 있습니다.',
    '테스트코드를 작성할 수 있습니다.',
    '재사용성이 가능한 컴포넌트에 관심이 많으며 다른 라이브러리들도 참고하여 더 나은 서비스를 만들려 합니다.',
  ],
  sign: 'jane',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
