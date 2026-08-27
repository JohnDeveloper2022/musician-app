import './Home.css'
import Button from '../components/Button'
import BottomNavigation from '../components/BottomNavigation'

function Home() {
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
                        <p className='home__card-primary'>
                            Ayer descubriste una nueva forma de relajar la mano derecha.
                        </p>
                        <p className='home__card-secondary'>
                            Tu aprendizaje siempre puede acompañarte.
                        </p>
                    </div>
                </section>

                <Button>Comenzar sesión</Button>

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
                            Hoy sentí que pude escuchar con más atención.
                        </p>
                        <button type='button' className='home__history-link'>
                            <span>Ver historial</span>
                            <span className='material-symbols-outlined'>
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </section>

            </div>

            <div className='home__spacer' />

            <BottomNavigation activeItem='home' />

        </main>
    )
}

export default Home