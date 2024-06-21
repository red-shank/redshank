import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  ScrollView,
  Button,
  Modal,
  Text,
  Box,
} from '@redshank/native';

const { useModal } = Modal;

const ModalScreen = () => {
  const [isFull, setFull] = useState(false);
  const [visible, toggleModal] = useModal();
  const [visibleTop, toggleModalTop] = useModal();
  const [visibleBottom, toggleModalBottom] = useModal();
  const [visibleScroll, toggleModalScroll] = useModal();
  const [visibleFullScreen, toggleModalFullScreen] = useModal();
  const [visibleExtra, toggleModalExtra] = useModal();
  const [visibleMask, toggleModalMask] = useModal();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Default Modal</Title>
          <Button onPress={toggleModal}>Open Modal</Button>
        </View>

        <Modal visible={visible} onClose={toggleModal}>
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>
        {/* END */}

        <View>
          <Title level={3}>Top/Bottom Modal</Title>
          <Box gap={1}>
            <Button onPress={toggleModalTop}>Open Top Modal</Button>
            <Button onPress={toggleModalBottom}>Open Bottom Modal</Button>
          </Box>
        </View>

        <Modal
          visible={visibleTop || visibleBottom}
          position={visibleBottom ? 'bottom' : 'top'}
          onClose={visibleBottom ? toggleModalBottom : toggleModalTop}
        >
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>

        <View>
          <Title level={3}>Scroll Modal</Title>
          <Button
            onPress={() => {
              toggleModalScroll();
              setFull(false);
            }}
          >
            Open Modal
          </Button>
        </View>

        <Modal
          scrollable
          fullScreen={isFull}
          visible={visibleScroll}
          onClose={toggleModalScroll}
          buttonCloseStyle={{ top: 0 }}
          contentStyle={{
            paddingVertical: isFull ? 50 : 20,
          }}
        >
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>

          <View style={{ height: isFull ? 100 : 50 }} />
        </Modal>

        <View>
          <Title level={3}>Scroll Modal with full content</Title>
          <Button
            onPress={() => {
              toggleModalScroll();
              setFull(true);
            }}
          >
            Open Modal
          </Button>
        </View>
        {/* END */}

        <View>
          <Title level={3}>FullScreen Modal</Title>
          <Button onPress={toggleModalFullScreen}>Open Modal</Button>
        </View>

        <Modal
          hiddenBar
          fullScreen
          visible={visibleFullScreen}
          onClose={toggleModalFullScreen}
        >
          <View style={{ paddingVertical: 50, paddingHorizontal: 20 }}>
            <Title>Welcome!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
          </View>
        </Modal>
        {/* END */}

        <View>
          <Title level={3}>Mask closable Modal</Title>
          <Button onPress={toggleModalMask}>Open Modal</Button>
        </View>

        <Modal maskClosable visible={visibleMask} onClose={toggleModalMask}>
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>

        {/* END */}

        <View>
          <Title level={3}>With extra content</Title>
          <Button onPress={toggleModalExtra}>Open Modal</Button>
        </View>

        <Modal
          position="bottom"
          visible={visibleExtra}
          onClose={toggleModalExtra}
          extra={<Title>Extra content</Title>}
        >
          <Title>Welcome!</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            aspernatur, autem cum error exercitationem explicabo illo neque
            nihil non ratione sed unde voluptatibus. A consectetur eos error,
            iusto nisi sapiente?
          </Text>
        </Modal>
        {/* END */}
      </View>
      <View style={{ height: 75 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  space: {
    marginTop: 50,
  },
});

export default ModalScreen;
