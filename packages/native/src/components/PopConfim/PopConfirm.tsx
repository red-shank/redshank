import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Modal } from '../Modal';
import { Button } from '../Button';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { PopConfirmProvider } from './Context';

import type { PopConfirmProps } from './types';

type ExportComponent = {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
};

export const PopConfirm: React.FC<PopConfirmProps> & ExportComponent = ({
  children,
  visible,
  onClose,
  onOk,
  extra,
  okText = 'Continue',
  cancelText = 'Cancel',
  type = 'default'
}) => {
  return (
    <Modal
      visible={visible}
      position="bottom"
      closable={false}
      contentStyle={{ padding: 0 }}
      extra={
        extra || (
          <View style={styles.extra}>
            <Button
              fullWidth
              color="modal"
              textAlign="center"
              textColor="primary"
              onPress={onClose}
            >
              {cancelText}
            </Button>
          </View>
        )
      }
    >
      <PopConfirmProvider>
        {children}
        {onOk ? (
          <Footer noPadding>
            <Button
              fullWidth
              color="modal"
              onPress={onOk}
              textAlign="center"
              style={styles.okButton}
              textStyle={{ fontWeight: '400' }}
              textColor={type === 'default' ? 'primary' : 'error'}
            >
              {okText}
            </Button>
          </Footer>
        ) : null}
      </PopConfirmProvider>
    </Modal>
  );
};

PopConfirm.Header = Header;
PopConfirm.Content = Content;
PopConfirm.Footer = Footer;

const styles = StyleSheet.create({
  extra: {
    marginTop: 10
  },
  okButton: {}
});
