import './ContinuityIndicator.css'

function ContinuityIndicator({ currentStep = 0 }) {
    const steps = [
        'Calentamiento',
        'Exploración',
        'Desarrollo',
        'Cierre'
    ]    

    return (
        <div className='continuity-indicator'>
            <div className='continuity-indicator__progress'>
                {steps.map((step, index) => (
                    <span key={step} className='continuity-indicator__item'>

                        <span className='continuity-indicator__connector' />

                        <span className={`continuity-indicator__node ${
                            index === currentStep
                                ? 'continuity-indicator__node--active'
                                : ''
                        }`}
                        />
                   
                    </span>
                ))}
            </div>

            <span className='continuity-indicator__label'>
                {steps[currentStep]}
            </span>
        </div>
    )
}

export default ContinuityIndicator