import { withThemeProvider } from '@/content/utils/generateCode';

const footer = `
const LoadingScreen = ({ onHidden }: LoadingComponentProps) => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    setTime(10);
    const interval = setInterval(() => {
      setTime((prev) => {
        const newCount = prev - 1;
        if (newCount < 0) {
          onHidden();
          return 0;
        }
        return newCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onHidden]);

  return (
    <Box>
      <Title>Loading...</Title>
      <Text>Wait a {time}s</Text>
    </Box>
  );
};
`;

const header = `
const RenderApp = () => {
  const { onVisible } = useScreenLoading();

  return (
    <Box>
      <Button onPress={onVisible}>Open Loading</Button>
    </Box>
  );
};
`;

export const defaultCode = withThemeProvider(
  `<ScreenLoadingProvider>
            <RenderApp />
          </ScreenLoadingProvider>`,
  {
    header,
    react: ['useState', 'useEffect'],
    package: [
      'ScreenLoadingProvider',
      'useScreenLoading',
      'Title',
      'Text',
      'Button',
      'Box',
      'LoadingComponentProps'
    ]
  }
);

export const custom = withThemeProvider(
  `<ScreenLoadingProvider LoadingComponent={LoadingScreen}>
            <RenderApp />
          </ScreenLoadingProvider>`,
  {
    footer,
    header,
    react: ['useState', 'useEffect'],
    package: [
      'ScreenLoadingProvider',
      'useScreenLoading',
      'Title',
      'Text',
      'Button',
      'Box',
      'LoadingComponentProps'
    ]
  }
);
