import generateCode from '@/content/utils/generateCode';

export const defaultCode =
  generateCode(`import { Collapse, Title, Text } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Collapse>
        <Collapse.Panel title="Panel 1" id="1">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ducimus eum maiores molestiae molestias neque,
          quas qui voluptatum. A aliquam aliquid at dolores fuga
          impedit necessitatibus nisi totam ullam ut, voluptate.
        </Collapse.Panel>
        <Collapse.Panel title="Personal Info" id="2">
          <View>
            <Title level={3}>Hi Kevin!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus eum maiores
              molestiae molestias neque, quas qui voluptatum.
              A aliquam aliquid at dolores fuga impedit
              necessitatibus nisi totam ullam ut, voluptate.
            </Text>
          </View>
        </Collapse.Panel>
      </Collapse>
    </View>
  );
}`);

export const withoutAccordion =
  generateCode(`import { Collapse, Title, Text } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Collapse accordion={false}>
        <Collapse.Panel title="Panel 1" id="1">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ducimus eum maiores molestiae molestias neque,
          quas qui voluptatum. A aliquam aliquid at dolores fuga
          impedit necessitatibus nisi totam ullam ut, voluptate.
        </Collapse.Panel>
        <Collapse.Panel title="Personal Info" id="2">
          <View>
            <Title level={3}>Hi Kevin!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus eum maiores
              molestiae molestias neque, quas qui voluptatum.
              A aliquam aliquid at dolores fuga impedit
              necessitatibus nisi totam ullam ut, voluptate.
            </Text>
          </View>
        </Collapse.Panel>
      </Collapse>
    </View>
  );
}`);

export const withSubTitle =
  generateCode(`import { Collapse, Title, Text } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Collapse accordion={false}>
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
          <View>
            <Title level={3}>Hi Kevin!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus eum maiores
              molestiae molestias neque, quas qui voluptatum.
              A aliquam aliquid at dolores fuga impedit
              necessitatibus nisi totam ullam ut, voluptate.
            </Text>
          </View>
        </Collapse.Panel>
      </Collapse>
    </View>
  );
}`);

export const nestedCollapse =
  generateCode(`import { Collapse, Title, Text } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Collapse>
        <Collapse.Panel title="Panel 1" id="1">
          <Collapse accordion={false}>
            <Collapse.Panel title="Panel 1" id="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Ducimus eum maiores molestiae molestias neque,
              quas qui voluptatum. A aliquam aliquid at dolores fuga
              impedit necessitatibus nisi totam ullam ut, voluptate.
            </Collapse.Panel>
            <Collapse.Panel title="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ducimus eum maiores
                  molestiae molestias neque, quas qui voluptatum.
                  A aliquam aliquid at dolores fuga impedit
                  necessitatibus nisi totam ullam ut, voluptate.
                </Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </Collapse.Panel>
        <Collapse.Panel title="Personal Info" id="2">
          <View>
            <Title level={3}>Hi Kevin!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus eum maiores
              molestiae molestias neque, quas qui voluptatum.
              A aliquam aliquid at dolores fuga impedit
              necessitatibus nisi totam ullam ut, voluptate.
            </Text>
          </View>
        </Collapse.Panel>
      </Collapse>
    </View>
  );
}`);

export const customIcon =
  generateCode(`import { Collapse, Title, Text, Icon } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Collapse
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
          <View>
            <Title level={3}>Hi Kevin!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus eum maiores
              molestiae molestias neque, quas qui voluptatum.
              A aliquam aliquid at dolores fuga impedit
              necessitatibus nisi totam ullam ut, voluptate.
            </Text>
          </View>
        </Collapse.Panel>
      </Collapse>
    </View>
  );
}`);

export const borderless =
  generateCode(`import { Collapse, Title, Text, Icon } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Collapse borderless>
        <Collapse.Panel title="Panel 1" id="1">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ducimus eum maiores molestiae molestias neque,
          quas qui voluptatum. A aliquam aliquid at dolores fuga
          impedit necessitatibus nisi totam ullam ut, voluptate.
        </Collapse.Panel>
        <Collapse.Panel title="Personal Info" id="2">
          <View>
            <Title level={3}>Hi Kevin!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus eum maiores
              molestiae molestias neque, quas qui voluptatum.
              A aliquam aliquid at dolores fuga impedit
              necessitatibus nisi totam ullam ut, voluptate.
            </Text>
          </View>
        </Collapse.Panel>
      </Collapse>
    </View>
  );
}`);

export const showArrow =
  generateCode(`import { Collapse, Title, Text, Icon } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Collapse borderless showArrow={false}>
        <Collapse.Panel title="Panel 1" id="1">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ducimus eum maiores molestiae molestias neque,
          quas qui voluptatum. A aliquam aliquid at dolores fuga
          impedit necessitatibus nisi totam ullam ut, voluptate.
        </Collapse.Panel>
        <Collapse.Panel title="Personal Info" id="2">
          <View>
            <Title level={3}>Hi Kevin!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus eum maiores
              molestiae molestias neque, quas qui voluptatum.
              A aliquam aliquid at dolores fuga impedit
              necessitatibus nisi totam ullam ut, voluptate.
            </Text>
          </View>
        </Collapse.Panel>
      </Collapse>
    </View>
  );
}`);


export const openKeys =
  generateCode(`import { Collapse, Title, Text, Icon } from "react-native-beauty-design";

export default function App() {
  const handlerOpenKey = (key: string | number) => {
    console.log(key);
  }

  return (
    <View style={styles.center}>
      <Collapse openKeys={['1']} onChange={handlerOpenKey}>
        <Collapse.Panel title="Panel 1" id="1">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ducimus eum maiores molestiae molestias neque,
          quas qui voluptatum. A aliquam aliquid at dolores fuga
          impedit necessitatibus nisi totam ullam ut, voluptate.
        </Collapse.Panel>
        <Collapse.Panel title="Personal Info" id="2">
          <View>
            <Title level={3}>Hi Kevin!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus eum maiores
              molestiae molestias neque, quas qui voluptatum.
              A aliquam aliquid at dolores fuga impedit
              necessitatibus nisi totam ullam ut, voluptate.
            </Text>
          </View>
        </Collapse.Panel>
      </Collapse>
    </View>
  );
}`);

export const disabled =
  generateCode(`import { Collapse, Title, Text, Icon } from "react-native-beauty-design";

export default function App() {
  return (
    <View style={styles.center}>
      <Collapse>
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
          <View>
            <Title level={3}>Hi Kevin!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ducimus eum maiores
              molestiae molestias neque, quas qui voluptatum.
              A aliquam aliquid at dolores fuga impedit
              necessitatibus nisi totam ullam ut, voluptate.
            </Text>
          </View>
        </Collapse.Panel>
      </Collapse>
    </View>
  );
}`);
