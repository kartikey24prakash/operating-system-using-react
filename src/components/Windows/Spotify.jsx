import React from 'react'
import MacosWindow from './MacosWindow'
import './spotify.scss'

const Spotify = ({windowName, setWindowsState}) => {
  return (
    <MacosWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:12}} src="https://open.spotify.com/embed/playlist/37i9dQZF1E37eeosBQIx71?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacosWindow>
  )
}

export default Spotify
