import React from 'react';
import PropTypes from 'prop-types';
declare const Card: {
    ({ children, customContainerStyle, cardWidth, cardHeight, onPress, ...rest }: {
        [x: string]: any;
        children: any;
        customContainerStyle: any;
        cardWidth: any;
        cardHeight: any;
        onPress: any;
    }): React.JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<NonNullable<PropTypes.ReactNodeLike>>;
        customContainerStyle: PropTypes.Requireable<Object>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
        cardWidth: PropTypes.Requireable<NonNullable<string | number>>;
        cardHeight: PropTypes.Requireable<NonNullable<string | number>>;
    };
    defaultProps: {
        children: any;
        onPress: any;
        cardWidth: number;
        cardHeight: number;
        customContainerStyle: {};
    };
};
export { Card };
