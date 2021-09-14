import { createContext, ReactNode } from "react";

interface CountdownContextData {
    
}

interface CountdownContextProps {
    children: ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownContextProps) {
    return (
        <CountdownContext.Provider value={{}}>
            {children}
        </CountdownContext.Provider>
    )
}