import './SessionDetail.css'
import Button from '../components/Button'

function SessionDetail({ session, onBack}) {

    function formatIntention(intention) {
        const labels = {
            technique: 'Técnica',
            repertoire: 'Repertorio',
            explore: 'Explorar'
        }

        return labels[intention] || intention
    }

    return (
        <main className='session-detail'>

            <header className='session-detail__header'>
                <h1>Sesión</h1>
                <p>
                    {new Date(session.createdAt).toLocaleDateString(
                        'es-AR',
                        {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        }
                    )}
                </p>
            </header>

            <section className='session-detail__card'>

                <div className='session-detail__section'>
                    <span className='session-detail__label'>
                        Intención
                    </span>
                    <p>{formatIntention(session.intention)}</p>
                </div>

                {session.idea && (
                    <div className='session-detail__section'>
                        <span className='session-detail__label'>
                            Idea capturada
                        </span>
                        <p>{session.idea}</p>
                    </div>
                )}

                <div className='session-detail__section'>
                    <span className='session-detail__label'>
                        Reflexión final
                    </span>
                    <p>
                        {session.reflection || 'Sin reflexión registrada'}
                    </p>
                </div>

            </section>

            <div className='session-detail__spacer' />

            <Button
                variant='secondary'
                onClick={onBack}
            >
                Volver al historial
            </Button>

        </main>
    )
}

export default SessionDetail
