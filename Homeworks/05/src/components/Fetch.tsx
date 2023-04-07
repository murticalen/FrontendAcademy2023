
const getPokemonUrl = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}/`

export default function Fetch() {

  // your task here is to fetch Pokémon from a given URL and just display its name
  // first Pokémon should be fetched when the compontent is first rendered
  // then, once user clicks on FETCH button, increment your id to fetch the next one and add it to the list

  // return 2 elements:
  // 1st: a button which will trigger another fetch on click, for a Pokémon with next id
  // 2nd: All Pokémon stored in your list
  return (
    <div>
      <button>FETCH</button>
      {/* display Pokémon in a list here, just display a name for each Pokémon */}
    </div>
  )
}
