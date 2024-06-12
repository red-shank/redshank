export const PlayIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 160 160"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <filter
          id="icon-play_svg__a"
          width="160%"
          height="148%"
          x="-30%"
          y="-21%"
          filterUnits="objectBoundingBox"
          fill="currentColor"
        >
          <feOffset
            dy="3"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="7.5"
          ></feGaussianBlur>
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          ></feComposite>
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.0862745098 0 0 0 0 0.0941176471 0 0 0 0 0.137254902 0 0 0 0.3 0"
          ></feColorMatrix>
        </filter>
        <path
          id="icon-play_svg__b"
          d="M77.5 45.352C72.222 42.016 10.833 2.812 7.778.866 3.888-1.636 0 1.7 0 5.592v88.973c0 4.449 4.166 6.673 7.5 4.727 4.444-2.78 66.111-41.984 70-44.486 3.333-2.225 3.333-7.508 0-9.454z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(40 30)">
        <use
          fill="#000"
          filter="url(#icon-play_svg__a)"
          xlinkHref="#icon-play_svg__b"
        ></use>
        <use
          fill="#FFF"
          fillOpacity="0.75"
          xlinkHref="#icon-play_svg__b"
        ></use>
      </g>
    </svg>
  );
};
