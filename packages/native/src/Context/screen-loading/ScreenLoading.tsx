import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext
} from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  ActivityIndicator
} from 'react-native';
import useModal from '../../hooks/useModal';
import useTheme from '../theme/useTheme';
import { Text } from '../../Text';

type OverlayComponentProps = FunctionComponent<
  PropsWithChildren<{ style?: StyleProp<ViewStyle> }>
>;

export type ScreenLoadingProps = {
  isOpen: boolean;
  onVisible: () => void;
  onHidden: () => void;
  OverlayComponent: OverlayComponentProps;
  LoadingComponent: FunctionComponent;
};

const ScreenLoadingContext = createContext<
  Pick<ScreenLoadingProps, 'isOpen' | 'onHidden' | 'onVisible'>
>({
  isOpen: false,
  onVisible: () => {},
  onHidden: () => {}
});

const DummyOverlay: OverlayComponentProps = (props) => <View {...props} />;

const DummyLoadingComponent: FunctionComponent = (props) => {
  const { colors, zIndices } = useTheme();

  return (
    <View
      style={StyleSheet.flatten([
        styles.content,
        { backgroundColor: colors.background, zIndex: zIndices.max }
      ])}
      {...props}
    >
      <ActivityIndicator size="large" color={colors.text} />
      <Text>Loading...</Text>
    </View>
  );
};

export function ScreenLoadingProvider({
  children,
  OverlayComponent = DummyOverlay,
  LoadingComponent = DummyLoadingComponent
}: PropsWithChildren<Partial<ScreenLoadingProps>>) {
  const { zIndices, colors } = useTheme();
  const [isOpen, _, { onVisible, onHidden }] = useModal();

  return (
    <ScreenLoadingContext.Provider
      value={{
        isOpen,
        onHidden,
        onVisible
      }}
    >
      {isOpen && (
        <View style={styles.wrapper}>
          <OverlayComponent
            style={StyleSheet.flatten([
              styles.overlay,
              { zIndex: zIndices.max, backgroundColor: colors.foreground }
            ])}
          />
          <LoadingComponent />
        </View>
      )}
      {children}
    </ScreenLoadingContext.Provider>
  );
}

export function useScreenLoading() {
  return useContext(ScreenLoadingContext);
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0
  },
  overlay: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    opacity: 0.5
  },
  content: {
    alignItems: 'center',
    gap: 10,
    padding: 20,
    borderRadius: 10
  }
});
