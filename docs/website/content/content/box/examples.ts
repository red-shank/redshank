import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Box
            p={1}
            gap={2}
            bg="card"
            borderRadius={1}
            flexDirection="row"
          >
            <Avatar
              size={75}
              src={"https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg"}
            />

            <Box>
              <Text bold>John Doe</Text>
              <Text>Software Engineer</Text>
            </Box>
          </Box>`,
  {
    package: ['Box', 'Avatar', 'Text']
  }
);
