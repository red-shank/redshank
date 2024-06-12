import { styled } from '@nextui-org/react';

export const WrapperStyle = styled('div', {
  zIndex: '$zIndices$1',
});

export const AsideStyle = styled('aside', {
  'scrollbar-width': 'none',
  '&::-webkit-scrollbar': {
    width: 5
  },
  '&::-webkit-scrollbar-track': {
    background: '$backgroundAlpha'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$border'
  }
});

export const BodyStyle = styled('main', {});

export const ContentStyle = styled('div', {});

export const BreadStyle = styled('div', {
  'scrollbar-width': 'none',
  '&::-webkit-scrollbar': {
    width: 5
  },
  '&::-webkit-scrollbar-track': {
    background: '$backgroundAlpha'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$border'
  }
});
