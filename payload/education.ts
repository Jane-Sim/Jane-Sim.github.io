import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '협성대학교',
      subTitle: '경영학과 졸업',
      startedAt: '2015-03',
      endedAt: '2017-08',
    },
    {
      title: '용인송담대학교',
      subTitle: '경영정보과 졸업',
      startedAt: '2012-03',
      endedAt: '2014-02',
    },
    {
      title: '수도여자고등학교',
      subTitle: '인문계 졸업',
      startedAt: '2009-02',
      endedAt: '2012-03',
    },
  ],
};

export default education;
