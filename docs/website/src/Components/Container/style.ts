import { styled } from '@nextui-org/react';

export const StyleContainer = styled('div', {
  display: 'block',
  width: '100%',
  padding: '0 10px',
  margin: '0 auto',

  '@tablet': {
    padding: '0 20px'
  },

  variants: {
    withPaddingY: {
      true: {
        padding: '50px 10px',

        '@tablet': {
          padding: '50px 20px'
        }
      }
    }
  }
});
