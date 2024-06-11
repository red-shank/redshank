import styleDictionary, { resolverDictionaryKey } from './styleDictionary';
export function extractSxProps({ otherProps, sx }) {
    const extractedSx = Object.entries(otherProps).reduce((acc, [key, value]) => {
        if (styleDictionary.properties[key] &&
            value !== '' &&
            (typeof value === 'string' ||
                typeof value === 'object' ||
                typeof value === 'symbol' ||
                typeof value === 'number' ||
                typeof value === 'function' ||
                typeof value === 'bigint' ||
                value === null)) {
            acc[key] = value;
        }
        return acc;
    }, {});
    return {
        ...extractedSx,
        ...(sx || {})
    };
}
export function extractRestProps(props) {
    return Object.entries(props).reduce((acc, [key, value]) => {
        if (!styleDictionary.properties[key]) {
            acc[key] = value;
        }
        return acc;
    }, {});
}
export function createStyleFromSx({ sx, theme }) {
    const { colors, fontSizes, spacing, fonts, zIndices } = theme;
    return Object.entries(sx).reduce((acc, [keyProp, value]) => {
        const key = resolverDictionaryKey[keyProp] ?? keyProp;
        const propertyDictionary = styleDictionary.properties[keyProp];
        if (!propertyDictionary?.resolve) {
            propertyDictionary.resolve = (value) => value;
        }
        if (propertyDictionary.type === 'color') {
            const newValue = colors[value] || value;
            acc[key] = propertyDictionary.resolve(newValue, acc);
        }
        else if (propertyDictionary.type === 'number') {
            let newValue = value;
            if (key === 'zIndex') {
                newValue = zIndices[value];
            }
            else if (!isNaN(Number(value))) {
                newValue = Number(value) * spacing;
            }
            acc[key] = propertyDictionary.resolve(newValue, acc);
        }
        else if (propertyDictionary.type === 'string') {
            let newValue = value;
            if (key === 'fontFamily') {
                newValue = fonts[value];
            }
            else if (key === 'fontSize') {
                newValue = fontSizes[value];
            }
            acc[key] = propertyDictionary.resolve(newValue, acc);
        }
        else {
            acc[key] = propertyDictionary.resolve(value, acc);
        }
        return acc;
    }, {});
}
