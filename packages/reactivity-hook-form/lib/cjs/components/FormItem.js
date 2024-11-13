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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormItem = void 0;
var react_1 = __importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var ValidationsContext_1 = require("../context/ValidationsContext");
var utils_1 = require("../utils");
var FormOptions_1 = require("../context/FormOptions");
var FormItem = function (props) {
    var formContext = (0, react_hook_form_1.useFormContext)();
    var getValidation = (0, ValidationsContext_1.useValidations)().getValidation;
    var showErrorText = (0, FormOptions_1.useFormOptions)().showErrorText;
    if ((0, utils_1.hasRenderFunction)(props)) {
        return props.children(formContext);
    }
    var children = props.children, name = props.name, rules = props.rules, onChange = props.onChange, getValue = props.getValue, _a = props.injectPropsField, injectPropsField = _a === void 0 ? [] : _a, label = props.label, labelProps = props.labelProps, shouldUnregister = props.shouldUnregister, disabled = props.disabled, defaultValue = props.defaultValue, _b = props.sanitize, sanitize = _b === void 0 ? function () { return ({}); } : _b, restDivProps = __rest(props, ["children", "name", "rules", "onChange", "getValue", "injectPropsField", "label", "labelProps", "shouldUnregister", "disabled", "defaultValue", "sanitize"]);
    return (react_1.default.createElement(react_hook_form_1.Controller, { rules: __assign(__assign({}, getValidation(name)), rules), name: name, disabled: disabled, defaultValue: defaultValue, control: formContext.control, shouldUnregister: shouldUnregister, render: function (renderProps) {
            var _a, _b, _c, _d;
            var field = renderProps.field, fieldState = renderProps.fieldState;
            var propsFieldInject = injectPropsField.reduce(function (acc, currentKey) {
                var _a;
                return __assign(__assign({}, acc), (_a = {}, _a[currentKey] = (0, utils_1.cleanInputProps)(field), _a));
            }, {});
            var childrenElement = react_1.default.cloneElement(children, __assign(__assign(__assign(__assign({}, field), propsFieldInject), { helperText: fieldState.error
                    ? fieldState.error.message
                    : ((_a = children === null || children === void 0 ? void 0 : children.props) === null || _a === void 0 ? void 0 : _a.helperText) || '', error: !!fieldState.error, value: getValue ? getValue(field.value) : field.value, checked: getValue ? getValue(field.value) : field.value, onChange: function (args) {
                    onChange
                        ? onChange(args, __assign(__assign({}, renderProps), { context: formContext }))
                        : field.onChange(args);
                } }), sanitize(renderProps)));
            var errorText = showErrorText && !!fieldState.error ? (react_1.default.createElement("p", { className: "error-text helper-text" }, (_b = fieldState.error) === null || _b === void 0 ? void 0 : _b.message)) : null;
            var helperText = !fieldState.error && !!((_c = children === null || children === void 0 ? void 0 : children.props) === null || _c === void 0 ? void 0 : _c.helperText) ? (react_1.default.createElement("p", { className: "helper-text" }, (_d = children === null || children === void 0 ? void 0 : children.props) === null || _d === void 0 ? void 0 : _d.helperText)) : null;
            if (label) {
                return (react_1.default.createElement("div", __assign({}, restDivProps),
                    react_1.default.createElement("label", __assign({ htmlFor: name }, labelProps, { className: "label ".concat(labelProps === null || labelProps === void 0 ? void 0 : labelProps.className) }),
                        label && react_1.default.createElement("span", { className: "label-text" }, label),
                        childrenElement),
                    errorText,
                    helperText));
            }
            return (react_1.default.createElement("div", __assign({}, restDivProps),
                childrenElement,
                errorText,
                helperText));
        } }));
};
exports.FormItem = FormItem;
