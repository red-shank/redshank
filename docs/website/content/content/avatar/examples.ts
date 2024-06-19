import { withThemeProvider } from '@/content/utils/generateCode';

export const text = withThemeProvider(
  `<Avatar text="Kevin Rivas" />`,
  {
    package: ['Avatar']
  }
);

export const colorAndSize = withThemeProvider(
  `<Avatar
            size={80}
            textColor="white"
            color="secondary"
            text="Beauty Design"
          />`,
  {
    package: ['Avatar']
  }
);

export const type = withThemeProvider(
  `<Avatar type="square" text="Kevin Rivas" />
          <Avatar type="circle" text="Kevin Rivas" />`,
  {
    package: ['Avatar']
  }
);

export const image = withThemeProvider(
  `<Avatar
            size={65}
            src="https://i.imgur.com/bnip2HZ.png"
          />
          <Avatar
            size={65}
            type="square"
            src="https://i.imgur.com/bnip2HZ.png"
          />
          <Avatar
            size={65}
            type="circle"
            src="https://i.imgur.com/bnip2HZ.png"
          />`,
  {
    package: ['Avatar']
  }
);

export const countText = withThemeProvider(
  `<Avatar
            size={65}
            showCountText={1}
            text="Beauty Design"
          />
          <Avatar
            size={65}
            showCountText={2}
            text="Beauty Design"
          />
          <Avatar
            size={65}
            showCountText={5}
            text="Beauty Design"
          />
          <Avatar
            size={65}
            showCountText="all"
            text="Beauty"
          />`,
  {
    package: ['Avatar']
  }
);

export const pressable = withThemeProvider(
  `<Avatar
            size={65}
            onPress={() => alert("On press here!")}
            src="https://www.redshank.app/brand.svg"
          />`,
  {
    package: ['Avatar']
  }
);

export const icons = withThemeProvider(
  `<Avatar
            icon={{
              name: 'user',
              type: 'antdesign',
            }}
          />
          <Avatar
            size={50}
            icon={{
              size: 30,
              type: 'fontisto',
              name: 'user-secret',
            }}
          />
          <Avatar
            size={65}
            icon={{
              size: 35,
              name: 'user',
              type: 'font-awesome-5',
            }}
          />`,
  {
    package: ['Avatar']
  }
);
