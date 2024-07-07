import React from 'react';

import { usePopConfirm } from './Context';
import type { PropContentProps } from './types';
import { Box } from '../Box';
import { Divider } from '../Divider';
import { HEIGHT_DIVIDER } from './constants';

const Content: React.FC<PropContentProps> = ({
  children,
  style,
  withBorder = false
}) => {
  const { addElement, haveHeader } = usePopConfirm();

  React.useEffect(() => {
    addElement('Content');
  }, [addElement]);

  return (
    <>
      {(withBorder || haveHeader) && <Divider height={HEIGHT_DIVIDER} />}
      <Box p={2} style={style}>
        {children}
      </Box>
    </>
  );
};

export default Content;
