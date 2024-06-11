import React, { createContext, useContext } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import useModal from '../../hooks/useModal';
import useTheme from '../theme/useTheme';
import { Text } from '../../components/Text';
import { getOpacity } from '../../utils';
const ScreenLoadingContext = createContext({
    isOpen: false,
    onVisible: () => { },
    onHidden: () => { }
});
const DummyOverlay = (props) => (<View {...props}/>);
const DummyLoadingComponent = (props) => {
    const { colors, zIndices } = useTheme();
    return (<View style={StyleSheet.flatten([
            styles.content,
            { backgroundColor: colors.background, zIndex: zIndices.max }
        ])} {...props}>
      <ActivityIndicator size="large" color={colors.text}/>
      <Text>Loading...</Text>
    </View>);
};
export function ScreenLoadingProvider({ children, initialIsOpen, OverlayComponent = DummyOverlay, LoadingComponent = DummyLoadingComponent }) {
    const { zIndices, colors } = useTheme();
    const [isOpen, _, { onVisible, onHidden }] = useModal(initialIsOpen);
    return (<ScreenLoadingContext.Provider value={{
            isOpen,
            onHidden,
            onVisible
        }}>
      {isOpen && (<OverlayComponent style={StyleSheet.flatten([
                styles.overlay,
                {
                    zIndex: zIndices.max,
                    backgroundColor: getOpacity(colors.background, 0.8)
                }
            ])}>
          <LoadingComponent onHidden={onHidden} isOpen={isOpen} onVisible={onVisible}/>
        </OverlayComponent>)}
      {children}
    </ScreenLoadingContext.Provider>);
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
