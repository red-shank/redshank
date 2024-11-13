var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { createContext, useContext, useCallback } from 'react';
import { getNameAndIndexKey } from '../utils';
var ValidationsContext = createContext(null);
export function ValidationsProvider(_a) {
    var children = _a.children, _b = _a.validations, validations = _b === void 0 ? {} : _b;
    var getValidation = useCallback(function (_name) {
        var _a = getNameAndIndexKey(_name), name = _a.name, index = _a.index;
        var rule = validations === null || validations === void 0 ? void 0 : validations[name];
        if (!rule)
            return {};
        var validation = {};
        if (typeof (rule === null || rule === void 0 ? void 0 : rule.validate) === 'function') {
            validation = {
                validate: function (value, formValues) {
                    return rule.validate(value, formValues, { index: index, name: name });
                }
            };
        }
        else if (typeof (rule === null || rule === void 0 ? void 0 : rule.validate) === 'object') {
            var validationRule_1 = rule.validate;
            validation = {
                validate: Object.keys(validationRule_1).reduce(function (acc, currentKey) {
                    var _a;
                    return __assign(__assign({}, acc), (_a = {}, _a[currentKey] = function (value, formValues) {
                        return validationRule_1[currentKey](value, formValues, {
                            index: index,
                            name: name
                        });
                    }, _a));
                }, {})
            };
        }
        return __assign(__assign({}, rule), validation);
    }, [validations]);
    return (React.createElement(ValidationsContext.Provider, { value: { validations: validations, getValidation: getValidation } }, children));
}
export function useValidations() {
    var context = useContext(ValidationsContext);
    if (!context) {
        console.error('Validation provider error');
    }
    return context;
}
