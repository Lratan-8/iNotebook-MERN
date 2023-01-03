import ThemeContext from "./themeContext";
import React, { useState } from 'react';

const ThemeState = (props) =>{
    const [mode, setmode] = useState('dark');

  const handleTheme = () => {
    if (mode === 'dark') {
      setmode('light')
    } else {
      setmode('dark')
    }
  }

  return (

    <ThemeContext.Provider value={{mode, handleTheme}}>
        {props.children}
    </ThemeContext.Provider>

  )
}

export default ThemeState;