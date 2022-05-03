import React, { createContext, useEffect, useState } from 'react'

export const ViewPortContext = createContext();

export default function ViewPortProvider({ children }) {

    const [width, setWidth] = useState(window.innerWidth);
    // Add a second state variable "height" and default it to the current window height
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        const handleWindowResize = () => {
        setWidth(window.innerWidth);
        // Set the height in state as well as the width
        setHeight(window.innerHeight);
        }
    
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
        
    return (
        <ViewPortContext.Provider value={{  width, height }} >
            {children}
        </ViewPortContext.Provider>
    )
}

