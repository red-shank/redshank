import { withThemeProvider } from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode = withThemeProvider(`<DatePicker/>`, {
  package: ['DatePicker']
});

export const modes = withThemeProvider(
  `<DatePicker />
          <DatePicker mode="time" />
          <DatePicker mode="datetime" />`,
  { package: ['DatePicker'] }
);

export const format = withThemeProvider(
  `<DatePicker format="DD MMM YYYY" />
          <DatePicker format="YYYY-MM-DDD" />
          <DatePicker format="YYYY MM DD" />`,
  { package: ['DatePicker'] }
);

export const locales = `import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/pt';
import { DatePicker, Box, Title } from '${PACKAGE_NAME}';

export default function App() {
  return (
    <Box>
      <Box>
         <Title level={6}>Spanish</Title>
         <DatePicker locale="es" />
      </Box>

      <Box>
        <Title level={6}>France</Title>
        <DatePicker locale="fr" />
      </Box>

      <Box>
        <Title level={6}>Portuguese</Title>
        <DatePicker locale="pr" />
      </Box>
    </Box>
  );
}`;
