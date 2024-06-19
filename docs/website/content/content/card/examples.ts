import { withThemeProvider } from '@/content/utils/generateCode';

const expandContent = `
const ExpandContent = () => (
  <Box>
    <Title marginBottom={0} level={3}>
      Title here
    </Title>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
      assumenda blanditiis distinctio dolore dolorem eum hic illum ipsa laborum
      nam nemo nesciunt optio, quasi quo sequi similique soluta tempora!
    </Text>
    <Button withMarginBottom>
      Start up
    </Button>
  </Box>
);
`;
export const defaultCode = withThemeProvider(
  `<Card isPressable>
            <Image
              height={150}
              style={{
                borderRadius: 20,
              }}
              source="https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg"
            />
          </Card>`,
  {
    package: ['Card', 'Image']
  }
);
export const absoluteCard = withThemeProvider(
  `<Card expandContent={<ExpandContent />}>
            <Card.Header isAbsolute>
              <Title marginBottom={0} level={3}>
                Absolute
              </Title>
              <Text>This is a Fox</Text>
            </Card.Header>
            <Card.Body>
              <Image
                height={250}
                style={{ borderRadius: 20 }}
                source={{
                  uri: 'https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg',
                }}
              />
            </Card.Body>
            <Card.Footer isAbsolute>
              <Text>This is a footer</Text>
            </Card.Footer>
          </Card>`,
  {
    header: expandContent,
    package: ['Card', 'Image', 'Title', 'Text', 'Box', 'Button']
  }
);

export const expandableCard = withThemeProvider(
  `<Card expandContent={<ExpandContent />}>
            <Card.Header>
              <Title marginBottom={0} level={3}>
                Default
              </Title>
              <Text>This is a Fox</Text>
            </Card.Header>
            <Image
              height={250}
              source="https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg"
            />
            <Card.Footer>
              <Text>This is a footer</Text>
            </Card.Footer>
          </Card>`,
  {
    header: expandContent,
    package: ['Card', 'Image', 'Title', 'Text', 'Button', 'Box']
  }
);

export const exampleCard = withThemeProvider(
  `<Card>
            <Card.Header isAbsolute={false} style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
              <Avatar text="Avatar" />
              <Box ml={1}>
                <Title marginBottom={0} level={3}>
                  Fox
                </Title>
                <Text>This is an Animal</Text>
              </Box>
            </Card.Header>
            <Card.Body withPadding>
              <Text>
                Make beautiful websites regardless of your design experience.
              </Text>
            </Card.Body>
            <Card.Footer>
              <Button type="link">Visit source code on GitHub.</Button>
            </Card.Footer>
          </Card>`,
  {
    package: ['Card', 'Avatar', 'Title', 'Text', 'Button', 'Box']
  }
);

export const withBorder = withThemeProvider(
  `<Card withBorder>
            <Card.Header isAbsolute={false}>
              <Title marginBottom={0} level={3}>
                With Border
              </Title>
              <Text>This is an Animal</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body withPadding>
              <Text>
                Make beautiful websites
                regardless of your design experience.
              </Text>
            </Card.Body>
          </Card>`,
  {
    package: ['Card', 'Title', 'Text']
  }
);
