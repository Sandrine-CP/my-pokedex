import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types"
import NavBar from './components/NavBar'

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
      setPokemonIndex(pokemonIndex - 1)}

    const handleClickNext = () => {
      setPokemonIndex(pokemonIndex + 1)}

    return (
      <>
        <div>
          <NavBar 
            onPrevious={ handleClickPrevious }
            onNext={ handleClickNext }
            showPrevious={ pokemonIndex > 0}
            showNext={ pokemonIndex < pokemonList.length - 1}
          />
        </div>
        <div>
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
          <p>Index du Pokemon : {pokemonIndex}</p>
        </div>
      </>
    );
}

export default App
