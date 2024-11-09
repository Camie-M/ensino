// utils/usePersistedState.ts
import { useState, useEffect } from "react";

function usePersistedState(key: string, initialState: any) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const storageValue = localStorage.getItem(key);
            if (storageValue) {
                try {
                    setState(JSON.parse(storageValue));
                } catch (error) {
                    console.error("Error parsing localStorage value:", error);
                }
            }
        }
    }, [key]);

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            try {
                localStorage.setItem(key, JSON.stringify(state));
            } catch (error) {
                console.error("Error saving to localStorage:", error);
            }
        }
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;
