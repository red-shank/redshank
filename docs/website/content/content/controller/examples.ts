import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(`<Controller/>`, {
  package: ['Controller']
});

export const maxAndMin = withThemeProvider(
  `<Controller max={5} min={2} />
          <Controller
            max={3}
            min={1}
            maxOverflow={() => alert('Only more that 1')}
            minOverflow={() => alert('Only less that 3')}
          />`,
  { package: ['Controller'] }
);

export const customize = withThemeProvider(
  `<Controller borderColor="success" color="warning" />`,
  { package: ['Controller'] }
);
