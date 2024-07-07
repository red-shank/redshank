import React from 'react';

import { isValidChild } from '../../utils/render';
import { Text } from '../Text';
import { Box } from '../Box';
import { usePopConfirm } from './Context';
import type { PropHeaderProps } from './types';

const Header: React.FC<PropHeaderProps> = ({
  image,
  title,
  description,
  style
}) => {
  const { addElement } = usePopConfirm();

  React.useEffect(() => {
    addElement('Header');
  }, [addElement]);

  return (
    <Box p={2} flexDirection="row" style={style}>
      {image ? <Box mr={1}>{image}</Box> : null}
      <Box flex={1}>
        {isValidChild(title) ? (
          title
        ) : (
          <Text size={18} fontWeight="500">
            {title}
          </Text>
        )}
        {isValidChild(description) ? description : <Text>{description}</Text>}
      </Box>
    </Box>
  );
};

export default Header;
