import './App.css'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import IntentionRitual from './pages/IntentionRitual'
import PracticeSession from './pages/PracticeSession'
import CaptureIdea from './pages/CaptureIdea'
import FinalReflection from './pages/FinalReflection'
import History from './pages/History'
import Goals from './pages/Goals'
import Profile from './pages/Profile'

function App() { 
  const [currentScreen, setCurrentScreen] = useState(() => {
    const storedSession = localStorage.getItem('musician-app-current-session')

    return storedSession ? 'practice' : 'home'
  })

  const [session, setSession] = useState(() => {
    const storedSession = localStorage.getItem('musician-app-current-session')

    return storedSession ? JSON.parse(storedSession) : null
  })

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

  useEffect(() => {
    if (session) {
      localStorage.setItem(
        'musician-app-current-session',
        JSON.stringify(session)
      )
    } else {
      localStorage.removeItem('musician-app-current-session')
    }
  }, [session])

  return (
    <>
      {currentScreen === 'home' && (
        <Home
          sessions={sessions}
          onStartSession={() => setCurrentScreen('intention')}
          onNavigate={setCurrentScreen}
        />
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

            setSessions((currentSessions) => [
              ...currentSessions,
              completedSession
            ])

            setSession(null)
            setCurrentScreen('home')
          }}
          onSkipReflection={() => {
            const completedSession = {
              ...session,
              status: 'completed'
            }

            setSessions((currentSessions) => [
              ...currentSessions,
              completedSession
            ])
            
            setSession(null)
            setCurrentScreen('home')
          }}
        />
      )}

      {currentScreen === 'history' && (
        <History 
          sessions={sessions}
          onNavigate={setCurrentScreen}
        />
      )}

      {currentScreen === 'goals' && (
        <Goals
          onNavigate={setCurrentScreen}
        />
      )}

      {currentScreen === 'profile' && (
        <Profile
          onNavigate={setCurrentScreen}
        />
      )}
    </>
  )
}

export default App
