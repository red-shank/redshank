import { Collapse, styled } from '@nextui-org/react';

export const CollapseStyle = styled(Collapse.Group, {
  '.nextui-collapse--closed .nextui-collapse-title-content-right svg': {
    transform: 'rotateZ(-180deg) !important'
  },
  '.nextui-collapse-view': {
    padding: '20px 0 10px'
  },
  '.nextui-expand-content': {
    paddingLeft: 20
  }
});

export const CollapseItemStyle = styled(Collapse, {
  '.nextui-collapse-title-container': {
    justifyContent: 'flex-start',
    '.nextui-collapse-title-content': {
      width: 'auto'
    }
  },

  '.nextui-collapse-title-content-right': {
    marginLeft: 10,
    fontSize: 14,

    svg: {
      width: '1em',
      height: '1em'
    }
  },

  '.nextui-collapse-title': {
    fontSize: '$lg'
  }
});
