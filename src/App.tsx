
import './App.css'
import {useState} from "react";
import {response} from "./Character.ts";
import RickAndMortyGallery, {RickAndMortyChar} from "./RickAndMortyGallery.tsx";

function App() {

    const [RMChars, setRMChars] = useState(response)
    const [Search, setSearch] = useState<string>("")

    let filteredCharacters:RickAndMortyChar[] = RMChars.results.filter((char) => char.name.toLowerCase().includes(Search.toLowerCase()) )

  return (
    <>
        <input onChange={(event) => setSearch(event.target.value) }/>
        {filteredCharacters.length > 0 ?
            <RickAndMortyGallery chars={filteredCharacters} />
            :
            <h2>No Chars found!</h2>
        }
    </>
  )
}

export default App
