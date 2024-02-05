import { useEffect } from 'react';

export function useMountEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
