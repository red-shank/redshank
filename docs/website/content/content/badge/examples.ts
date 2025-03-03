import {
  withThemeProvider,
  generateCodeWithProvider
} from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Badge content="DEFAULT" />
          <Badge content="9+" background="error" />`,
  {
    package: ['Badge']
  }
);

export const sizes = withThemeProvider(
  `<Badge content="Large" size="large" />
          <Badge content="Middle" />
          <Badge content="Small" size="small" />`,
  {
    package: ['Badge']
  }
);

export const dotVariants = withThemeProvider(
  `<Text>
            <Badge variant="dot" /> Default
          </Text>
          <Text>
            <Badge variant="dot" background="primary" /> Primary
          </Text>
          <Text>
            <Badge variant="dot" background="success" /> Success
          </Text>`,
  {
    package: ['Badge', 'Text']
  }
);

export const bordered = withThemeProvider(
  `<Badge content="Default" variant="bordered" />
          <Badge
            content="Primary"
            variant="bordered"
            background="primary"
          />
          <Badge
            variant="bordered"
            content="Secondary"
            background="secondary"
          />`,
  {
    package: ['Badge']
  }
);

export const flatAndPressable = withThemeProvider(
  `<Badge isPressable content="Default" variant="flat" />
          <Badge
            isPressable
            content="Primary"
            background="primary"
            variant="flat"
          />
          <Badge
            isPressable
            variant="flat"
            content="Secondary"
            background="secondary"
          />`,
  {
    package: ['Badge']
  }
);

export const square = withThemeProvider(
  `<Badge content="9+" background="error" type="square" />
          <Badge content="PRIMARY" background="primary" type="square" />`,
  {
    package: ['Badge']
  }
);

export const solidBordered = withThemeProvider(
  `<Badge variant="dot" disableOutline={false} />
          <Badge
            content="9+"
            background="error"
            disableOutline={false}
          />
          <Badge
            content="PRIMARY"
            background="primary"
            disableOutline={false}
          />`,
  {
    package: ['Badge']
  }
);

export const withChildren = withThemeProvider(
  `<Badge content="9+" background="error">
            <Avatar text="Hello World" />
          </Badge>
          <Badge variant="dot" background="error">
            <Avatar text="Hello World" />
          </Badge>`,
  {
    package: ['Badge', 'Avatar']
  }
);

export const placement = withThemeProvider(
  `<Badge content="9+" background="error">
            <Avatar text="Hello World" />
          </Badge>

          <Badge
            content="9+"
            background="error"
            placement="bottom-right"
          >
            <Avatar text="Hello World" />
          </Badge>

          <Badge
            content="9+"
            background="error"
            placement="top-left"
          >
            <Avatar text="Hello World" />
          </Badge>

          <Badge
            content="9+"
            background="error"
            placement="bottom-left"
          >
            <Avatar text="Hello World" />
          </Badge>

          <Badge
            variant="dot"
            background="error"
            size="small"
          >
            <Avatar text="Hello World" />
          </Badge>

          <Badge
            variant="dot"
            background="success"
            placement="bottom-right"
            size="middle"
          >
            <Avatar text="Hello World" />
          </Badge>

          <Badge
            variant="dot"
            background="error"
            placement="top-left"
          >
            <Avatar text="Hello World" />
          </Badge>

          <Badge
            variant="dot"
            background="error"
            placement="bottom-left"
            size="large"
          >
            <Avatar text="Hello World" />
          </Badge>`,
  {
    package: ['Badge', 'Avatar']
  }
);

export const enableShadow = withThemeProvider(
  `<Badge content="With Shadow" enableShadow />
          <Badge content="9+" background="error" enableShadow />`,
  { package: ['Badge'] }
);

export const withToggle = withThemeProvider(
  `<Badge
            content="9+"
            size="small"
            background="error"
            isInvisible={visibleBadge}
          >
            <TouchableOpacity
              onPress={() => setVisibleBadge((prev) => !prev)}
            >
              <Icon
                size={40}
                type="feather"
                name="shopping-cart"
              />
            </TouchableOpacity>
          </Badge>
          <Text size={12}>Press icon of shopping car</Text>`,
  {
    hooks: `const [visibleBadge, setVisibleBadge] = useState(true);`,
    react: ['useState'],
    native: ['TouchableOpacity'],
    package: ['Badge', 'Icon', 'Text'],
    icons: [
      {
        key: 'feather',
        value: 'Feather'
      }
    ]
  }
);
