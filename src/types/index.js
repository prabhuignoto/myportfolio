import { string, number } from 'prop-types';

export default {
  sizes: {
    base64: string.isRequired,
    aspectRatio: number.isRequired,
    src: string.isRequired,
    srcSet: string.isRequired,
    sizes: string.isRequired,
  },
};
