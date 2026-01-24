import React from 'react'
import MacosWindow from './MacosWindow'

import "./resume.scss"
const Resume = () => {
  return (
    <MacosWindow>
        <div className="resume-window">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </MacosWindow>
  )
}

export default Resume
