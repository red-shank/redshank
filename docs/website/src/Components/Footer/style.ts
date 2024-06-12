import { styled, Button } from '@nextui-org/react';

export const StyleFooter = styled('footer', {
  padding: 20,
  background: '$footer',
  '@sm': {
    padding: 50
  }
});

export const StyleCol = styled('div', {});

export const StyleButton = styled(Button, {
  color: '$text',
  fontWeight: '$black',

  a: {
    color: '$text',

    '&:hover': {
      textDecoration: 'underline',
    }
  }
});
