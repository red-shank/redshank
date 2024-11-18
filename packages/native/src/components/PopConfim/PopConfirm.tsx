import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Modal, ModalHandle } from '../Modal';
import { Button, ButtonProps } from '../Button';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { PopConfirmProvider } from './Context';

import type { PopConfirmProps } from './types';
import { Box } from '../Box';
import { Divider } from '../Divider';
import { HEIGHT_DIVIDER } from './constants';

type ExportComponent = {
  Header: typeof Header;
  Content: typeof Content;
};

export const PopConfirm: React.FC<PopConfirmProps> & ExportComponent = ({
  children,
  visible,
  onClose,
  onOk,
  extra,
  actions,
  okText = 'Continue',
  cancelText = 'Cancel',
  type = 'default'
}) => {
  const modalRef = React.useRef<ModalHandle>(null);

  return (
    <Modal
      mb={5}
      ref={modalRef}
      visible={visible}
      position="bottom"
      closable={false}
      maskClosable={false}
      onClose={onClose}
      width="100%"
      sx={{
        content: {
          bg: 'transparent'
        }
      }}
      extra={
        extra || (
          <View style={styles.extra}>
            <Button
              fullWidth
              size="xLarge"
              rounded="modal"
              color="primary"
              appearance="modal"
              onPress={modalRef?.current?.onClose}
              textProps={{
                bold: true,
                size: 'md'
              }}
            >
              {cancelText}
            </Button>
          </View>
        )
      }
    >
      <PopConfirmProvider>
        <Modal.Content bg="popConfirm" p={0}>
          {children}
          {(onOk || !!actions?.length) && (
            <Footer noPadding>
              {actions?.map?.((action, index) => (
                <Box key={index}>
                  <ButtonState
                    bg="transparent"
                    color="primary"
                    {...action}
                    textProps={{
                      size: 'md',
                      ...action?.textProps
                    }}
                    fullWidth
                    size="xLarge"
                  />
                  <Divider height={HEIGHT_DIVIDER} />
                </Box>
              ))}

              {onOk && (
                <ButtonState
                  key="onOK"
                  fullWidth
                  size="xLarge"
                  onPress={onOk}
                  bg="transparent"
                  fontWeight="normal"
                  style={styles.okButton}
                  color={type === 'default' ? 'primary' : 'error'}
                  textProps={{
                    size: 'md'
                  }}
                >
                  {okText}
                </ButtonState>
              )}
            </Footer>
          )}
        </Modal.Content>
      </PopConfirmProvider>
    </Modal>
  );
};

function ButtonState({ onPress, ...rest }: ButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const onInternalPress: ButtonProps['onPress'] = async (args) => {
    setIsLoading(true);
    await onPress?.(args);
    setIsLoading(false);
  };

  return (
    <Button
      {...rest}
      loading={rest?.loading || isLoading}
      onPress={onInternalPress}
    />
  );
}

PopConfirm.Header = Header;
PopConfirm.Content = Content;

const styles = StyleSheet.create({
  extra: {
    marginTop: 10
  },
  okButton: {}
});
