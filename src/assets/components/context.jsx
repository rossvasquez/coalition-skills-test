import React, { useRef } from "react";
 
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

    const HistoryRef = useRef(null)
    const TeamRef = useRef(null)
 
    return (
        <Context.Provider value={{ 
            HistoryRef,
            TeamRef,
            }}>
            {children}
        </Context.Provider>
    );
};