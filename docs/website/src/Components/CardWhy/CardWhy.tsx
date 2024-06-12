import { ReactNode } from 'react';
import { Text } from '@nextui-org/react';

import { CardStyle, CardTitleStyle, IconStyle } from './style';

type CardWhyProps = {
  title: string;
  content: string;
  icon: ReactNode;
};

const CardWhy = ({ content, title, icon }: CardWhyProps) => {
  return (
    <CardStyle className="p-4 w-full transition-all border-transparent border-solid border-2 hover:border-indigo-500">
      <CardTitleStyle className="mb-3" as="div">
        <IconStyle className="flex justify-center items-center">
          {icon}
        </IconStyle>
        <Text b color="primary">
          {title}
        </Text>
      </CardTitleStyle>

      <Text>{content}</Text>
    </CardStyle>
  );
};

export default CardWhy;
