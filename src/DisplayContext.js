import React, { useContext, createContext, useState } from "react";

const DisplayContext = createContext();
export default function DisplayProvider({ children }) {
    const [newdisplay, setNewDisplay] = useState("Home");

    const changeDisplay = (newDisplay) => {
            setNewDisplay(newDisplay); 
    }
  
    return (
        <DisplayContext.Provider value={{ newdisplay, changeDisplay }}>
            {children}
        </DisplayContext.Provider>
    )
}

export function useDisplay() {
    return useContext(DisplayContext);
}