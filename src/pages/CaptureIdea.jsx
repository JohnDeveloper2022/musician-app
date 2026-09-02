import './CaptureIdea.css'
import { useState } from 'react'
import Button from '../components/Button'

function CaptureIdea({ onSaveIdea, onBackToSession }) {
    const [idea, setIdea] = useState('')

    return (
        <main className='capture-idea'>

            <header className='capture-idea__header'>
                <h1>Capturar idea</h1>
                <p>¿Qué acabas de descubrir?</p>
            </header>

            <section className='capture-idea__card'>

                <div className='capture-idea__card-header'>
                    <span className='material-symbols-outlined'>
                        lightbulb
                    </span>
                    <span className='capture-idea__label'>
                        Idea
                    </span>
                </div>

                <div className='capture-idea__divider' />

                <textarea
                    className='capture-idea__textarea'
                    placeholder='Escribe una idea, sensación o descubrimiento...'
                    value={idea}
                    onChange={(event) => setIdea(event.target.value)}
                />

            </section>

            <div className='capture-idea__spacer' />

            <section className='capture-idea__actions'>

                <Button
                    variant='primary'
                    onClick={() => onSaveIdea(idea)}
                >
                    Guardar idea
                </Button>

                <button
                    type='button'
                    className='capture-idea__back'
                    onClick={onBackToSession}
                >
                    <span className='material-symbols-outlined'>
                        arrow_back
                    </span>

                    <span>Volver a la sesión</span>
                </button>

            </section>

        </main>
    )
}

export default CaptureIdea