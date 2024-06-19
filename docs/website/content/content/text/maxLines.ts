import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Title marginBottom={0}>Max lines Text</Title>
          <Text lines={3} marginBottom={20}>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Ab delectus, maxime. Accusantium
            adipisci aliquid cum cupiditate
            est ex expedita, labore, libero
            omnis quam quis quisquam recusandae,
            sit velit voluptas voluptatem?
          </Text>

          <Title marginBottom={0}>Read more</Title>
          <Text lines={3} readMore>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Ab delectus, maxime. Accusantium
            adipisci aliquid cum cupiditate
            est ex expedita, labore, libero
            omnis quam quis quisquam recusandae,
            sit velit voluptas voluptatem?
          </Text>`,
  {
    package: ['Text', 'Title']
  }
);
