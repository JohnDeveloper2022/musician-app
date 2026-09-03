import './FinalReflection.css'
import { useState } from 'react'
import Button from '../components/Button'

function FinalReflection({ onSaveReflection, onSkipReflection }) {
    const [reflection, setReflection] = useState('')

    return (
        <main className='final-reflection'>

            <header className='final-reflection__header'>
                <h1>Reflexión final</h1>
                <p>¿Con qué te gustaría quedarte de esta sesión?</p>
            </header>

            <section className='final-reflection__card'>

                <div className='final-reflection__card-header'>
                    <span className='material-symbols-outlined'>
                        edit_note
                    </span>
                    <span className='final-reflection__label'>
                        Aprendizaje
                    </span>
                </div>

                <div className='final-reflection__divider' />

                <textarea
                    className='final-reflection__textarea'
                    placeholder='Escribe una breve reflexión sobre tu práctica...'
                    value={reflection}
                    onChange={(event) => setReflection(event.target.value)}
                />

            </section>

            <div className='final-reflection__spacer' />

            <section className='final-reflection__actions'>

                <Button
                    variant='primary'
                    onClick={() => onSaveReflection(reflection)}
                >
                    Guardar reflexión
                </Button>

                <button
                    type='button'
                    className='final-reflection__skip'
                    onClick={onSkipReflection}
                >
                    <span className='material-symbols-outlined'>
                        arrow_back
                    </span>

                    <span>Omitir reflexión</span>
                </button>

            </section>

        </main>
    )
}

export default FinalReflection