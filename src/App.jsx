import './App.css'
import { useState } from 'react'
import Home from './pages/Home'
import IntentionRitual from './pages/IntentionRitual'
import PracticeSession from './pages/PracticeSession'

function App() { 
  const [currentScreen, setCurrentScreen] = useState('home') 

  return (
    <>
    {currentScreen === 'home' && (
      <Home onStartSession={() => setCurrentScreen('intention')} />
    )}

    {currentScreen === 'intention' && (
      <IntentionRitual onStartPractice={() => setCurrentScreen('practice')}
      />
    )}

    {currentScreen === 'practice' && (
      <PracticeSession
        onCaptureIdea={() => setCurrentScreen('capture')}
        onFinishSession={() => setCurrentScreen('reflection')}
      />
    )}

    {currentScreen === 'capture' && (
      <div>Capturar idea</div>
    )}

    {currentScreen === 'reflection' && (
      <div>Reflexión Final</div>
    )}
    </>
  )
}

export default App
