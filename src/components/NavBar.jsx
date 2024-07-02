import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
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
