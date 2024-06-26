import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../ThemeProvider'

const TogleMode = styled.button`
  background: gray;
  padding: 8px;
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <TogleMode onClick={toggleDarkMode}>
      {darkMode ? 'Light' : 'Dark'}
    </TogleMode>
  )
}

export default ToggleButton