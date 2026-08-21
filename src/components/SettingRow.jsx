import './SettingRow.css'

function SettingRow( {icon, label }) {
    return (
        <button type='button' className='setting-row'>
            <span className='setting-row__content'>
                <span className='material-symbols-outlined setting-row__icon'>
                    {icon}
                </span>

                <span className='setting-row__label'>
                    {label}
                </span>

                <span className='material-symbols-outlined setting-row__chevron'>
                    chevron_right
                </span>
            </span>
        </button>
    )
}

export default SettingRow