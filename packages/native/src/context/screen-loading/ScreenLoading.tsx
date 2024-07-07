import React, {
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
import { Text } from '../../components/Text';
import { getOpacity } from '../../utils';

export type OverlayComponentProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export type LoadingComponentProps = PropsWithChildren<{
  onVisible: () => void;
  onHidden: () => void;
  isOpen: boolean;
}>;

export type ScreenLoadingProps = {
  isOpen: boolean;
  onVisible: () => void;
  onHidden: () => void;
  OverlayComponent: FunctionComponent<OverlayComponentProps>;
  LoadingComponent: FunctionComponent<LoadingComponentProps>;
};

const ScreenLoadingContext = createContext<
  Pick<ScreenLoadingProps, 'isOpen' | 'onHidden' | 'onVisible'>
>({
  isOpen: false,
  onVisible: () => {},
  onHidden: () => {}
});

const DummyOverlay: FunctionComponent<OverlayComponentProps> = (props) => (
  <View {...props} />
);

const DummyLoadingComponent: FunctionComponent<LoadingComponentProps> = (
  props
) => {
  const { colors, zIndices } = useTheme();

  return (
    <View
      style={StyleSheet.flatten([
        styles.content,
        { backgroundColor: colors.background.main, zIndex: zIndices.max }
      ])}
      {...props}
    >
      <ActivityIndicator size="large" color={colors.text.main} />
      <Text>Loading...</Text>
    </View>
  );
};

export type ScreenLoadingProviderProps = Partial<
  Pick<ScreenLoadingProps, 'LoadingComponent' | 'OverlayComponent'>
> & {
  initialIsOpen?: boolean;
};

export function ScreenLoadingProvider({
  children,
  initialIsOpen,
  OverlayComponent = DummyOverlay,
  LoadingComponent = DummyLoadingComponent
}: PropsWithChildren<ScreenLoadingProviderProps>) {
  const { zIndices, colors } = useTheme();
  const [isOpen, _, { onVisible, onHidden }] = useModal(initialIsOpen);

  return (
    <ScreenLoadingContext.Provider
      value={{
        isOpen,
        onHidden,
        onVisible
      }}
    >
      {isOpen && (
        <OverlayComponent
          style={StyleSheet.flatten([
            styles.overlay,
            {
              zIndex: zIndices.max,
              backgroundColor: getOpacity(colors.background.main, 0.8)
            }
          ])}
        >
          <LoadingComponent
            onHidden={onHidden}
            isOpen={isOpen}
            onVisible={onVisible}
          />
        </OverlayComponent>
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
    left: 0
  },
  content: {
    alignItems: 'center',
    gap: 10,
    padding: 20,
    borderRadius: 10
  }
});
