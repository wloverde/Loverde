import { useState } from 'react'
import reactLogo from './assets/images/logo.png'
import viteLogo from './assets/images/modecat.png'
import Header from './components/Header'
import Footer from './components/Footer'
import Project from './components/Project'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Project/>
      <Footer/>
    </>
  )
}

export default App
