import { withThemeProvider } from '@/content/utils/generateCode';

export default withThemeProvider(
  `<Button
            icon={
              <Icon
                color="yellow400"
                type="antdesign"
                name="smile-circle"
              />
            }
          >
            Icon
          </Button>
          <Button
            prefix={
              <Icon
                color="error"
                type="antdesign"
                name="heart"
              />
            }
          >
            Prefix
          </Button>
          <Button
            suffix={
              <Icon
                size={25}
                type="antdesign"
                name="like1"
              />
            }
          >
            Suffix
          </Button>`,
  {
    package: ['Button', 'Icon']
  }
);
