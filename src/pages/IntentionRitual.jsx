import { useState } from 'react'
import './IntentionRitual.css'
import Button from '../components/Button'
import SelectionCard from '../components/SelectionCard'

function IntentionRitual({ onStartPractice }) {
    const [selectedIntention, setSelectedIntention] = useState(null)
    
    return (
        <main className='intention-ritual'>
            <div className='intention-ritual__content'>
                <header className='intention-ritual__header'>
                    <h1>¿Qué quieres trabajar hoy?</h1>
                    <p>Elige una intención para esta sesión.</p>
                </header>

                <div className='intention-ritual__options'>
                    <SelectionCard
                        icon='music_note'
                        label='Técnica'
                        iconBackground
                        selected={selectedIntention === 'technique'}
                        onClick={() => setSelectedIntention('technique')}
                    />

                    <SelectionCard
                        icon='library_music'
                        label='Repertorio'
                        iconBackground
                        selected={selectedIntention === 'repertoire'}
                        onClick={() => setSelectedIntention('repertoire')}
                    />

                    <SelectionCard
                        icon='explore'
                        label='Explorar'
                        iconBackground
                        selected={selectedIntention === 'explore'}
                        onClick={() => setSelectedIntention('explore')}
                    />
                </div>
            </div>

            <div className='intention-ritual__spacer' />

            <div className='intention-ritual__cta'>
                <Button
                    variant='primary'
                    disabled={!selectedIntention}
                    onClick={() => onStartPractice(selectedIntention)}
                >
                    Comenzar sesión
                </Button>

                <p>No hay una elección correcta. Sólo tu siguiente paso.</p>
            </div>
        </main>
    )
}

export default IntentionRitual