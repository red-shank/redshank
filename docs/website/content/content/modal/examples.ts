import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Button onPress={toggleVisible}>
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
          </Modal>`,
  {
    hooks: `const [visible, toggleVisible] = Modal.useModal();
    `,
    package: ['Modal', 'Title', 'Text', 'Button', 'useModal']
  }
);

export const scrollModal = withThemeProvider(
  `<Button
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

            <Box height={isFull ? 100 : 50} />
          </Modal>`,
  {
    hooks: `const [isFull, toggleFull] = Modal.useModal();
  const [visible, toggleVisible] = Modal.useModal();
    `,
    package: ['Modal', 'Title', 'Text', 'Button', 'useModal', 'Box']
  }
);

export const topBottom = withThemeProvider(
  `<Title level={3}>Top/Bottom Modal</Title>
          <Box gap={1}>
            <Button onPress={toggleModalTop}>Open Top Modal</Button>
            <Button onPress={toggleModalBottom}>Open Bottom Modal</Button>
          </Box>

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
          </Modal>`,
  {
    hooks: `const [visibleTop, toggleModalTop] = Modal.useModal();
  const [visibleBottom, toggleModalBottom] = Modal.useModal();
  `,
    package: ['Modal', 'Title', 'Text', 'Button', 'useModal', 'Box']
  }
);

export const hiddenStatusBar = withThemeProvider(
  `<Button onPress={toggleModal}>Open Modal</Button>

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
          </Modal>`,
  {
    hooks: `const [visible, toggleModal] = Modal.useModal();
  `,
    package: ['Modal', 'Title', 'Text', 'Button', 'useModal']
  }
);

export const closableMask = withThemeProvider(
  `<Button onPress={toggleModal}>Open Modal</Button>

          <Modal
            maskClosable
            visible={visible}
            onClose={toggleModal}
          >
            <Title>Mask Closable</Title>
            <Text>
              Click outside of the box
            </Text>
          </Modal>`,
  {
    hooks: `const [visible, toggleModal] = Modal.useModal();
  `,
    package: ['Modal', 'Title', 'Text', 'Button', 'useModal']
  }
);

export const withExtraContent = withThemeProvider(
  `<Button onPress={toggleModal}>Open Modal</Button>

          <Modal
            maskClosable
            visible={visible}
            onClose={toggleModal}
            extra={(
              <Box
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
              </Box>
            )}
          >
            <Title>Welcome!</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur, autem cum error exercitationem
              explicabo illo neque nihil non ratione sed unde voluptatibus.
              A consectetur eos error, iusto nisi sapiente?
            </Text>
          </Modal>`,
  {
    hooks: `const [visible, toggleModal] = Modal.useModal();
  `,
    package: ['Modal', 'Title', 'Text', 'Button', 'useModal', 'Box']
  }
);
