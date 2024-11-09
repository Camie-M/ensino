// utils/usePersistedState.ts
import { useState, useEffect } from "react";

function usePersistedState(key: string, initialState: any) {
    const [state, setState] = useState(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const storageValue = localStorage.getItem(key);
            if (storageValue) {
                return JSON.parse(storageValue);
            }
        }
        return initialState; // Retorna o valor inicial caso não tenha um valor persistido
    });

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;
