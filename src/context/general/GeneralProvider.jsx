import { useState } from 'react';
import { GeneralContext } from './GeneralContext';

export const GeneralProvider = ({ children }) => {

    //* Active for Sidebar 
    const [isActive, setIsActive] = useState(false);

    return (
        <GeneralContext.Provider value={{
            isActive, 
            setIsActive,
        }}>
            {children}
        </GeneralContext.Provider>
    )
}