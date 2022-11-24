import { IProject } from '../component/project/IProject';

// {
//   content: 'Add Foo Feature in 2019',
//   weight: 'MEDIUM',
//   descriptions: [
//     { content: 'Integer ut libero eu libero mattis rutrum at at urna' },
//     { content: 'Integer non turpis ante' },
//   ],
// },

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '숏폼 AR 컨텐츠를 플레이하는 voomb 서비스의 어드민 개발',
      startedAt: '2022-07',
      where: '버넥트 (Virnect)',
      descriptions: [
        {
          content: 'React.js 에서 firebase 로그인 후 사용자 권한에 따라 로그인 처리 및 라우팅 구현',
        },
        { content: '컨텐츠 업로드시, 이미지 파일을 crop후 webp 로 변환처리' },
        {
          content:
            'azure, githubActions 를 통해 어드민 웹 프로젝트를 dev, staging, production 환경으로 클라우드 배포 및 운영',
        },
        { content: '회사 내부 팀원들만 사용하며, 전반적인 앱의 옵션을 어드민페이지에서 수정' },
      ],
    },
    {
      title: '웹 AR 저작툴인 squars의 플랫폼 서비스 개발',
      startedAt: '2022-01',
      endedAt: '2022-07',
      where: '버넥트 (Virnect)',
      descriptions: [
        { content: 'vue.js + composition-api + typescript 로 개발' },
        { content: '가입하는/초대받은 사용자의 회원가입/로그인 플로우 웹 개발' },
        { content: '계정관리에서 사용자가 어카운트 권한 신청 후 라이선스 구매 플로우 개발' },
        {
          content:
            '워크스테이션에서 구매한 라이선스로 워크스테이션/워크스페이스 생성 및 사용자 초대 플로우 개발',
        },
        {
          content: '어드민에서 유저 관리 및 라이선스, 굿즈 등을 관리하는 플로우 개발',
        },
      ],
    },
    {
      title: '버넥트 B2B 제품 플랫폼/어드민 웹 개발',
      startedAt: '2021-07',
      endedAt: '2021-12',
      where: '버넥트 (Virnect)',
      descriptions: [
        {
          content:
            'vue.js 로 퍼블릭/프라이빗(구축형) 환경으로 로그인, 홈페이지, 계정관리, 워크스테이션 개발 및 유지보수',
        },
        { content: 'LG CNS 등 수주받은 회사들의 커스텀 개발 진행' },
      ],
    },
    {
      title: 'Fapiks의 메타 스페이스 웹 개발',
      startedAt: '2020-07',
      endedAt: '2021-07',
      where: '쓰리디스튜디오모아 (3D Studio Moa)',
      descriptions: [
        {
          content: 'Pano2VR 파노라마 툴과 javascript HTML/CSS 를 이용한 360도 VR 공간 웹 개발',
        },
        {
          content: '한국섬유수출입협회에서 진행한 온라인 3D 섬유전시관 개발',
          href: 'https://vr.ktextile.net',
        },
        { content: '한국섬유수출입협회에서 진행한 디지털 쇼룸 및 쇼핑몰 개발' },
        { content: '워드프레스로 쓰리디스튜디오모아 페이지 개발 및 GreenkGeeks 로 배포' },
      ],
    },
    {
      title: '동영상리뷰 기능 추가개발 & 쇼핑몰 임베딩 작업',
      startedAt: '2020-04',
      endedAt: '2020-07',
      where: '인덴트코퍼레이션 (indent Corp)',
      descriptions: [
        {
          content: 'React.js 를 이용한 쇼핑몰 동영상 리뷰 기능 추가개발',
        },
        { content: '쇼핑몰 동영상 리뷰 기능을 다른 쇼핑몰의 cafe24, 고도몰 등 임베딩 작업' },
      ],
    },
    {
      title: 'AWS 서버 아키텍처 작업',
      startedAt: '2019-06',
      endedAt: '2019-08',
      where: '핏투게더 (Fitogether)',
      descriptions: [
        {
          content: '기존 웹호스팅 서버를 AWS EC2로 이전작업 및 EC2의 Ubuntu 환경세팅',
        },
        {
          content:
            'Route53, EC2, RDS, S3, CloudFront 등 설정하며 오코치의 AWS 추가 환경구축 및 유지보수',
        },
      ],
    },
    {
      title: '집사 서비스 (사용자/관리자 홈페이지, 앱) 개발',
      startedAt: '2018-12',
      endedAt: '2019-05',
      where: '집사 (zipsa)',
      descriptions: [
        {
          content: 'AngularJs + SpringBoot + Android 로 월세 결제기능 추가개발 및 유지보수',
        },
      ],
    },
  ],
};

export default project;
