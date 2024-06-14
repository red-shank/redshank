import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode = generateCode(
  `import { Center, Avatar } from "${PACKAGE_NAME}";

export default function App() {
  return (
    <Center flex={1}>
        <Avatar
          size={75}
          src={"https://i.pinimg.com/736x/8b/28/c8/8b28c857a9103b63efe150977668674a.jpg"}
        />
    </Center>
  );
}`,
  [],
  { withStyles: false }
);
