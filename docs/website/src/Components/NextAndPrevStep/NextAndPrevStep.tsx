import React from 'react';
import Link from 'next/link';
import { Text } from '@nextui-org/react';

import { LefttIcon, RightIcon } from '@/Components/Icons';
import { StyleContent, StyleIcon, StyleNext } from './style';

interface IProps {
  href?: string;
  title?: string;
  isPrev?: boolean;
}

const NextAndPrevStep = ({ href, title, isPrev }: IProps) => {
  return (
    <Link href={href || ''}>
      <StyleNext className="block shrink-0 py-1 px-4 bg-cyan-900 text-white cursor-pointer transition mb-5 rounded-3xl hover:bg-cyan-800">
        <StyleContent className="flex items-center">
          {isPrev && (
            <StyleIcon>
              <LefttIcon />
            </StyleIcon>
          )}
          <Text className="mx-1 text-current">{title}</Text>
          {!isPrev && (
            <StyleIcon>
              <RightIcon />
            </StyleIcon>
          )}
        </StyleContent>
      </StyleNext>
    </Link>
  );
};

export default NextAndPrevStep;
