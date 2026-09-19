import './Profile.css'
import ProfileSummary from '../components/ProfileSummary'
import SettingRow from '../components/SettingRow'
import BottomNavigation from '../components/BottomNavigation'

function Profile({ onNavigate }) {
    return (
        <main className='profile'>
            <div className='profile__content'>
                <header className='profile__header'>
                    <h1>Perfil</h1>
                    <p>Personaliza tu experiencia y consulta tu información.</p>
                </header>

                <ProfileSummary
                    initial='J'
                    name='Johnny'
                    role='Músico'
                />

                <section className='profile__settings'>
                    <SettingRow
                        icon='flag'
                        label='Objetivos'
                        onClick={() => onNavigate('goals')}
                    />

                    <SettingRow
                        icon='palette'
                        label='Apariencia'
                    />
                    
                    <SettingRow
                        icon='notifications'
                        label='Recordatorios'
                    />

                    <SettingRow
                        icon='info'
                        label='Acerca de'
                    />
                </section>
            </div>

            <div className='profile__spacer' />

            <BottomNavigation
                activeItem='profile'
                onNavigate={onNavigate}
            />
        </main>
    )
}

export default Profile