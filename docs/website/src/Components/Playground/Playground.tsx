import React, { useCallback, useEffect, useRef } from 'react';

import { WrapperStyled } from '@/Components/PlaygroundSection/style';
import formatCode from '@/utils/formatCode';
import { LIB_VERSION, PACKAGE_NAME } from '@/config';

type SnackProps = {
  code?: string;
  mode?: 'mobile' | 'all';
  snackId?: string;
  snackName?: string;
  className?: string;
  dependencies?: string;
};

export const _dependencies = `${PACKAGE_NAME}@${LIB_VERSION},dayjs@1.11.13,@redshank/reactivity-hook-form@1.3.3,react-native-svg@15.11.1,@react-native-picker/picker@2.11.0,@expo/vector-icons@14.0.4`;

const modes = {
  mobile: [
    'data-snack-platform="mydevice"',
    'data-snack-supportedplatforms="mydevice,ios,android"'
  ],
  all: [
    'data-snack-platform="web"',
    'data-snack-supportedplatforms="mydevice,ios,android,web"'
  ]
};

const Playground = ({
  code,
  mode = 'all',
  snackId,
  dependencies = '',
  className = '',
  snackName = '@redshank'
}: SnackProps) => {
  const snackRef = useRef<any>(null);

  const updateIframeContent = useCallback(() => {
    const iframe = snackRef.current;
    let propsSnack = [];

    let doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;

    if (code && !snackId) {
      propsSnack = [
        `data-snack-code="${formatCode(code)}"`,
        `data-snack-dependencies="${dependencies ? `${_dependencies},${dependencies}` : _dependencies}"`,
        `data-snack-name="${snackName}"`
      ];
    } else {
      propsSnack = [`data-snack-id="${snackId}"`];
    }

    const expoScript = `<div ${propsSnack.join(' ')} ${modes[mode].join(
      ' '
    )} data-snack-preview="true" data-snack-loading="lazy" data-snack-theme="dark" style="overflow:hidden;background:transparent;border:none;height:100%;width:100%"></div><script async src="https://snack.expo.io/embed.js"></script>`;
    const iframeHtml = `<html><head><base target="_parent"></head><body style="margin: 0; padding: 0; overflow: hidden;">${expoScript}</body></html>`;

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  }, [code, snackId, snackName]);

  useEffect(() => {
    updateIframeContent();
  }, [updateIframeContent]);

  return (
    <WrapperStyled
      className={`overflow-hidden border-none w-full ${className}`}
    >
      <iframe
        ref={snackRef}
        frameBorder={0}
        width="100%"
        height="100%"
        id={`expo-snack-${snackId}`}
      />
    </WrapperStyled>
  );
};

export default Playground;
