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
exports.useCollapsibleExpandError = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var useToggle_1 = __importDefault(require("./useToggle"));
function findErrorInFormState(object, name) {
    // Split the name into parts using dot as a separator
    var nameInArray = name.split('.');
    // Recursive helper function to search for the property
    function recursiveSearch(obj, parts) {
        // Check if the current object has the property
        if (!obj.hasOwnProperty(parts[0]))
            return;
        // If there are more parts in the name, continue the recursive search
        // If there are no more parts, return the value of the found property
        return parts.length > 1
            ? recursiveSearch(obj[parts[0]], parts.slice(1))
            : obj[parts[0]];
    }
    // Call the recursive function with the object and name parts
    return recursiveSearch(object, nameInArray);
}
var defaultOpts = {
    defaultOpen: false,
    cleanErrors: true
};
function useCollapsibleExpandError(names, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultOpts), options), defaultOpen = _a.defaultOpen, isCleanErrors = _a.cleanErrors;
    var _b = (0, react_hook_form_1.useFormContext)(), formState = _b.formState, clearErrors = _b.clearErrors, trigger = _b.trigger;
    var _c = (0, useToggle_1.default)(defaultOpen), open = _c[0], onVisible = _c[1].onVisible, toggle = _c[2];
    var errors = names
        .map(function (_name) {
        return findErrorInFormState(formState.errors, _name);
    })
        .filter(Boolean);
    var hasError = !!errors.length;
    (0, react_1.useEffect)(function () {
        if (hasError) {
            onVisible();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasError]);
    var handleExpand = function (_e, expanded) {
        if (isCleanErrors) {
            var action_1 = expanded ? trigger : clearErrors;
            names.forEach(function (name) { return action_1 === null || action_1 === void 0 ? void 0 : action_1(name); });
        }
        toggle();
    };
    return {
        open: open,
        hasError: hasError,
        handleExpand: handleExpand
    };
}
exports.useCollapsibleExpandError = useCollapsibleExpandError;
