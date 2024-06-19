import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Collapse>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <Box>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </Box>
            </Collapse.Panel>
          </Collapse>`,
  {
    package: ['Collapse', 'Title', 'Text', 'Box']
  }
);

export const withoutAccordion = withThemeProvider(
  `<Collapse accordion={false}>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <Box>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </Box>
            </Collapse.Panel>
          </Collapse>`,
  {
    package: ['Collapse', 'Title', 'Text', 'Box']
  }
);

export const withSubTitle = withThemeProvider(
  `<Collapse accordion={false}>
            <Collapse.Panel
              id="1"
              title="Panel 1"
              subTitle="This is s subtitle"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel
              id="2"
              title="Panel 2"
              subTitle="This is s subtitle"
            >
              <Box>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </Box>
            </Collapse.Panel>
          </Collapse>`,
  {
    package: ['Collapse', 'Title', 'Text', 'Box']
  }
);

export const nestedCollapse = withThemeProvider(
  `<Collapse>
            <Collapse.Panel title="Panel 1" id="1">
              <Collapse accordion={false}>
                <Collapse.Panel title="Panel 1" id="1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Ducimus eum maiores molestiae molestias neque,
                  quas qui voluptatum. A aliquam aliquid at dolores fuga
                  impedit necessitatibus nisi totam ullam ut, voluptate.
                </Collapse.Panel>
                <Collapse.Panel title="Personal Info" id="2">
                  <Box>
                    <Title level={3}>Hi Kevin!</Title>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Ducimus eum maiores
                      molestiae molestias neque, quas qui voluptatum.
                      A aliquam aliquid at dolores fuga impedit
                      necessitatibus nisi totam ullam ut, voluptate.
                    </Text>
                  </Box>
                </Collapse.Panel>
              </Collapse>
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <Box>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </Box>
            </Collapse.Panel>
          </Collapse>`,
  {
    package: ['Collapse', 'Title', 'Text', 'Box']
  }
);

export const customIcon = withThemeProvider(
  `<Collapse
            icon={
              <Icon
                size={18}
                type="material"
                name="wb-sunny"
              />
            }
          >
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <Box>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </Box>
            </Collapse.Panel>
          </Collapse>`,
  {
    package: ['Collapse', 'Title', 'Text', 'Box', 'Icon']
  }
);

export const borderless = withThemeProvider(
  `<Collapse borderless>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <Box>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </Box>
            </Collapse.Panel>
          </Collapse>`,
  {
    package: ['Collapse', 'Title', 'Text', 'Box']
  }
);

export const showArrow = withThemeProvider(
  `<Collapse borderless showArrow={false}>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <Box>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </Box>
            </Collapse.Panel>
          </Collapse>`,
  {
    package: ['Collapse', 'Title', 'Text', 'Box']
  }
);

export const openKeys = withThemeProvider(
  `<Collapse openKeys={['1']} onChange={handlerOpenKey}>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <Box>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </Box>
            </Collapse.Panel>
          </Collapse>`,
  {
    header: `
    const handlerOpenKey = (key: string | number) => {
      console.log(key);
    }
  `,
    package: ['Collapse', 'Title', 'Text', 'Box']
  }
);

export const disabled = withThemeProvider(
  `<Collapse>
            <Collapse.Panel title="Panel 1" id="1" disabled>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Panel 2" id="2" disabled>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="3">
              <Box>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </Box>
            </Collapse.Panel>
          </Collapse>`,
  {
    package: ['Collapse', 'Title', 'Text', 'Box']
  }
);
