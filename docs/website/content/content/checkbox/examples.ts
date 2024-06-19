import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Checkbox value={true} />
          <Checkbox label="I'm agree" />`,
  {
    package: ['Checkbox']
  }
);

export const type = withThemeProvider(
  `<Checkbox
            label="Check"
            type="square"
            defaultValue={true}
          />
          <Checkbox
           label="Check"
           type="circle"
           defaultValue={true}
         />`,
  {
    package: ['Checkbox']
  }
);

export const required = withThemeProvider(
  `<Checkbox
            required
            label="Required field"
          />`,
  {
    package: ['Checkbox']
  }
);

export const sizes = withThemeProvider(
  `<Checkbox
            size="small"
            label="Small"
          />
          <Checkbox
            size="middle"
            label="Middle (Default)"
          />
          <Checkbox
            size="large"
            label="Large"
          />`,
  {
    package: ['Checkbox']
  }
);

export const customize = withThemeProvider(
  `<Checkbox
            activeColor="warning"
            inactiveColor="secondary"
            label="Customize Colors"
          />`,
  {
    package: ['Checkbox']
  }
);

export const withErrors = withThemeProvider(
  `<Checkbox
            label="Check"
            error="Please checked field."
          />`,
  {
    package: ['Checkbox']
  }
);
