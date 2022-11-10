import { createContext, ReactNode, useEffect, useState } from "react"

  interface ThemeContextProps {
    theme: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  }

  interface ThemeContextProviderProps {
    children: ReactNode;
  }
  
  
export const ThemeContext = createContext<ThemeContextProps>({
    theme: JSON.parse(String(localStorage.getItem("dark"))),
    setTheme: () => {}

  })

  export const ThemeProvider = (
    { children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<boolean>(JSON.parse(String(localStorage.getItem("dark"))) || false);
  
    useEffect(() => {
        setTheme(JSON.parse(String(localStorage.getItem("dark"))) || false);
      }, []);
    
    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(theme));
        const root = document.querySelector('#root')

        theme ? root?.classList.add('dark') :  root?.classList.remove('dark')
    }, [theme])
      
     
    const values = {
        theme,
        setTheme
    }
  
    return (
      <ThemeContext.Provider value={values}>
        {children}
      </ThemeContext.Provider>
    )
  }