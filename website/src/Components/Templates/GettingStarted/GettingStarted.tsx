import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import BlockCode from '@/Components/BlockCode';

import { WrapperStyle } from './style';
import TitleLink from '@/Components/TitleLink';
import { PACKAGE_NAME, REPO_NAME } from '@/config';

const HomeTemplate = () => {
  return (
    <WrapperStyle>
      <Title>Getting started</Title>
      <Text>
        Welcome to the <Text as="strong">{PACKAGE_NAME}</Text> documentation!{' '}
        <Text as="strong">@{REPO_NAME}</Text> allows you to make beautiful,
        modern, and fast mobile/applications regardless of your design
        experience, created with React and React Native.
      </Text>

      <TitleLink className="mt-12">Installation:</TitleLink>

      <Text>
        {`Inside your React project directory, install ${PACKAGE_NAME} by running either of the following:`}
      </Text>

      <BlockCode
        className="mt-4"
        language="bash"
        code={`expo install ${PACKAGE_NAME}`}
      />
      <BlockCode language="bash" code={`yarn add ${PACKAGE_NAME}`} />
      <BlockCode language="bash" code={`npm install ${PACKAGE_NAME}`} />
    </WrapperStyle>
  );
};
export default HomeTemplate;
