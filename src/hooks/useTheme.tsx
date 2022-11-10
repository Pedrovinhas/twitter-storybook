import { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext'

export function useTheme() {
    const context = useContext(ThemeContext);
    const { theme, setTheme } = context;
    return { 
        theme, 
        setTheme 
    };
  }