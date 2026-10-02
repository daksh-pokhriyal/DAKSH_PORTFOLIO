import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'

import Resume from './components/windows/Resume'
import Notes from './components/windows/Notes'

import Spotify from './components/windows/Spotify'


function App() {
  return (
    <main>
      <Nav />
      <Dock />

      <Github />
      <Notes />
      <Resume />
      <Spotify />
     
     
    </main>
  )
}

export default App