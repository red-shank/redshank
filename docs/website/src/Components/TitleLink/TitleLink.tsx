import { Text } from '@nextui-org/react';
import { useMemo } from 'react';

type TitleProps = {
  children: string;
  className?: string;
};

const TitleLink = ({ children, className = '', ...props }: TitleProps) => {
  const text = useMemo(() => {
    return children.replace(':', '');
  }, [children]);

  const id = useMemo(() => {
    const textLower = text.toLowerCase();
    return textLower.split(' ').join('-');
  }, [text]);

  return (
    <Text
      b
      h2
      size="$2xl"
      id={id}
      className={`${className} mt-12 linked-heading scroll-mt-24`}
      data-name={text}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TitleLink;
