import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '변화에 유연하게 적응하며, 배려를 기반으로 한 커뮤니케이션을 중요시하는 프론트엔드 개발자 입니다.',
    "기획자, 디자이너, 다양한 직군의 팀원과 '행복한' 협업 경험을 만들고, 사용자 만족을 달성하는 프로덕트를 '함께' 만드는 것이 목표입니다.",
    '폭넓고 빠른 리서치 능력를 통해 문제 해결의 길에 빠르게 도달할 수 있습니다.',
    'Git의 활용과 코드리뷰에 익숙하며, 테스트 코드를 작성할 수 있습니다.',
    '애자일의 주요 업무 프로세스와 액션 아이템에 대해 이해하고 있습니다.',
  ],
  sign: 'jane',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
