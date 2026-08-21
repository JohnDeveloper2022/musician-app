import  './SelectionCard.css'

function SelectionCard({ icon, label, iconBackground = false }) {
    return (
        <button type="button" className="selection-card">
            <span className="selection-card__content">
                <span
                    className={`material-symbols-outlined ${
                        iconBackground ? 'selection-card__icon--background' : ''
                    }`}
                >
                    {icon}
                </span>

                <span className="selection-card__label">
                    {label}
                </span>

                <span className="material-symbols-outlined selection-card__chevron">
                    chevron_right
                </span>
            </span>
        </button>
    )
}

export default SelectionCard