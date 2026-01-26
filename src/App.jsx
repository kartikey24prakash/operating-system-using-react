import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'
import MacosWindow from './components/Windows/MacosWindow.jsx'
import Github from './components/Windows/Github.jsx'
import Note from './components/Windows/Note.jsx'
import Resume from './components/Windows/Resume.jsx'
import Spotify from './components/Windows/Spotify.jsx'
import Clie from './components/Windows/Clie.jsx'



function App() {
    const [windowState, setWindowsState] = useState({
      github:false,
      note:false,
      resume:false,
      spotify:false,
      cli:false

    });
  return (
   <main>
    <Nav/>
    <Dock windowState={windowState} setWindowsState={setWindowsState}/>
    {windowState.github && <Github windowName="github"  setWindowsState={setWindowsState}/>}
    {windowState.note && <Note windowName="note"  setWindowsState={setWindowsState}/>}
    {windowState.resume && <Resume windowName="resume"  setWindowsState={setWindowsState}/>}
    {windowState.spotify && <Spotify windowName="spotify"  setWindowsState={setWindowsState}/>}
    {windowState.cli && <Clie windowName="cli"  setWindowsState={setWindowsState}/>}
   </main>
  )
}

export default App
