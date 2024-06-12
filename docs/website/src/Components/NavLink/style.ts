import { styled } from '@nextui-org/react';
import Link from 'next/link';

export const ItemStyle = styled(Link, {
  position: 'relative',
  paddingLeft: '$space9',
  paddingRight: '$space9',
  height: '$space14',
  display: 'flex',
  alignItems: 'center',
});
