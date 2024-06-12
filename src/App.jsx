import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './MyTitle'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types"

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App({pokemon}) {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {pokemonIndex >0 && (
        <button onClick={handleClickPrevious}>Précédent</button>
        )}
        {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext}>Suivant</button>
        )}
        <p>Index du Pokemon : {pokemonIndex}</p>
      </div>
    </>
  );
}

export default App
