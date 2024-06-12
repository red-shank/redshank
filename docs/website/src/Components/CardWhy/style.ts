import { styled, Text } from '@nextui-org/react';

export const CardStyle = styled('article', {
  background: '$backgroundContrast',
  borderRadius: '$md',
  boxShadow: '0 5px 40px rgba(0,0,0,.2)'
});

export const CardTitleStyle = styled(Text, {
  display: 'flex',
  alignItems: 'center',
});

export const IconStyle = styled('span', {
  color: '$text',
  padding: 5,
  width: 28,
  height: 28,
  marginRight: 5,
  fontSize: '$xl',
  borderRadius: 5,
  background: '#894cff30'
});
