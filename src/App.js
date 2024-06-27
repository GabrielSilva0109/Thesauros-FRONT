import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider, useTheme } from './ThemeProvider'
import GlobalStyles from '../src/Styles/GlobalStyles'
import ToggleButton from '../src/components/Buttons/Togle.jsx'
import logo from './logo.svg'
import '../src/Styles/App.css'
import AppRouter from './AppRouter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ThemedApp = () => {
  const { darkMode } = useTheme();
  return (
    <StyledThemeProvider theme={{ mode: darkMode ? 'dark' : 'light' }}>
      <GlobalStyles />
      <div className="App">
        <AppRouter />
        
      </div>
    </StyledThemeProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  )
}

export default App