"use client"

import Carta from "@/components/Carta"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState } from "react"

function CartaPoke() {
    const [pokemonID, setPokemonID] = useState(1)
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

    return (
        <div>
            <Header></Header>
            <h1 className="titutis"> Pokecards </h1>
            <input
                type="text"
                value={pokemonID}
                onChange={event => setPokemonID(event.target.value)}
            />
            <button onClick={getPokemon}>Procurar pokemon</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {pokemon && <Carta pokemon={pokemon} />}
            <Footer></Footer>
        </div>
    )
}

export default CartaPoke