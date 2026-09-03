import './App.css'
import { useState } from 'react'
import Home from './pages/Home'
import IntentionRitual from './pages/IntentionRitual'
import PracticeSession from './pages/PracticeSession'
import CaptureIdea from './pages/CaptureIdea'
import FinalReflection from './pages/FinalReflection'

function App() { 
  const [currentScreen, setCurrentScreen] = useState('home')
  const [session, setSession] = useState({
    idea: '',
    reflection: '',
    status: 'in_progress'
  })

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
            setSession((currentSession) => ({
              ...currentSession,
              idea: newIdea
            }))
            setCurrentScreen('practice')
          }}
          onBackToSession={() => setCurrentScreen('practice')}
        />
      )}

      {currentScreen === 'reflection' && (
        <FinalReflection
          onSaveReflection={(newReflection) => {
            setSession((currentSession) => ({
              ...currentSession,
              reflection: newReflection,
              status: 'completed'
            }))
            setCurrentScreen('home')
          }}
          onSkipReflection={() => {
            setSession((currentSession) => ({
              ...currentSession,
              status: 'completed'
            }))
            setCurrentScreen('home')
          }}
        />
      )}
    </>
  )
}

export default App
