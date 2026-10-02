import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'



function App() {
  return (
    <main>
      <Nav />
      <Dock />

      <Github />
      <Notes />
    </main>
  )
}

export default App