import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import IntentionRitual from './pages/IntentionRitual'

function App() {
  const [currentScreen, setCurrentScreen] = useState('home')
  
  return (
    <>
      {currentScreen === 'home' && (
        <Home onStartSession={() => setCurrentScreen('intention')} />
      )}

      {currentScreen === 'intention' && (
        <IntentionRitual />
      )}
    </>
  )
}

export default App
