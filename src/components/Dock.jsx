import React from 'react'
import "./dock.scss"

const Dock = ({windowState, setWindowsState}) => {
  return (
    <footer className='dock'>
        <div 
          onClick={() => { setWindowsState(state => ({ ...state, github: true })) }} 
          className="icon github"><img src="./doc-icon/github.svg" alt="" />
        </div>
        <div 
        
          onClick={()=>{setWindowsState(state=>({...state,note:true}))}}
        className="icon note"><img src="./doc-icon/note.svg" alt="" />
        </div>
        <div 
          onClick={()=>{setWindowsState(state=>({...state,resume:true}))}}
        className="icon pdf"><img src="./doc-icon/pdf.svg" alt="" /></div>
        <div 
        onClick={()=>{window.open("https://calendar.google.com/"),"_blank"}}
        className="icon calender"><img src="./doc-icon/calender.svg" alt="" /></div>
        <div 
          onClick={()=>{setWindowsState(state=>({...state,spotify:true}))}}
        className="icon spotify"><img src="./doc-icon/spotify.svg" alt="" /></div>
        <div 
        onClick={()=>{window.open("mailto:kartikey@gmail.com"),""}}
        className="icon mail"><img src="./doc-icon/mail.svg" alt="" /></div>
        <div
        onClick={()=>{window.open("https://www.linkedin.com/in/kartikey-prakash?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app","_blank")}} 
        className="icon link"><img src="./doc-icon/link.svg" alt="" /></div>
        <div
          onClick={()=>{setWindowsState(state=>({...state,cli:true}))}} 
        className="icon cli"><img src="./doc-icon/cli.svg" alt="" /></div>
    </footer>
  )
}

export default Dock
