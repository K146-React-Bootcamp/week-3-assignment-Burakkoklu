import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const About = () => {
  const {contextTheme} = useThemeContext()    
  return (
    <div>
        <h2>About</h2>    
        <p>Theme {contextTheme}</p>
        <p>Light-Dark Tema Ödevi</p>    
    </div>
  )
}

export default About