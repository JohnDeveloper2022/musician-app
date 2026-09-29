import './Home.css'
import Button from '../components/Button'
import BottomNavigation from '../components/BottomNavigation'

function Home({ sessions, onStartSession, onNavigate }) {
    const completedSessions = sessions
        .filter((session) => session.status === 'completed')
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    const latestSession = completedSessions[0]

    const intentionLabels = {
        technique: 'Técnica',
        repertoire: 'Repertorio',
        explore: 'Explorar'
    }

    const latestLearning = latestSession?.reflection || latestSession?.idea

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
                        <span>Para tu próxima sesión</span>
                    </div>

                    <div className='home__divider' />

                    <div className='home__card-content'>
                        {latestLearning ? (
                            <>
                                <p className='home__card-primary'>
                                    {latestLearning}
                                </p>
                                <p className='home__card-secondary'>
                                    Esto puede acompañar tu próxima sesión.
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
                        <span>Tu práctica reciente</span>
                    </div>

                    <div className='home__divider' />

                    <div className='home__card-content'>
                        {latestSession ? (
                            <>
                                <div>
                                    <p className='home__card-primary'>
                                        Última sesión · {intentionLabels[latestSession.intention]}
                                    </p>

                                    {latestSession.idea && (
                                        <p className='home__card-secondary'>
                                            1 idea capturada
                                        </p>
                                    )}
                                </div>

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
                            </>
                        ) : (
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
                        )}
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