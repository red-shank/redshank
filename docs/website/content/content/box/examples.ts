import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode = generateCode(
  `import { Box, Avatar } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <Box flex={1} bg="secondary" borderRadius={1}>
        <Avatar
          size={75}
          src={"https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg"}
        />
    </Box>
  );
}`,
  [],
  { withStyles: false }
);
