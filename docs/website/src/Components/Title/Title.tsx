import { Text, TextProps } from '@nextui-org/react';

type TitleProps = TextProps & {
  withMaxWidth?: boolean;
  level?: 1 | 2;
};

const Title = ({
  children,
  withMaxWidth,
  h1,
  h2 = !h1,
  level = 1,
  className = '',
  css = {},
  ...props
}: TitleProps) => {
  if (level === 2) {
    return (
      <Text
        h3
        b
        size="$2xl"
        className={className}
      >
        {children}
      </Text>
    );
  }
  return (
    <Text
      h1={h1}
      h2={h2}
      weight="extrabold"
      className={className}
      css={{
        lineHeight: '$sm',
        maxWidth: withMaxWidth ? 700 : 'auto',
        fontSize: '$5xl',
        '@sm': {
          fontSize: '$6xl'
        },
        ...css
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default Title;
