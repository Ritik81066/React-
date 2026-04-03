import { useContext, createContext } from "react";

//Create Context
export const ThemeContext=createContext({
    themeMode: "light",
    darkTheme: () => {}, 
    lightTheme: () => {}
})



//Context Provider
export const ThemeProvider=ThemeContext.Provider



//Custom Hook
export default function useTheme(){
    return useContext(ThemeContext)
} 