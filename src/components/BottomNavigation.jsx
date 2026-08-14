import './BottomNavigation.css'
import NavItem from './NavItem'

function BottomNavigation({ activeItem = 'home' }) {
    return (
        <nav className='bottom-navigation'>
            <NavItem 
              icon="home"
              label="Hoy"
              active={activeItem === 'home'}
            />

            <NavItem 
              icon="history"
              label="Historial"
              active={activeItem === 'historial'}
            />

            <NavItem 
              icon="Flag"
              label="Objetivos"
              active={activeItem === 'goals'}
            />

            <NavItem 
              icon="person"
              label="Perfil"
              active={activeItem === 'profile'}
            />
        </nav>
    )
}

export default BottomNavigation