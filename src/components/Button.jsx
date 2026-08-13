import './Button.css'

function Button({ children, variant = 'primary', disabled = false, icon }) {
    return (
        <button 
            type='button'
            className='button'
            data-variant={variant}
            disabled={disabled}
        >   
            {icon && (
                <span className='material-symbols-outlined'>
                    {icon}
                </span>
            )}
            
            {children}
        </button>
    )
}

export default Button