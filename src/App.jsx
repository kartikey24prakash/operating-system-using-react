import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import MacosWindow from './components/Windows/MacosWindow.jsx'
import Github from './components/Windows/Github.jsx'


function App() {
  

  return (
   <main>
    <Nav/>
    <Dock/>
    <Github/>
   </main>
  )
}

export default App
