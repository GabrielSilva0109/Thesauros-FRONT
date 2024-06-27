import React, { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
// Estilos globais para o body
const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode === 'dark' ? 'black' : 'white'};
    color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
`

const TogleMode = styled.button`
      background: gray;
      padding: 16px;
      border-radius: 8px;
      border: none;
      color: white;
      font-weight: bold;
`

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider