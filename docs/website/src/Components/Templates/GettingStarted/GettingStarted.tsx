import { Code, Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import BlockCode from '@/Components/BlockCode';

import { WrapperStyle } from './style';
import TitleLink from '@/Components/TitleLink';
import { PACKAGE_NAME, REPO_NAME } from '@/config';

const BasicConfigurations = `import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        ...
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
`;

const FullConfiguration = `import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  IconType,
  MessageProvider,
  ScreenLoadingProvider,
  ThemeProvider as RThemeProvider
} from '${PACKAGE_NAME}';
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  Fontisto
} from '@expo/vector-icons';

const iconsPack = new Map<IconType, any>();

iconsPack.set('material-design-icons', MaterialIcons);
iconsPack.set('antd', AntDesign);
iconsPack.set('ionicons', Ionicons);
iconsPack.set('fontisto', Fontisto);

export default function App() {
  return (
    <SafeAreaProvider>
      <RThemeProvider packs={iconsPack}>
        <ScreenLoadingProvider>
          <MessageProvider>
            ...
          </MessageProvider>
        </ScreenLoadingProvider>
      </RThemeProvider>
    </SafeAreaProvider>
  );
}
`;

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
        code={`expo install ${PACKAGE_NAME} react-native-safe-area-context react-native-svg`}
      />
      <BlockCode
        language="bash"
        code={`yarn add ${PACKAGE_NAME} react-native-safe-area-context react-native-svg`}
      />
      <BlockCode
        language="bash"
        code={`npm install ${PACKAGE_NAME} react-native-safe-area-context react-native-svg`}
      />
      <TitleLink className="mt-12">Dependencies:</TitleLink>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.npmjs.com/package/dayjs"
          >
            dayjs@~1.x.x
          </a>{' '}
          For the Datepicker and Calendar components.
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.npmjs.com/package/@redshank/reactivity-hook-form"
          >
            @redshank/reactivity-hook-form@~1.x.x
          </a>{' '}
          For the Form component.
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.npmjs.com/package/react-native-svg"
          >
            react-native-svg@~15.0.0
          </a>{' '}
          For the internal icons and other components.
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.npmjs.com/package/react-native-safe-area-context"
            rel="noreferrer noopener"
          >
            react-native-safe-area-context@&gt;4.0.0
          </a>{' '}
          For the messages and layout component.
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.npmjs.com/package/@react-native-picker/picker"
            rel="noreferrer noopener"
          >
            @react-native-picker/picker@~2.0.0
          </a>{' '}
          For the Select component.
        </li>
      </ul>
      <TitleLink className="mt-12">Full Installation:</TitleLink>
      <BlockCode
        language="bash"
        code={`expo install ${PACKAGE_NAME} @redshank/reactivity-hook-form react-native-safe-area-context @react-native-picker/picker react-native-svg dayjs`}
      />
      <BlockCode
        language="bash"
        code={`yarn add ${PACKAGE_NAME} @redshank/reactivity-hook-form react-native-safe-area-context @react-native-picker/picker react-native-svg dayjs`}
      />
      <BlockCode
        language="bash"
        code={`npm install ${PACKAGE_NAME} @redshank/reactivity-hook-form react-native-safe-area-context @react-native-picker/picker react-native-svg dayjs`}
      />
      <Text>
        And after running the installation command if you are using React native
        CLI: <Code>cd ios && pod install</Code>
      </Text>

      <TitleLink className="mt-12">Basic Configuration:</TitleLink>
      <Text>
        Not working <Code>Icon</Code>, <Code>ScreenLoading</Code> and{' '}
        <Code>useMessage</Code>
      </Text>
      <BlockCode language="typescript" code={BasicConfigurations} />

      <TitleLink className="mt-12">Full Configuration:</TitleLink>
      <Text>
        You can set icon sets for icon components at index or start point, You
        should only set the icon set you will use in your application, also you
        can set the provider for messages and screen loading:
      </Text>

      <BlockCode language="typescript" code={FullConfiguration} />
    </WrapperStyle>
  );
};

export default HomeTemplate;
