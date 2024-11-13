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
import * as React from 'react';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ValidationsProvider } from '../context/ValidationsContext';
import { getNameAndIndexKey } from '../utils';
import { ReactivityHookFormProvider } from '../context/FormOptions';
var Component = function (_a) {
    var showErrorText = _a.showErrorText, children = _a.children;
    if (!showErrorText) {
        return React.createElement(ReactivityHookFormProvider, null, children);
    }
    return React.createElement(React.Fragment, null, children);
};
var Form = function (props) {
    var formId = props.formId, children = props.children, dependencies = props.dependencies, validations = props.validations, onSubmit = props.onSubmit, formContext = props.formContext, defaultValues = props.defaultValues, _a = props.gap, gap = _a === void 0 ? 16 : _a, _b = props.showErrorText, showErrorText = _b === void 0 ? true : _b, restFormProps = __rest(props, ["formId", "children", "dependencies", "validations", "onSubmit", "formContext", "defaultValues", "gap", "showErrorText"]);
    // using a state here to make the "scroll & focus" happen once per submission
    var _c = useState(true), canFocus = _c[0], setCanFocus = _c[1];
    var methods = formContext !== null && formContext !== void 0 ? formContext : useForm(__assign({ mode: 'onChange', defaultValues: defaultValues }, restFormProps));
    // this useEffect is to enable the watcher and launch the action of the dependencies
    useEffect(function () {
        if (dependencies === null || dependencies === void 0 ? void 0 : dependencies.length) {
            var subscription_1 = methods.watch(function (formValues, _a) {
                var _name = _a.name, type = _a.type;
                if (type === 'change' && _name) {
                    var _b = getNameAndIndexKey(_name), name_1 = _b.name, index_1 = _b.index;
                    var findDependencies = dependencies.filter(function (dep) {
                        return dep.dependencies.includes(name_1);
                    });
                    findDependencies.forEach(function (dependency) { var _a; return (_a = dependency.callback) === null || _a === void 0 ? void 0 : _a.call(dependency, formValues, methods, { index: index_1, name: name_1 }); });
                }
            });
            return function () { return subscription_1.unsubscribe(); };
        }
        return function () { };
    }, [methods, dependencies]);
    // This useEffect is to enable auto-scroll to the input with error
    useEffect(function () {
        if (methods.formState.errors && canFocus) {
            // Sort inputs based on their position on the page. (the order will be based on validaton order otherwise)
            var elements = Object.keys(methods.formState.errors)
                .map(function (name) { return document.getElementsByName(name)[0]; })
                .filter(Boolean)
                .sort(function (a, b) {
                return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
            });
            if (elements.length > 0) {
                var errorElement = elements[0];
                errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // scrollIntoView options are not supported in Safari
                errorElement.focus({ preventScroll: true });
            }
            setCanFocus(false);
        }
    }, [methods.formState, canFocus]);
    useEffect(function () {
        setCanFocus(true);
    }, [methods.formState.submitCount]);
    return (React.createElement(Component, { showErrorText: showErrorText },
        React.createElement(FormProvider, __assign({}, methods),
            React.createElement(ValidationsProvider, { validations: validations },
                React.createElement("form", __assign({ id: formId, onSubmit: methods.handleSubmit(onSubmit !== null && onSubmit !== void 0 ? onSubmit : (function () { })) }, restFormProps, { style: __assign({ gap: gap, display: 'flex', flexDirection: 'column' }, restFormProps === null || restFormProps === void 0 ? void 0 : restFormProps.style) }), children)))));
};
export default Form;
