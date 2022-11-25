import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '버넥트 (Virnect)',
      position: '웹 클라이언트 개발자',
      startedAt: '2021-07',
      descriptions: [
        'Voomb 엔터테인먼트 어드민 웹 개발',
        'Squars 플랫폼 서비스 웹 개발',
        '버넥트 B2B 제품 플랫폼/어드민 웹 개발',
        '웹 클라이언트 공통모듈 개발 및 유지보수',
      ],
      skillKeywords: ['vue.js', 'react.js', 'TypeScript', 'Node.js', 'Webpack', 'Docker', 'Azure'],
    },
    {
      title: '쓰리디스튜디오모아 (3D Studio Moa)',
      position: '웹 개발자',
      startedAt: '2020-07',
      endedAt: '2021-07',
      descriptions: [
        '섬유 & 의류 가상 전시관 VR 파노라마 웹사이트 개발',
        '홈 & 인테리어 가상 공간 VR 파노라마 웹사이트 개발',
      ],
      skillKeywords: ['Javascript', 'JQuery', 'HTML/CSS', 'Pano2VR'],
    },
    {
      title: '인덴트코퍼레이션 (indent Corp)',
      position: '프론트엔드 엔지니어',
      startedAt: '2020-04',
      endedAt: '2020-07',
      descriptions: ['동영상리뷰 기능 추가개발 & 쇼핑몰 임베딩 작업'],
      skillKeywords: ['react.js', 'TypeScript', 'Webpack'],
    },
    {
      title: '핏투게더 (Fitogether)',
      position: 'public infra developer',
      startedAt: '2019-06',
      endedAt: '2019-08',
      descriptions: [
        '오코치 웹호스팅 서버를 AWS EC2로 이전',
        'Main, Test 서버 관리 & 세팅 (AWS Linux, Route53, ELB, RDS 등)',
      ],
      skillKeywords: ['AWS (Route53, EC2, RDS, S3, CloudFront)', 'Ubuntu'],
    },
    {
      title: '집사 (zipsa)',
      position: '웹 개발자',
      startedAt: '2018-12',
      endedAt: '2019-05',
      descriptions: [
        '집사 서비스 (사용자/관리자 홈페이지, 앱) 개발 및유지보수',
        '월세 결제 기능 추가 (페이앱 PG사 연동)',
        '페이스북 FCM/Pixel Api 등 추가',
      ],
      skillKeywords: [
        'Spring Boot',
        'MySQL',
        'MongoDB',
        'AngularJs (1.x)',
        'Coffeescript',
        'JSP',
        'Webpack',
        'AndroidAnnotations',
        'AndroidSpringFramework',
      ],
    },
  ],
};

export default experience;
