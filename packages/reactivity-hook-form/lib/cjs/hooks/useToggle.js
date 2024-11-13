"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useToggle(initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = (0, react_1.useState)(initialValue), open = _a[0], setOpen = _a[1];
    var onToggle = function () { return setOpen(function (prev) { return !prev; }); };
    var onVisible = function () { return setOpen(true); };
    var onHidden = function () { return setOpen(false); };
    return [open, { onHidden: onHidden, onVisible: onVisible }, onToggle];
}
exports.default = useToggle;
