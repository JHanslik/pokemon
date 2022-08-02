import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [pokemon, setPokemon] = useState(null);
    const [randomPokemon, setRandomPokemon] = useState(
        "https://pokeapi.co/api/v2/pokemon/1"
    );

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [randomPokemon]);

    const fetchData = async () => {
        const request = await fetch(randomPokemon);
        const response = await request.json();
        setPokemon(response);
    };

    const randomPokemonFunction = () => {
        const randomNumber = Math.floor(Math.random() * 905 + 1);
        setRandomPokemon(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    };

    if (pokemon === null) {
        return <div></div>;
    }
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="card m-4 p-5 h-75 border border-white bg-transparent text-white">
                <img
                    src={pokemon.sprites.other.home.front_default}
                    alt={`${pokemon.name}`}
                    className="card-img-top"
                />
                <h1>{pokemon.name}</h1>
                <h2 className="fs-4">
                    Height: <span className="fw-light">{pokemon.height}</span>
                </h2>
                <h2 className="fs-4">
                    Weight: <span className="fw-light">{pokemon.weight}</span>
                </h2>
                <div>
                    <h2 className="fs-4">Types:</h2>
                    <ul>
                        {pokemon.types.map((type, i) => {
                            return (
                                <li className="fs-5 fw-light">
                                    {type.type.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <button
                type="button"
                className="btn mt-3"
                onClick={randomPokemonFunction}
            >
                Show random pokemon
            </button>
        </div>
    );
}

export default App;
