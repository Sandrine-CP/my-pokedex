import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './MyTitle'
import PokemonCard from './components/PokemonCard'

const pokemonlist = [
  {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
      name: "mew",
  },
];

function App({pokemon}) {
  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonlist[0]} />
      </div>
    </>
  );
}

export default App
