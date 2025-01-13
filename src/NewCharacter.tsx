import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {RickAndMortyCharacter} from "./types/RickAndMortyCharacter.ts";

type NewCharacterProps = {
    onAddCharacter: (character: RickAndMortyCharacter) => void;
};

export default function NewCharacter(props: Readonly<NewCharacterProps>) {
    const [character, setCharacter] = useState<RickAndMortyCharacter>({
        name: "",
        status: "",
        species: "",
        image: "",
    }); //useState mit ganzem Character als Objekt. Einfacher ist es für jedes Feld einen useState zu haben, aber ich zeige es einmal so :)
    const navigate = useNavigate();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setCharacter({...character, [name]: value}); //spread Operator, damit wir einzelne Felder in unserem Objekt überschreiben können
        //bedeutet: ...character => wir nehmen den state von Character
        // , [name]: value => wir überschreiben das Feld mit dem Wert von "name" (siehe unten "name" vom input feld)
        // mit dem value des Events (event.target.value kennt ihr ja schon)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.onAddCharacter(character);
        setCharacter({
            name: "",
            status: "",
            species: "",
            image: "",
        });
        navigate("/");
    }

    return (
        <>
            <button style={{width: "100%", marginBottom: "10px"}} onClick={() => navigate("/")}>Go back</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name
                <input onChange={handleChange} type="text" id="name" name="name"/>
                </label>

                <label htmlFor="status">Status
                <input onChange={handleChange} type="text" id="status" name="status"/>
                </label>

                <label htmlFor="species">Species
                <input onChange={handleChange} type="text" id="species" name="species"/>
                </label>

                <label htmlFor="image">Image
                <input onChange={handleChange} type="text" id="image" name="image"/>
                </label>

                <button type="submit">Add Character</button>
            </form>
        </>
    );
}