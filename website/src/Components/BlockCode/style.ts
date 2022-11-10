import { styled } from '@nextui-org/react';

export const TextCodeStyle = styled('div', {
  background: '$codeBackground',
  color: '$white',
  borderRadius: '$lg',
  padding: '15px 20px',
  '*': {
    color: '$white'
  },
  'pre, code': {
    margin: 0,
    padding: 0,
    borderRadius: 0,
    background: 'transparent'
  },
  variants: {
    isInline: {
      false: {
        overflowX: 'auto',
        pre: {
          width: 'max-content'
        }
      }
    }
  }
});
