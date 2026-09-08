import './BottomNavigation.css'
import NavItem from './NavItem'

function BottomNavigation({ activeItem = 'home', onNavigate }) {
    return (
        <nav className='bottom-navigation'>
            <NavItem 
              icon="home"
              label="Hoy"
              active={activeItem === 'home'}
              onClick={() => onNavigate('home')}
            />

            <NavItem 
              icon="history"
              label="Historial"
              active={activeItem === 'historial'}
              onClick={() => onNavigate('history')}
            />

            <NavItem 
              icon="flag"
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