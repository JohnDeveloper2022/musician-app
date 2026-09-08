import './SessionCard.css'

function SessionCard({ date, reflection, ideasCount, onClick }) {
    return (
        <button
            type='button'
            className='session-card'
            onClick={onClick}
        >
            <div className='session-card__header'>

                <span className='material-symbols-outlined'>
                    calendar_today
                </span>

                <span className='session-card__date'>
                    {date}
                </span>

            </div>

            <div className='session-card__content'>

                <p className='session-card__reflection'>
                    {reflection}
                </p>

                <p className='session-card__ideas'>
                    {ideasCount}{' '}
                    {ideasCount === 1 ? 'idea capturada' : 'ideas capturadas'}
                </p>

            </div>
        </button>
    )    
}

export default SessionCard