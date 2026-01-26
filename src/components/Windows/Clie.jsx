import React from 'react'
import MacosWindow from './MacosWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"
const Clie = ({windowName, setWindowsState}) => {
  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
    about: {
      description: 'Show information about me.',
      usage: 'about',
      fn: () => 'Hi, I am Kartikey Prakash, a passionate developer. This is my portfolio OS!'
    },
    skills: {
      description: 'List my skills.',
      usage: 'skills',
      fn: () => 'Skills: React, JavaScript, CSS, HTML, Node.js, Python, and more.'
    },
    contact: {
      description: 'Show contact information.',
      usage: 'contact',
      fn: () => 'Email: kartikeyprakash@example.com | GitHub: github.com/kartikeyprakash'
    },
    
  };

  const welcomeMessage = `
Welcome to the Portfolio CLI Emulator!

Available commands:
- about: Show information about me
- skills: List my skills
- contact: Show contact information
- echo: Echo a passed string
- help: List all available commands
`;

  return (
    <MacosWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"kartikeyprkash:~$"}
          promptLabelStyle={{ color: "lightgreen" }}
        />
      </div>
    </MacosWindow>
  )
}

export default Clie
