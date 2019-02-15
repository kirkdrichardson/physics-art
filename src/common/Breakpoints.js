// @flow

import { css } from 'styled-components';

type SizeType = 'desktop' | 'tablet' | 'mobile';

const sizes: {[SizeType]: number} = {
  desktop: 992,
  tablet: 768,
  mobile: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label: SizeType) => {
  acc[label] = (...args: Array<any>) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  
  return acc
}, {})
