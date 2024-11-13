"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useValidations = exports.ValidationsProvider = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var utils_1 = require("../utils");
var ValidationsContext = (0, react_2.createContext)(null);
function ValidationsProvider(_a) {
    var children = _a.children, _b = _a.validations, validations = _b === void 0 ? {} : _b;
    var getValidation = (0, react_2.useCallback)(function (_name) {
        var _a = (0, utils_1.getNameAndIndexKey)(_name), name = _a.name, index = _a.index;
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
    return (react_1.default.createElement(ValidationsContext.Provider, { value: { validations: validations, getValidation: getValidation } }, children));
}
exports.ValidationsProvider = ValidationsProvider;
function useValidations() {
    var context = (0, react_2.useContext)(ValidationsContext);
    if (!context) {
        console.error('Validation provider error');
    }
    return context;
}
exports.useValidations = useValidations;
