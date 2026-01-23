import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacosWindow = ({children}) => {
  return (
  <Rnd
  default={{
    width:"45vw",
    height:"30vw",
    x:300,
    y:100,
  }}
  >


    <div className="window">
        <div className="nav">
            <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
            </div>
            <div className="title"><p>kartikeyprkash - zsh</p></div>
        </div>
        <div className="main-content">
            {children}
        </div>
    </div>  

    </Rnd>
    
  )
}

export default MacosWindow
