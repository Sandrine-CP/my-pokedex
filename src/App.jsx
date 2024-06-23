import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types"
import NavBar from './components/NavBar'

  
  function App() {

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
    
//---------------RESTE A FAIRE----------------------------------- 
//4. Manipuler l'état : modifie le code pour que le clic sur un bouton Pokémon appelle setPokemonIndex 
//afin de mettre à jour le Pokémon affiché dans App. 
//
//Tu dois ajouter un gestionnaire d'événements (onClick) sur les boutons générés avec map pour gérer cette fonctionnalité.
//5. Validation : vérifie que les boutons pour chaque Pokémon sont générés dynamiquement dans NavBar 
//et que le clic sur un bouton met à jour correctement le Pokémon affiché dans App.


    const [pokemonIndex, setPokemonIndex] = useState(0);

    // const handleClickPrevious = () => {
    //   setPokemonIndex(pokemonIndex - 1)}

    // const handleClickNext = () => {
    //   setPokemonIndex(pokemonIndex + 1)}

    return (
      <>
        <NavBar pokemonList={pokemonList}/>

        <div>
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
          <p>Index du Pokemon : {pokemonIndex}</p>
        </div>
      </>
    );
}

export default App
