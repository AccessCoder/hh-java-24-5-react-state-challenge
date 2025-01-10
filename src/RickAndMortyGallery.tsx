export type RickAndMortyChar = {
    id: number,
    name: string,
    species: string
    image:string
}

type RickAndMortyGalleryProps = {
    chars: RickAndMortyChar[]
}

export default function RickAndMortyGallery(props:RickAndMortyGalleryProps){




    return(
        <>
            {props.chars.map(
                (char:RickAndMortyChar) => (
                    <>
                        <h1>{char.name}</h1>
                        <p>{char.species}</p>
                        <img src={char.image}/>
                    </>
                )
            )}
        </>
    )
}