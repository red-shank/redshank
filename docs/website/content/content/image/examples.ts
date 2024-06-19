import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Image
          height={200}
          source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />`,
  {
    package: ['Image']
  }
);

export const resizeMode = withThemeProvider(
  `<Image
            height={200}
            resizeMode="cover"
            source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <Image
            height={200}
            resizeMode="contain"
            source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <Image
            height={200}
            resizeMode="contain"
            source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <Image
            height={200}
            resizeMode="repeat"
            source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <Image
            height={200}
            resizeMode="center"
            source="https://images.pexels.com/photos/5658529/pexels-photo-5658529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />`,
  {
    package: ['Image']
  }
);
