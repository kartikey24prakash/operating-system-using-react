import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import MacosWindow from './components/Windows/MacosWindow.jsx'


function App() {
  

  return (
   <main>
    <Nav/>
    <Dock/>
    <MacosWindow>
      <h1>Hello, World!</h1>
    </MacosWindow>
   </main>
  )
}

export default App
