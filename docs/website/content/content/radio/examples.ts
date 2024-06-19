import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Radio.Group>
            <Radio label="Yes" value="yes" />
            <Radio label="No" value="no" />
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>`,
  {
    package: ['Radio']
  }
);

export const orientation = withThemeProvider(
  `<Radio.Group align="vertical">
            <Radio label="Yes" value="yes" />
            <Radio label="No" value="no" />
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>`,
  {
    package: ['Radio']
  }
);

export const types = withThemeProvider(
  `<Box>
            <Title level={3}>Circle</Title>
            <Radio.Group type="circle">
              <Radio label="Yes" value="yes" />
              <Radio label="No" value="no" />
              <Radio label="Maybe" value="maybe" />
            </Radio.Group>
          </Box>
          <Box>
            <Title level={3}>Square</Title>
            <Radio.Group type="square">
              <Radio label="Yes" value="yes" />
              <Radio label="No" value="no" />
              <Radio label="Maybe" value="maybe" />
            </Radio.Group>
          </Box>
          <Box>
            <Title level={3}>Mix</Title>
            <Radio.Group>
              <Radio label="Yes" value="yes" type="circle" />
              <Radio label="No" value="no" type="square"/>
              <Radio label="Maybe" value="maybe" />
            </Radio.Group>
          </Box>`,
  {
    package: ['Radio', 'Box', 'Title']
  }
);

export const sizes = withThemeProvider(
  `<Box>
            <Title level={3}>Small</Title>
            <Radio.Group size="small">
              <Radio label="Yes" value="yes" />
              <Radio label="No" value="no" />
              <Radio label="Maybe" value="maybe" />
            </Radio.Group>
          </Box>
          <Box>
            <Title level={3}>Middle</Title>
            <Radio.Group size="middle">
              <Radio label="Yes" value="yes" />
              <Radio label="No" value="no" />
              <Radio label="Maybe" value="maybe" />
            </Radio.Group>
          </Box>
          <Box>
            <Title level={3}>Large</Title>
            <Radio.Group size="large">
              <Radio label="Yes" value="yes" />
              <Radio label="No" value="no" />
              <Radio label="Maybe" value="maybe" />
            </Radio.Group>
          </Box>`,
  {
    package: ['Radio', 'Box', 'Title']
  }
);

export const manualError = withThemeProvider(
  `<Radio.Group error textError="This is a error">
            <Radio label="Yes" value="yes" />
            <Radio label="No" value="no" />
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>`,
  {
    package: ['Radio']
  }
);

export const customize = withThemeProvider(
  `<Radio.Group activeColor="success" inactiveColor="warning" >
            <Radio label="Yes" value="yes" />
            <Radio label="No" value="no" />
            <Radio label="Maybe" value="maybe" />
          </Radio.Group>`,
  {
    package: ['Radio']
  }
);
