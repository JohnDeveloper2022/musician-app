import './Goals.css'
import SummaryCard from '../components/SummaryCard'
import Button from '../components/Button'
import BottomNavigation from '../components/BottomNavigation'

function Goals({ onNavigate }) {
    const goals = [
        {
            id: 1,
            metadata: 'Objetivo activo',
            primary: 'Mejorar la estabilidad del registro agudo.',
            secondary: 'Creado hace 2 semanas'            
        },
        {
            id: 2,
            metadata: 'Objetivo activo',
            primary: 'Memorizar el segundo movimiento del concierto.',
            secondary: 'Creado hace 5 días'
        }
    ]

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
                                metadata={goal.metadata}
                                primary={goal.primary}
                                secondary={goal.secondary}
                            />
                        ))}
                    </div>
                </section>
            ) : (
                <p className='goals__empty'>
                    Aún no tienes objetivos activos.
                </p>
            )}

            <div className='goals__spacer' />

            <div className='goals__action'>
                <Button>Nuevo objetivo</Button>
            </div>

            <BottomNavigation
                activeItem='goals'
                onNavigate={onNavigate}
            />
        </main>
    )
}

export default Goals