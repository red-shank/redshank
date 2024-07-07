import React from 'react';

import { usePopConfirm } from './Context';
import type { PropFooterProps } from './types';
import { Box } from '../Box';
import { Divider } from '../Divider';
import { HEIGHT_DIVIDER } from './constants';

const Footer: React.FC<PropFooterProps> = ({
  children,
  style,
  withBorder = false,
  noPadding = false
}) => {
  const { haveContent } = usePopConfirm();

  return (
    <>
      {(withBorder || haveContent) && <Divider height={HEIGHT_DIVIDER} />}
      <Box p={noPadding ? 0 : 2} style={style}>
        {children}
      </Box>
    </>
  );
};

export default Footer;
