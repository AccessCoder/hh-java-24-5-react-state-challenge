
import './App.css'
import {useState} from "react";
import {response} from "./Character.ts";
import {RickAndMortyCharacter} from "./types/RickAndMortyCharacter.ts";
import {Route, Routes} from "react-router-dom";
import RickAndMortyGallery from "./RickAndMortyGallery.tsx";
import NewCharacter from "./NewCharacter.tsx";

export default function App() {
    const [characters, setCharacters] = useState<RickAndMortyCharacter[]>(response.results);
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    function addCharacter(character: RickAndMortyCharacter) {
        setCharacters([...characters, character]);
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<RickAndMortyGallery handleSearchTextChange={setSearchText}
                                                              chars={filteredCharacters}/>}/>
                <Route path="/character/new" element={<NewCharacter onAddCharacter={addCharacter}/>}/>
            </Routes>
        </>
    );
}
