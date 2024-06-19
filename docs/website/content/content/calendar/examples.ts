import { withThemeProvider } from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode = withThemeProvider(`<Calendar />`, {
  package: ['Calendar']
});

export const selectedDate = withThemeProvider(
  `<Calendar selected={selected} onSelected={setSelected} />
          <Text>Selected Date: {selected}</Text>`,
  {
    hooks: `const [selected, setSelected] = useState('1997-03-23');`,
    package: ['Calendar', 'Text'],
    react: ['useState']
  }
);

export const disabled = withThemeProvider(`<Calendar disabled />`, {
  package: ['Calendar']
});

export const minAndMax = withThemeProvider(
  `<Calendar
            min={now.subtract(5, 'years').toISOString()}
            max={now.add(5, 'days').toISOString()}
          />`,
  {
    header: `import dayjs from 'dayjs';

const now = dayjs();
    `,
    package: ['Calendar']
  }
);

export const locales = `import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/pt';
import { Calendar, Box, Title } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <Box>
      <Box>
         <Title level={6}>Spanish</Title>
         <Calendar locale="es" />
      </Box>

      <Box>
        <Title level={6}>France</Title>
        <Calendar locale="fr" />
      </Box>

      <Box>
        <Title level={6}>Portuguese</Title>
        <Calendar locale="pr" />
      </Box>
    </Box>
  );
}`;
