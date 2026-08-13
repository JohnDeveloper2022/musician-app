import './App.css'
import Button from './components/Button'

function App() {
  return (
    <main>
      <h1>Musician App</h1>

      <Button variant='primary'>
        Comenzar
      </Button>

      <Button variant='secondary' icon='arrow_back'>
        Volver
      </Button>

      <Button variant='text' icon='arrow_back'>
        Volver a la sesión
      </Button>
    </main>
  )
}

export default App
