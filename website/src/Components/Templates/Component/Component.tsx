import { Text } from '@nextui-org/react';
import { MDXRemote } from 'next-mdx-remote';
import * as Components from '@nextui-org/react';

import Title from '@/Components/Title';
import componentsContent from '@/content/content';
import MDXComponents from '@/Components/MDXComponents';

import { WrapperStyle } from './style';

const components = {
  ...Components,
  ...MDXComponents
};

const scope = {
  // Markdown content
  ...componentsContent
};

export type ComponentProps = {
  title: string;
  description: string;
  source: any;
};

const ComponentTemplate = ({ title, description, source }: ComponentProps) => {
  return (
    <WrapperStyle>
      <Title>{title}</Title>
      <Text>{description}</Text>

      {source && (
        <MDXRemote {...source} components={components} scope={scope} />
      )}
    </WrapperStyle>
  );
};
export default ComponentTemplate;
