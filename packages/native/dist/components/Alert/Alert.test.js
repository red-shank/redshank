import React from 'react';
import renderer from 'react-test-renderer';
import { Alert } from './Alert';
describe('<App />', () => {
    it('has 1 child', () => {
        const component = renderer.create(<Alert message="Alert message"/>);
        const tree = component.toJSON();
        expect(tree.children.length).toBe(1);
    });
});
