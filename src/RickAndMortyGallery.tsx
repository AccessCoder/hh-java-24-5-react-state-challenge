import {RickAndMortyCharacter} from "./types/RickAndMortyCharacter.ts";
import {useNavigate} from "react-router-dom";


type RickAndMortyGalleryProps = {
    chars: RickAndMortyCharacter[]
    handleSearchTextChange: (text:string) => void //setter Methode bekommt einen string und gibt keinen return, darum void!
}

export default function RickAndMortyGallery(props:RickAndMortyGalleryProps){

    const navigate = useNavigate();


    return(
        <>
            <button onClick={() => navigate("/character/new")}>Add Character</button>
            <input
                type={"text"}
                onChange={(event) => props.handleSearchTextChange(event.target.value)}
                placeholder={"Search for a Character"}/>
            {props.chars.length > 0 ?
                props.chars.map(
                (char:RickAndMortyCharacter) => (
                    <>
                        <h1>{char.name}</h1>
                        <p>{char.species}</p>
                        <img src={char.image}/>
                    </>
                )
            )
            :
            <p>No Characters found!</p>}
        </>
    )
}