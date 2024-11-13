import * as React from 'react';
import { createContext, useContext } from 'react';
var FormOptionsContext = createContext({
    showErrorText: true
});
export function ReactivityHookFormProvider(_a) {
    var children = _a.children, _b = _a.showErrorText, showErrorText = _b === void 0 ? true : _b;
    return (React.createElement(FormOptionsContext.Provider, { value: { showErrorText: showErrorText } }, children));
}
export function useFormOptions() {
    return useContext(FormOptionsContext);
}
