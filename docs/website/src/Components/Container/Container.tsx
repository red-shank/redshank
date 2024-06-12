import { ReactNode } from 'react';
import { StyleContainer } from './style';
import { getStyleResponsive } from './Config';

interface ContainerProps {
  children?: ReactNode;
  withPaddingY?: boolean;
  css?: any;
  className?: string;
}

const Container = ({
  children,
  withPaddingY,
  css = {},
  ...restProps
}: ContainerProps) => {
  return (
    <StyleContainer
      withPaddingY={withPaddingY}
      css={{
        ...getStyleResponsive(),
        ...css,
      }}
      {...restProps}
    >
      {children}
    </StyleContainer>
  );
};

export default Container;
