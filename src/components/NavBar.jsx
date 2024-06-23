import PokemonCard from "./PokemonCard"


  
function NavBar ({onPrevious, onNext, showPrevious, showNext}) {

    return (
      <div>
        { showPrevious && (
          <button onClick={onPrevious}>Précédent</button>
        )} 
        { showNext && (
        <button onClick={onNext}>Suivant</button>
        )}
       </div>
    )
}

export default NavBar