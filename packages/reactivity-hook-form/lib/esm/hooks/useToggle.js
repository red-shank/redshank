import { useState } from 'react';
export default function useToggle(initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = useState(initialValue), open = _a[0], setOpen = _a[1];
    var onToggle = function () { return setOpen(function (prev) { return !prev; }); };
    var onVisible = function () { return setOpen(true); };
    var onHidden = function () { return setOpen(false); };
    return [open, { onHidden: onHidden, onVisible: onVisible }, onToggle];
}
