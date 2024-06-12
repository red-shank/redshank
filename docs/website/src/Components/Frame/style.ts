import { styled, Image, Button } from '@nextui-org/react';

export const FrameStyle = styled('div', {
  position: 'relative',
  width: 280,
  height: 558
});

export const FrameBorderStyle = styled(Image, {
  position: 'absolute',
  zIndex: '$zIndices$1'
});

export const FrameVideoStyle = styled('video', {
  width: '100%',
  height: '100%',
  padding: 12,
  borderRadius: 40
});

export const FramePlayStyle = styled(Button, {
  position: 'absolute',
  zIndex: '$zIndices$1',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',
  padding: 0,
  height: '50px !important',
  width: '50px !important',
  fontSize: '$6xl !important',
  backgroundColor: 'transparent !important',
  color: '$text !important',
});
