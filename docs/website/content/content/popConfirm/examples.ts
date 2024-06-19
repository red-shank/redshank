import { withThemeProvider } from '@/content/utils/generateCode';

export const defaultCode = withThemeProvider(
  `<Button onPress={toggleVisible}>
            Open Pop
          </Button>

          <PopConfirm visible={visible} onClose={toggleVisible}>
            <PopConfirm.Content>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                beatae cum dolores ducimus est eum porro quaerat sequi sit
                totam. Ducimus eos harum itaque minus mollitia necessitatibus
                odit tempora ut?
              </Text>
            </PopConfirm.Content>
          </PopConfirm>`,
  {
    package: ['Button', 'PopConfirm', 'Text', 'useModal'],
    hooks: `const [visible, toggleVisible] = useModal();
`
  }
);

export const confirmDelete = withThemeProvider(
  `<Button onPress={toggleVisible}>
            Open Pop
          </Button>

          <PopConfirm
            type="delete"
            visible={visible}
            onClose={toggleVisible}
            onOk={toggleVisible}
          >
            <PopConfirm.Content>
              <Text fontWeight="700">Are you sure to perform this action?</Text>
              <Text marginTop={10}>This action cannot be returned</Text>
            </PopConfirm.Content>
          </PopConfirm>`,
  {
    package: ['Button', 'PopConfirm', 'Text', 'useModal'],
    hooks: `const [visible, toggleVisible] = useModal();
`
  }
);

export const headerContentAndFooter = withThemeProvider(
  `<Button onPress={toggleVisible}>
            Open Pop
          </Button>

          <PopConfirm
            okText="Confirm"
            visible={visible}
            onClose={toggleVisible}
            onOk={toggleVisible}
          >
            <PopConfirm.Header
              title="Beauty Design"
              description="lorem"
              image={
                <Image
                  source="https://www.redshank.app/favicon.png"
                  width={50}
                  height={50}
                />
              }
            />
            <PopConfirm.Content>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                beatae cum dolores ducimus est eum porro quaerat sequi sit
                totam. Ducimus eos harum itaque minus mollitia necessitatibus
                odit tempora ut?
              </Text>
            </PopConfirm.Content>
          </PopConfirm>`,
  {
    package: ['Button', 'PopConfirm', 'Text', 'useModal', 'Image'],
    hooks: `const [visible, toggleVisible] = useModal();
`
  }
);
