import PokemonCard from "./PokemonCard"

function NavBar ({pokemonList}) {

    return (
      <div>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.name}> {pokemon.name} 
        </button>
      ))}
      </div>
    )
  }

export default NavBar