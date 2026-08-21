import './App.css'
import BottomNavigation from './components/BottomNavigation'
import SelectionCard from './components/SelectionCard'

function App() {
  return (
    <main>
      <h1>Musician App</h1>

      <SelectionCard icon="music_note" label="Técnica" iconBackground />

      <BottomNavigation activeItem='home' />
    </main>
  )
}

export default App
