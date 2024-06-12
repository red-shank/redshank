import { styled } from '@nextui-org/react';
import { Player } from '@lottiefiles/react-lottie-player';

export const PlayerStyle = styled(Player, {
  height: 300,
  width: 300,
  maxWidth: '100%',
  margin: 'auto',

  '@sm': {
    width: 500,
    height: 400
  }
});
