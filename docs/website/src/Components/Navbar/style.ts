import { styled } from '@nextui-org/react';
import Link from 'next/link';

const media = '@media screen and (min-width: 1100px)';
const media2 = '@media screen and (min-width: 470px)';

export const onlyMobile = {
  '@initial': {
    display: 'block'
  },
  [media]: {
    display: 'none !important'
  }
};

export const onlyMdMobile = {
  display: 'none !important',
  [media2]: {
    display: 'flex !important'
  }
};

export const onlyDesk = {
  display: 'none',
  [media]: {
    display: 'flex !important',
    alignItems: 'center'
  }
};

export const AStyle = styled(Link, {});
