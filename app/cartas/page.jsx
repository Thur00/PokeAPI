"use client"

import Carta from "@/components/Carta"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState } from "react"
import Image from "next/image"

function CartaPoke() {
    const [pokemonID, setPokemonID] = useState(null)
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)

    const getPokemon = async () => {
        const nomeInput = pokemonID.toLowerCase()

        try {
            const resposta = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${nomeInput}`
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
            <h1 className="tit"> Pokecards </h1>

            <div className="pesquisa">
                <input
                    type="text"
                    value={pokemonID}
                    onChange={event => setPokemonID(event.target.value)}
                />
                <button onClick={getPokemon}><Image src="/lupa.png" alt="Pesquisar" width={24} height={24} /></button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {pokemon && <Carta pokemon={pokemon} />}
        </div>
    )
}

export default CartaPoke