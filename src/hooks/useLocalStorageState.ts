import { useState, useEffect } from 'react';

export default function useLocalStorageState<T>(key: string, defaultValue: T) {
    const [state, setState] = useState<T>(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null
            ? (storedValue as unknown as T)
            : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, String(state));
    }, [key, state]);

    return [state, setState] as const;
}
