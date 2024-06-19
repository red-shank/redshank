import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<VerticalCenter flex={1}>
          <Avatar
            size={75}
            src={"https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg"}
          />
        </VerticalCenter>`,
  {
    package: ['VerticalCenter', 'Avatar']
  }
);
