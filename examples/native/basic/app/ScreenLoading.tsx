import React, { useEffect, useState } from 'react';
import {
  Title,
  Text,
  Button,
  ScreenLoadingProvider,
  Box,
  useScreenLoading,
  LoadingComponentProps
} from '@redshank/native';

const App = () => {
  const { onVisible } = useScreenLoading();

  return (
    <Box>
      <Button onPress={onVisible}>Open Loading</Button>
    </Box>
  );
};

// Set this provider before React Navigation
const ScreenLoading = () => {
  return (
    <ScreenLoadingProvider LoadingComponent={LoadingScreen}>
      <App />
    </ScreenLoadingProvider>
  );
};

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

export default ScreenLoading;
