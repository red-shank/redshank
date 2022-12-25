import { useRef, useState } from 'react';
import { Image } from '@nextui-org/react';

import { PlayIcon } from '@/Components/Icons';
import {
  FrameBorderStyle,
  FramePlayStyle,
  FrameStyle,
  FrameVideoStyle
} from './style';

type FrameProps = {
  src: string;
  isVideo?: boolean;
  css?: any;
};

const Frame = ({ isVideo, src, css }: FrameProps) => {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onPlay = () => {
    // e?.stopPropagation && e.stopPropagation();
    videoRef?.current && videoRef?.current?.play();
  };

  const onPause = () => {
    videoRef?.current && videoRef?.current?.pause();
  };

  const onToggle = () => {
    if (isPaused) {
      onPlay();
    } else {
      onPause();
    }
  };

  const onPlaying = () => {
    setIsPaused(false);
  };

  const onStopping = () => {
    setIsPaused(true);
  };

  return (
    <FrameStyle css={css}>
      <FrameBorderStyle
        onClick={onToggle}
        width="100%"
        height="100%"
        src="/assets/frame-i14.png"
      />

      {isVideo ? (
        <>
          <FrameVideoStyle
            ref={videoRef}
            onPlaying={onPlaying}
            onPause={onStopping}
            width="100%"
            height="100%"
          >
            <source src={src} />
          </FrameVideoStyle>
          {isPaused && (
            <FramePlayStyle onClick={onPlay} auto icon={<PlayIcon />} />
          )}
        </>
      ) : (
        <Image
          css={{ padding: 12, borderRadius: 40 }}
          objectFit="cover"
          width="100%"
          height="100%"
          src={src}
          alt=""
        />
      )}
    </FrameStyle>
  );
};

export default Frame;
