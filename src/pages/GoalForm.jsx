import './GoalForm.css'
import { useState } from 'react'
import Button from '../components/Button'

function GoalForm({ onSaveGoal, onBack }) {
    const [title, setTitle] = useState('')

    return (
        <main className='goal-form'>

            <header className='goal-form__header'>
                <h1>Nuevo objetivo</h1>
                <p>¿Hacia dónde quieres llevar tu práctica?</p>
            </header>

            <section className='goal-form__card'>

                <div className='goal-form__card-header'>
                    <span className='material-symbols-outlined'>
                        flag
                    </span>

                    <span className='goal-form__label'>
                        Objetivo
                    </span>
                </div>
                
                <div className='goal-form__divider' />

                <input
                    className='goal-form__input'
                    type='text'
                    placeholder='Escribe tu objetivo...'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

            </section>

            <div className='goal-form__spacer' />

            <section className='goal-form__actions'>

                <Button
                    variant='primary'
                    disabled={!title.trim()}
                    onClick={() => onSaveGoal(title.trim())}
                >
                    Guardar objetivo
                </Button>

                <button
                    type='button'
                    className='goal-form__back'
                    onClick={onBack}
                >
                    <span className='material-symbols-outlined'>
                        arrow_back
                    </span>

                    <span>Volver a objetivos</span>
                </button>
                
            </section>
        </main>
    )
}

export default GoalForm
