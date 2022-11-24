import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume: Seyoung Sim';
const description = "This is Front-end Developer Jane's Resume. Thank you";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'profile-image',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Seyoung',
        lastName: 'Sim',
        username: 'janeSim',
        gender: 'female',
      },
    },
  },
};
