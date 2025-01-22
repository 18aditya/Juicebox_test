'use client'
import { createContext, ReactNode, useState } from "react";

export const StateContext = createContext(undefined)

export function StateProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState({
        screen: 0
    });

    return (
        <StateContext.Provider value={{ state, setState }}>
            {children}
        </StateContext.Provider>
    );
}