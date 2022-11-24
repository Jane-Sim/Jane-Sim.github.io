import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '마이크로 프론트엔드의 설명과 프레임워크 소개',
      subTitle: '버넥트 tsts 세미나 발표',
      at: '2017-10',
      descriptions: [
        {
          content: 'WeAreDevelopers 소개 및 마이크로 프론트엔드 설명',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://bit.ly/3GJeQak',
        },
      ],
    },
  ],
};

export default presentation;
