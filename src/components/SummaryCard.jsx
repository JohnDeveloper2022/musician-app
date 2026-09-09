import './SummaryCard.css'

function SummaryCard({ icon, metadata, primary, secondary, onClick }) {
    const CardElement = onClick ? 'button' : 'article'

    return (
        <CardElement
            className='summary-card'
            type={onclick ? 'button' : undefined}
            onClick={onClick}
        >

            <div className='summary-card__header'>
                <span className='material-symbols-outlined summary-card__icon'>
                    {icon}
                </span>

                <span className='summary-card__metadata'>
                    {metadata}
                </span>
            </div>

            <div className='summary-card__content'>
                <p className='summary-card__primary'>
                    {primary}
                </p>

                <p className='summary-card__secondary'>
                    {secondary}
                </p>
            </div>
        </CardElement>
    )
}

export default SummaryCard