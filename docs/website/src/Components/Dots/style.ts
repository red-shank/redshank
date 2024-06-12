import { styled } from '@nextui-org/react';

export const WrapperStyle = styled('div', {
  width: 100,
  height: 100,
  top: 100,
  left: 10,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  zIndex: '$zIndices$1',

  '@sm': {
    left: -10,
  }
});

export const DotStyle = styled('span', {
  width: 25,
  height: 25,
  transition: 'all .25s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:after': {
    content: '',
    position: 'relative',
    width: 6,
    height: 6,
    backgroundColor: '$dots',
    borderRadius: '50%',
    transition: 'all .25s ease'
  },

  '&:hover': {
    '&:after': {
      width: 14,
      height: 14,
      backgroundColor: '$primary',
    },
  }
});
