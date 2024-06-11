import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './MyTitle'
import PokemonCard from './components/PokemonCard'

function App() {
  return (
    <>
      <div>
        <PokemonCard />
      </div>
    </>
  );
}

export default App
