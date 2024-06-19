import { withThemeProvider } from '@/content/utils/generateCode';

const header = `
const items = [
  {
    key: '1',
    image:
      'https://elviajerofeliz.com/wp-content/uploads/2015/09/paisajes-de-Canada.jpg',
  },
  {
    key: '2',
    image:
      'https://haciendofotos.com/wp-content/uploads/las-mejores-fotos-de-paisajes-2020.jpg',
  },
  {
    key: '3',
    image:
      'https://www.fotonostra.com/fotografia/fotos/fotografiarpaisajes.jpg',
  },
];
`;

export const defaultCode = withThemeProvider(
  `<Carousel>
            {items.map(({ key, image }) => (
                <Box
                  key={key}
                  height={200}
                  borderRadius={1.5}
                >
                  <Image
                    source={image}
                    style={{ width: '100%', height: '100%', borderRadius: 12 }}
                  />
                </Box>
              ))}
          </Carousel>`,
  {
    header,
    package: ['Carousel', 'Image', 'Box']
  }
);
