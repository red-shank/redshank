import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { Alert } from './Alert';

describe('<App />', () => {
  it('has 1 child test', () => {
    const component = renderer.create(<Alert content="Alert message" />);
    const tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree.children.length).toBe(1);
  });
});
