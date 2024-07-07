import { withThemeProvider } from '@/content/utils/generateCode';

const header = `
const variants: TabsVariant[] = ["solid", "underlined", "bordered", "light"];

const sizes: SizeType[] = ["small", "middle", "large"];

const tabs = [
  {
    key: "tab-1",
    label: "Tab 1",
    children: (
      <Box>
        <Title level={4}>Title here</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum magnam
          maiores natus odio quasi, sint? Accusamus alias architecto culpa dicta
          doloribus laboriosam laudantium natus odit possimus, quod ratione
          reprehenderit sint.
        </Text>
      </Box>
    ),
  },
  {
    key: "tab-2",
    label: "Tab 2",
    children: <Text>Tab 2</Text>,
  },
  {
    key: "tab-3",
    label: "Tab 3",
    children: <Text>Tab 3</Text>,
  },
];
`;

export const defaultCode = withThemeProvider(
  `{variants.map((item) => (
            <Box key={item}>
              <Title level={5} mt={2}>
                {item}
              </Title>
              <Tabs variant={item} items={tabs} />
            </Box>
          ))}`,
  {
    header,
    package: ['Tabs', 'Title', 'Box', 'Text', 'TabsVariant', 'SizeType']
  }
);

export const sizes = withThemeProvider(
  `{sizes.map((item) => (
            <Box key={item}>
              <Title level={5} mt={2}>
                {item}
              </Title>
              <Tabs size={item} items={tabs} />
            </Box>
          ))}`,
  {
    header,
    package: ['Tabs', 'Title', 'Box', 'Text', 'TabsVariant', 'SizeType']
  }
);

export const withIcons = withThemeProvider(
  `<Tabs
            defaultActiveKey={tabs[0].key}
            items={tabs.map((item, index) => ({
              ...item,
              startAdornment: <Text>🚀</Text>,
              endAdornment:
                index === 0 ? (
                  <Badge content="1" size="small" background="error"/>
                ) : null,
            }))}
          />`,
  {
    header,
    package: ['Tabs', 'Title', 'Box', 'Text', 'Badge', 'TabsVariant', 'SizeType']
  }
);

export const custom = withThemeProvider(
  `<Tabs
            scrollable
            items={tabs}
            defaultActiveKey={tabs[0].key}
            renderTabItem={({ key, label, onPress, isActive }) => {
              return (
                <Ripple
                  p={2}
                  mr={2}
                  key={key}
                  flexShrink={0}
                  borderRadius={2}
                  onPress={onPress}
                  backgroundColor={
                    isActive ? 'primary' : "rgba(100, 100, 100, .3)"
                  }
                >
                  <Text
                    px={5}
                    align="center"
                    borderWidth={0}
                    color={isActive ? "white" : "text"}
                    borderBottomColor="rgba(100, 100, 100, .3)"
                  >
                    {label}
                  </Text>
                  <Text
                    p={1}
                    size="lg"
                    align="center"
                    fontWeight="bold"
                    textAlign="center"
                    color={isActive ? "white" : "text"}
                  >
                    {key}
                  </Text>
                </Ripple>
              );
            }}
          />`,
  {
    header,
    package: ['Tabs', 'Title', 'Box', 'Text', 'Touchable', 'TabsVariant', 'SizeType']
  }
);
