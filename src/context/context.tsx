'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the structure of the state
interface State {
    screen: number | undefined;
}

// Define the context's type
interface StateContextType {
    state: State;
    setState: React.Dispatch<React.SetStateAction<State>>;
}

// Create the context with proper type or `undefined` as the fallback
const StateContext = createContext<StateContextType | undefined>(undefined);

// Create the provider component
export function StateProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<State>({ screen: 0 });

    return (
        <StateContext.Provider value={{ state, setState }}>
            {children}
        </StateContext.Provider>
    );
}

// Custom hook for using the context
export function useStateContext() {
    const context = useContext(StateContext);

    if (!context) {
        throw new Error('useStateContext must be used within a StateProvider');
    }

    return context;
}
