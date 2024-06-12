import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode =
  generateCode(`import { Carousel, Image } from "${PACKAGE_NAME}";

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

export default function App() {
  return (
    <View style={styles.center}>
      <Carousel>
        {items.map(({ key, image }) => (
            <View
              key={key}
              style={carouselStyles.item}
            >
              <Image
                source={image}
                style={carouselStyles.image}
              />
            </View>
          ))}
      </Carousel>
    </View>
  );
}

const carouselStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  item: {
    height: 200,
    borderRadius: 12,
  }
})
`);
