import './SummaryCard.css'

function SummaryCard({ icon, metadata, primary, secondary }) {
    return (
        <article className='summary-card'>
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
        </article>
    )
}

export default SummaryCard