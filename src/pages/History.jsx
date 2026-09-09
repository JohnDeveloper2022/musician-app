import './History.css'
import SummaryCard from '../components/SummaryCard'
import BottomNavigation from '../components/BottomNavigation'

function History({ sessions, onNavigate, onSelectSession }) {
    const sortedSessions = [...sessions].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )

    return (
        <main className='history'>

            <header className='history__header'>
                <h1>Historial</h1>
                <p>Redescubre tus sesiones y aprendizajes.</p>
            </header>

            <section className='history__sessions'>

                <h2>SESIONES RECIENTES</h2>

                {sortedSessions.length > 0 ? (
                    <div className='history__list'>
                        {sortedSessions.map((session) => (
                            <SummaryCard
                                key={session.id}
                                icon='calendar_today'                                
                                metadata={new Date(session.createdAt).toLocaleDateString(
                                    'es-AR',
                                    {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    }
                                )}
                                primary={
                                    session.reflection || 'Sin reflexión registrada'
                                }
                                secondary={session.idea ? '1 idea capturada' : '0 ideas capturadas'}
                                onClick={() => onSelectSession?.(session)}
                            />
                        ))}
                    </div>
                ) : (
                    <p className='history__empty'>
                        Aún no tienes sesiones registradas.
                    </p>
                )}

            </section>

            <BottomNavigation
                activeItem='historial'
                onNavigate={onNavigate}
            />

        </main>
    )
}

export default History 