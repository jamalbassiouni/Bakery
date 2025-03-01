import { createContext, React, useEffect, useState } from "react";
export const DarkModeContext = createContext();
export default function DarkModeContextProvider(props) {
  const currentTheme = localStorage.getItem('currentTheme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  const toggleMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    localStorage.setItem('currentTheme', theme);
  }, [theme])
  return (
    <DarkModeContext.Provider value={{ theme, toggleMode }}>
      <div className={`${theme === 'dark' ? 'dark' : ''}`}>{props.children}</div>
    </DarkModeContext.Provider>
  )
}