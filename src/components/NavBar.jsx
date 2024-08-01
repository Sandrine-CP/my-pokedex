import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {
  const handleClick = (pokemon, index) => {
    setPokemonIndex(index);
    if (pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  }
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handleClick(pokemon,index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

export default NavBar;
