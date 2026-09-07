import './App.css'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import IntentionRitual from './pages/IntentionRitual'
import PracticeSession from './pages/PracticeSession'
import CaptureIdea from './pages/CaptureIdea'
import FinalReflection from './pages/FinalReflection'

function App() { 
  const [currentScreen, setCurrentScreen] = useState('home')
  const [session, setSession] = useState(null)
  const [sessions, setSessions] = useState(() => {
    const storedSessions = localStorage.getItem('musician-app-sessions')

    return storedSessions ? JSON.parse(storedSessions) : []
  })

  useEffect(() => {
    localStorage.setItem(
      'musician-app-sessions',
      JSON.stringify(sessions)
    )
  }, [sessions])

  return (
    <>
      {currentScreen === 'home' && (
        <Home onStartSession={() => setCurrentScreen('intention')} />
      )}

      {currentScreen === 'intention' && (
        <IntentionRitual onStartPractice={(selectedIntention) => {
          setSession({
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
            intention: selectedIntention,
            idea: '',
            reflection: '',
            status: 'in_progress'
          })

          setCurrentScreen('practice')
        }}
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
            const completedSession = {
              ...session,
              reflection: newReflection,
              status: 'completed'
            }

            setSession(completedSession)
            setSessions((currentSessions) => [
              ...currentSessions,
              completedSession
            ])

            setCurrentScreen('home')
          }}
          onSkipReflection={() => {
            const completedSession = {
              ...session,
              status: 'completed'
            }

            setSession(completedSession)
            setSessions((currentSessions) => [
              ...currentSessions,
              completedSession
            ])
            
            setCurrentScreen('home')
          }}
        />
      )}
    </>
  )
}

export default App
