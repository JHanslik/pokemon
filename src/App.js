import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const request = await fetch("https://pokeapi.co/api/v2/pokemon/1");
        const response = await request.json();
        setPokemon(response);
    };

    if (!pokemon) {
        return <div></div>;
    }
    return (
        <div>
            <img src={pokemon.sprites.front_default} />
            <h1>{pokemon.name}</h1>
            <h2>Height: {pokemon.height}</h2>
            <h2>Weight: {pokemon.weight}</h2>
            <div>
                <h2>Types:</h2>
                {pokemon.types.map((type, i) => {
                    return (
                        <ul key={i}>
                            <li>{type.type.name}</li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
