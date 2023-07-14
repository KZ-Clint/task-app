import { useState,useEffect, createContext } from 'react'

export const Context = createContext()

export const ContextProvider = ({children}) => {


    const [ sideModal, setSideModal ] = useState(false)
    const [ theme, setTheme ] = useState(JSON.parse(localStorage.getItem('themeMode')) || false )

     useEffect(() => {
        setTheme(JSON.parse(localStorage.getItem('themeMode')))
    }, [theme]);

    return (
        <Context.Provider value={ { sideModal, setSideModal, theme, setTheme }} >
            {children}
        </Context.Provider>
 )
}