import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  ScrollView,
  Button,
  Modal,
  Text,
  Box,
  BottomSheet
} from '@redshank/native';

const { useModal } = Modal;

const ModalScreen = () => {
  const [isFull, setFull] = useState(false);
  const [bottomSheet, toggleBottomSheet] = useModal();
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
          <Title level={3}>Bottom Sheet</Title>
          <Button onPress={toggleBottomSheet}>Open Bottom Sheet</Button>

          <BottomSheet visible={bottomSheet} onClose={toggleBottomSheet}>
            <Title level={4}>Hello word</Title>
            {/*<Text>*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A*/}
            {/*  aliquid amet cum dolores eligendi, eos ex incidunt ipsum non*/}
            {/*  perferendis quas quia repellat repellendus rerum saepe soluta*/}
            {/*  voluptatibus voluptatum? Eum.*/}
            {/*</Text>*/}

            {/*<Text>*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A*/}
            {/*  aliquid amet cum dolores eligendi, eos ex incidunt ipsum non*/}
            {/*  perferendis quas quia repellat repellendus rerum saepe soluta*/}
            {/*  voluptatibus voluptatum? Eum.*/}
            {/*</Text>*/}

            {/*<Text>*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A*/}
            {/*  aliquid amet cum dolores eligendi, eos ex incidunt ipsum non*/}
            {/*  perferendis quas quia repellat repellendus rerum saepe soluta*/}
            {/*  voluptatibus voluptatum? Eum.*/}
            {/*</Text>*/}
          </BottomSheet>
        </View>

        <View>
          <Title level={3}>Default Modal</Title>
          <Button onPress={toggleModal}>Open Modal</Button>
        </View>

        <Modal visible={visible} onClose={toggleModal}>
          <Modal.Header>
            <Title level={3}>Welcome!</Title>
          </Modal.Header>
          <Modal.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
          </Modal.Content>
        </Modal>
        {/* END */}

        <View>
          <Title level={3}>Top/Bottom Modal</Title>
          <Box gap={1}>
            <Button onPress={toggleModalTop}>Open Top Modal</Button>
            <Button onPress={toggleModalBottom}>Open Bottom Modal</Button>
          </Box>
        </View>

        <Modal visible={visibleTop} position="top" onClose={toggleModalTop}>
          <Modal.Header>
            <Title level={3}>Top!</Title>
          </Modal.Header>
          <Modal.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
          </Modal.Content>
        </Modal>

        <Modal
          visible={visibleBottom}
          position={'bottom'}
          onClose={toggleModalBottom}
        >
          <Modal.Header>
            <Title level={3}>Bottom!</Title>
          </Modal.Header>
          <Modal.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
          </Modal.Content>
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
        >
          <Modal.Header>
            <Title level={3}>Welcome!</Title>
          </Modal.Header>
          <Modal.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>

            <View style={{ height: isFull ? 100 : 50 }} />
          </Modal.Content>
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
          closable
          visible={visibleFullScreen}
          onClose={toggleModalFullScreen}
        >
          <Modal.Header>
            <Title>Welcome!</Title>
          </Modal.Header>
          <Modal.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
          </Modal.Content>
        </Modal>
        {/* END */}

        <View>
          <Title level={3}>Mask closable Modal</Title>
          <Button onPress={toggleModalMask}>Open Modal</Button>
        </View>

        <Modal maskClosable visible={visibleMask} onClose={toggleModalMask}>
          <Modal.Header>
            <Title>Welcome!</Title>
          </Modal.Header>
          <Modal.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
          </Modal.Content>
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
          extra={
            <Box my={2} p={3} rounded="modal" bg="modal">
              <Title>Extra content</Title>
            </Box>
          }
        >
          <Modal.Header>
            <Title>Welcome!</Title>
          </Modal.Header>
          <Modal.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem explicabo
              illo neque nihil non ratione sed unde voluptatibus. A consectetur
              eos error, iusto nisi sapiente?
            </Text>
          </Modal.Content>
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
    height: '100%'
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)'
  },
  space: {
    marginTop: 50
  }
});

export default ModalScreen;
