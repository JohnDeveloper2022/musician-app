import './PracticeSession.css'
import Button from '../components/Button'
import ContinuityIndicator from '../components/ContinuityIndicator'

function PracticeSession({ onCaptureIdea, onFinishSession}) {
    return (
        <main className='practice-session'>

            <header className='practice-session__header'>
                <h1>Sesión de práctica</h1>
                <p>Tu música es la protagonista.</p>
            </header>

            <div className='practice-session__spacer' />

            <section className='practice-session__journey'>
                <ContinuityIndicator currentStep={0} />
            </section>

            <div className='practice-session__spacer' />

            <section className='practice-session__capture'>

                <Button
                    variant='secondary'
                    icon='lightbulb'
                    onClick={onCaptureIdea}
                >
                    Capturar idea
                </Button>

                <p className='practice-session__helper'>
                    Sólo si aparece algo importante
                </p>

                <button 
                    type='button'
                    className='practice-session__finish'
                    onClick={onFinishSession}
                >
                    <span className='material-symbols-outlined'>
                        check_circle
                    </span>
                    <span>Finalizar sesión</span>               
                </button>

            </section>
            
        </main>
    )
}

export default PracticeSession