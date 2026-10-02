import './Goals.css'
import SummaryCard from '../components/SummaryCard'
import Button from '../components/Button'
import BottomNavigation from '../components/BottomNavigation'

function Goals({ goals, onNavigate, onNewGoal }) {

    function formatCreatedAt(createdAt) {
        const days = Math.floor(
            (Date.now() - new Date(createdAt).getTime()) /
            (1000 * 60 * 60 * 24)
        )

        if (days === 0) return 'Creado hoy'
        if (days === 1) return 'Creado ayer'

        return `Creado hace ${days} días`
    }

    return (
        <main className='goals'>
            <header className='goals__header'>
                <h1>Objetivos</h1>
                <p>
                    Los objetivos te ayudan a dar dirección a tu práctica, no a medirla.
                </p>
            </header>

            {goals.length > 0 ? (
                <section className='goals__active'>
                    <h2>OBJETIVOS ACTIVOS</h2>

                    <div className='goals__list'>
                        {goals.map((goal) => (
                            <SummaryCard
                                key={goal.id}
                                icon='flag'
                                metadata='Objetivo activo'
                                primary={goal.title}
                                secondary={formatCreatedAt(goal.createdAt)}
                            />
                        ))}
                    </div>
                </section>
            ) : (
                <div className='goals__empty-area'>
                    <div className='goals__empty'>
                        <span className='material-symbols-outlined'>
                            flag
                        </span>

                        <p>Aún no tienes objetivos activos.</p>
                    </div>
                </div>
            )}

            <div className='goals__action'>
                <Button onClick={onNewGoal}>Nuevo objetivo</Button>
            </div>

            <BottomNavigation
                activeItem='goals'
                onNavigate={onNavigate}
            />
        </main>
    )
}

export default Goals