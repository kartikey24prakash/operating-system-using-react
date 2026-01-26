import React from 'react'
import MacosWindow from './MacosWindow'

import "./resume.scss"
const Resume = ({windowName, setWindowsState}) => {
  return (
    <MacosWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="resume-window">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </MacosWindow>
  )
}

export default Resume
