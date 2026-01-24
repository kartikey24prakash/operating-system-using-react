import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import MacosWindow from './components/Windows/MacosWindow.jsx'
import Github from './components/Windows/Github.jsx'
import Note from './components/Windows/Note.jsx'
import Resume from './components/Windows/Resume.jsx'
import Spotify from './components/Windows/Spotify.jsx'


function App() {
  

  return (
   <main>
    <Nav/>
    <Dock/>
    <Github/>
    <Note/>
    <Resume/>
    <Spotify/>
   </main>
  )
}

export default App
