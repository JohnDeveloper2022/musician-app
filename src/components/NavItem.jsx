import './NavItem.css'

function NavItem({ icon, label, active = false, onClick }) {
    return (
        <button
          type="button"
          className="nav-item"
          data-active={active}
          onClick={onClick}
        >
            <span className='nav-item__content'>
                <span className="material-symbols-outlined">
                    {icon}
                </span>

                <span className="nav-item__label">
                    {label}
                </span>
            </span>
        </button>
    )
}

export default NavItem