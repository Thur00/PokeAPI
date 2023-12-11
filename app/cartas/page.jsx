"use client"

import Pokemon from "@/components/Pokemon"
import { useState } from "react"

function CartaPoke() {
    const [pokemonID, setPokemonID] = useState([])
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)

    const getPokemon = async () => {
        try {
            const resposta = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
            );
            const data = await resposta.json();
            setPokemon(data);
            setError(null)
            let pokemonId = data.id
        }
        catch (error) {
            console.error("Erro ao buscar o Pokemon:", error);
            setError("Falha ao buscar o Pokemon. Tente novamente")
        }
    }

    const proxPokemon = async () => {

        try {
            const resposta = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
            );  
            const data = await resposta.json();
            setPokemon(data);
            setError(null)
        }
        catch (error) {
            console.error("Erro ao buscar o Pokemon:", error);
            setError("Falha ao buscar o Pokemon. Tente novamente")
        }
    }

    const antePokemon = async () => {
        pokemonId = pokemon.id -= 1

        try {
            const resposta = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
            );
            const data = await resposta.json();
            setPokemon(data);
            setError(null)
        }
        catch (error) {
            console.error("Erro ao buscar o Pokemon:", error);
            setError("Falha ao buscar o Pokemon. Tente novamente")
        }
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <input
                type="text"
                value={pokemonID}
                onChange={event => setPokemonID(event.target.value)}
            />
            <button onClick={getPokemon}>Procurar pokemon</button>
            <button onClick={proxPokemon()}>+ pokemon</button>
            <button onClick={antePokemon()}>- pokemon</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {pokemon && <Pokemon pokemon={pokemon} />}
        </div>
    )
}

export default CartaPoke