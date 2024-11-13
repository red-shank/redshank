var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { isValidElement } from 'react';
export var arrayKey = '[number]';
export function hasRenderFunction(props) {
    return !isValidElement(props === null || props === void 0 ? void 0 : props.children);
}
export function cleanInputProps(fieldProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var value = fieldProps.value, onChange = fieldProps.onChange, rest = __rest(fieldProps, ["value", "onChange"]);
    return rest;
}
export var createNameKey = function (currentKey, joinKey) {
    return currentKey ? "".concat(currentKey, ".").concat(joinKey) : joinKey;
};
export var getNameAndIndexKey = function (key) {
    var arrayKeys = key.split('.');
    var index = null;
    var name = arrayKeys.reduce(function (previousValue, currentValue) {
        var arrayIndex = Number(currentValue);
        if (!isNaN(arrayIndex)) {
            index = arrayIndex;
            // replace index for arrayKey or insert key
            return createNameKey(previousValue, arrayKey);
        }
        return createNameKey(previousValue, currentValue);
    }, '');
    return {
        name: name,
        index: index
    };
};
