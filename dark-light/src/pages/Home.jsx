import React from 'react'
import { useThemeContext } from '../context/ThemeContext'

const Home = () => {
  const {contextTheme} = useThemeContext()    
  return (
    <div>
        <h2>Home</h2>    
        <p>Theme {contextTheme}</p>
        <p>Ömer Burak KÖKLÜ</p>    
    </div>
  )
}

export default Home