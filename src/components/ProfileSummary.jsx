import './ProfileSummary.css'

function ProfileSummary({ initial, name, role }) {
    return (
        <section className='profile-summary'>
            <div className='profile-summary__avatar'>
                {initial}
            </div>

            <div className='profile-summary__info'>
                <span className='profile-summary__name'>
                    {name}    
                </span>

                <span className='profile-summary__role'>
                    {role}
                </span>               
            </div>
        </section>
    )
}

export default ProfileSummary