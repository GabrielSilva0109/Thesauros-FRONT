import React, { useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components'

// Estilos globais para o body
const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode === 'dark' ? 'black' : 'white'};
    color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`

const ThemeProvider = ({ children }) => {
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
    <StyledThemeProvider theme={{ mode: darkMode ? 'dark' : 'light' }}>
      <GlobalStyles />
      {children}
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </StyledThemeProvider>
  )
}

export default ThemeProvider