import './Home.css'
import Button from '../components/Button'
import BottomNavigation from '../components/BottomNavigation'

function Home({ sessions, onStartSession, onNavigate }) {
    const completedSessions = sessions
        .filter((session) => session.status === 'completed')
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    const latestSession = completedSessions[0]

    const latestReflectionSession = completedSessions.find(
        (session) => session.reflection
    )

    const latestLearning = latestSession?.idea || latestSession?.reflection

    return (
        <main className='home'>
            <div className='home__content'>

                <header className='home__header'>
                    <h1>Buenos días, Johnny</h1>
                    <p>¿Qué quieres trabajar hoy?</p>
                </header>

                <section className='home__card'>
                    <div className='home__card-header'>
                        <span className='material-symbols-outlined'>
                            spa
                        </span>
                        <span>Hoy</span>
                    </div>

                    <div className='home__divider' />

                    <div className='home__card-content'>
                        {latestLearning ? (
                            <>
                                <p className='home__card-primary'>
                                    {latestLearning}
                                </p>
                                <p className='home__card-secondary'>
                                    Este aprendizaje puede acompañar tu próxima sesión.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className='home__card-primary'>
                                    Tus descubrimientos pueden convertirse en el punto de partida de tu próxima sesión.
                                </p>
                                <p className='home__card-secondary'>
                                    Cuando encuentres algo valioso, puedes capturarlo.
                                </p>
                            </>
                        )}
                    </div>
                </section>

                <Button onClick={onStartSession}>Comenzar sesión</Button>

                <section className='home__card'>
                    <div className='home__card-header'>
                        <span className='material-symbols-outlined'>
                            edit_note
                        </span>
                        <span>Última reflexión</span>
                    </div>

                    <div className='home__divider' />

                    <div className='home__card-content'>
                        <p className='home__card-primary'>
                            {latestReflectionSession
                                ? latestReflectionSession.reflection
                                : 'Todavía no tienes una reflexión registrada.'}
                        </p>
                        <button
                        type='button'
                        className='home__history-link'
                        onClick={() => onNavigate('history')}
                        >
                            <span>Ver historial</span>
                            <span className='material-symbols-outlined'>
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </section>

            </div>

            <div className='home__spacer' />

            <BottomNavigation 
                activeItem='home'
                onNavigate={onNavigate}
            />

        </main>
    )
}

export default Home