import { useCallback, useState } from 'react';
export default function useModal(initialState = false) {
    // State
    const [visible, setVisible] = useState(initialState);
    // Handlers
    const onVisible = useCallback(() => {
        setVisible(true);
    }, []);
    const onHidden = useCallback(() => {
        setVisible(false);
    }, []);
    const onToggle = useCallback(() => {
        setVisible((s) => !s);
    }, []);
    return [visible, onToggle, { onVisible, onHidden }];
}
