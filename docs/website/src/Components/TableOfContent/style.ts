import { styled } from '@nextui-org/react';

export const LiStyle = styled('li', {
  color: '$text',
  position: 'relative',
  a: {
    color: '$accents7'
  },
  '&:before': {
    content: '',
    display: 'none',
    position: 'absolute',
    width: 5,
    height: 5,
    top: 9,
    left: -15,
    borderRadius: 5,
    background: '$text',
  },

  variants: {
    isActive: {
      true: {
        '&:before': {
          display: 'block'
        },
        a: {
          color: '$text',
          fontWeight: '$bold'
        }
      }
    }
  }
});
