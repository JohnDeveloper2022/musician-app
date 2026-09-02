import './App.css'
import { useState } from 'react'
import Home from './pages/Home'
import IntentionRitual from './pages/IntentionRitual'
import PracticeSession from './pages/PracticeSession'
import CaptureIdea from './pages/CaptureIdea'

function App() { 
  const [currentScreen, setCurrentScreen] = useState('home')
  const [idea, setIdea] = useState('')

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
        <CaptureIdea
          onSaveIdea={(newIdea) => {
            setIdea(newIdea)
            setCurrentScreen('practice')
          }}
          onBackToSession={() => setCurrentScreen('practice')}
        />
      )}

      {currentScreen === 'reflection' && (
        <div>Reflexión Final</div>
      )}
    </>
  )
}

export default App
