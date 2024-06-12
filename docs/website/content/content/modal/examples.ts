import generateCode from '@/content/utils/generateCode';
import { PACKAGE_NAME } from '@/config';

export const defaultCode =
  generateCode(`import { Button, Modal, Title, Text } from "${PACKAGE_NAME}";

export default function App() {
  const [visible, toggleVisible] = Modal.useModal();
  return (
    <View style={styles.center}>
      <Button onPress={toggleVisible}>
        Open modal
      </Button>

      <Modal visible={visible} onClose={toggleVisible}>
        <Title>Welcome!</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
      </Modal>
    </View>
  );
}`);

export const scrollModal =
  generateCode(`import { Button, Modal, Title, Text } from "${PACKAGE_NAME}";

export default function App() {
  const [isFull, toggleFull] = Modal.useModal();
  const [visible, toggleVisible] = Modal.useModal();
  return (
    <View style={styles.center}>
      <Button
        withMarginBottom
        onPress={toggleVisible}
      >
        Open modal
      </Button>

      <Button
        color="success"
        onPress={toggleFull}
      >
        {!isFull ? "Full" : "No full"} screen
      </Button>

      <Modal
        scrollable
        fullScreen={isFull}
        visible={visible}
        onClose={toggleVisible}
        buttonCloseStyle={{ top: 0 }}
        contentStyle={{
          paddingVertical: isFull ? 50 : 20,
        }}
      >
        <Title>Welcome!</Title>
        <Button
          color="success"
          onPress={toggleFull}
        >
          {!isFull ? "Full" : "Close full"} screen
        </Button>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>

        <View style={{ height: isFull ? 100 : 50 }} />
      </Modal>
    </View>
  );
}`);

export const topBottom = generateCode(`import {
  Button,
  Modal,
  Title,
  Text,
  Space,
} from "${PACKAGE_NAME}";

export default function App() {
  const [visibleTop, toggleModalTop] = Modal.useModal();
  const [visibleBottom, toggleModalBottom] = Modal.useModal();
  return (
    <View style={styles.center}>
      <View>
        <Title level={3}>Top/Bottom Modal</Title>
        <Space>
          <Button onPress={toggleModalTop}>Open Top Modal</Button>
          <Button onPress={toggleModalBottom}>Open Bottom Modal</Button>
        </Space>
      </View>

      <Modal
        visible={visibleTop || visibleBottom}
        position={visibleBottom ? 'bottom' : 'top'}
        onClose={visibleBottom ? toggleModalBottom : toggleModalTop}
      >
        <Title>{visibleTop ? 'Top' : 'Bottom'}</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
      </Modal>
    </View>
  );
}`);

export const hiddenStatusBar = generateCode(`import {
  Button,
  Modal,
  Title,
  Text,
} from "${PACKAGE_NAME}";

export default function App() {
  const [visible, toggleModal] = Modal.useModal();
  return (
    <View style={styles.center}>
      <Button onPress={toggleModal}>Open Modal</Button>

      <Modal
        hiddenBar
        fullScreen
        visible={visible}
        onClose={toggleModal}
        contentStyle={{
          padding: 20,
        }}
      >
        <Title>Hidden StatusBar</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
      </Modal>
    </View>
  );
}`);

export const closableMask = generateCode(`import {
  Button,
  Modal,
  Title,
  Text,
} from "${PACKAGE_NAME}";

export default function App() {
  const [visible, toggleModal] = Modal.useModal();
  return (
    <View style={styles.center}>
      <Button onPress={toggleModal}>Open Modal</Button>

      <Modal
        maskClosable
        visible={visible}
        onClose={toggleModal}
      >
        <Title>Mask Closable</Title>
        <Text>
          Click outside of the box
        </Text>
      </Modal>
    </View>
  );
}`);

export const withExtraContent = generateCode(`import {
  Button,
  Modal,
  Title,
  Text,
} from "${PACKAGE_NAME}";

export default function App() {
  const [visible, toggleModal] = Modal.useModal();
  return (
    <View style={styles.center}>
      <Button onPress={toggleModal}>Open Modal</Button>

      <Modal
        maskClosable
        visible={visible}
        onClose={toggleModal}
        extra={(
          <View
            style={{
              backgroundColor: "#444",
              marginTop: 10,
              padding: 10,
              borderRadius: 12
            }}
          >
            <Title>Extra content</Title>
            <Button
              fullWidth
              withMarginBottom
              onPress={toggleModal}
            >
              Accept
            </Button>
          </View>
        )}
      >
        <Title>Welcome!</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aspernatur, autem cum error exercitationem
          explicabo illo neque nihil non ratione sed unde voluptatibus.
          A consectetur eos error, iusto nisi sapiente?
        </Text>
      </Modal>
    </View>
  );
}`);
