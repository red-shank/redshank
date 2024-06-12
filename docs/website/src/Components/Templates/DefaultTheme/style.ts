import { styled } from '@nextui-org/react';

export const WrapperStyle = styled('div', {});

export const ColorStyle = styled('article', {
  transition: 'opacity 0.2s ease-out',
  '&:hover': {
    opacity: 0.5,
  }
});
