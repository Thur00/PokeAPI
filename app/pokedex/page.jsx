"use client"
import React, { useState } from "react"
import Pokedexcomp from "@/components/Pokedexcomp"
import style from "@/app/pokedex/page.module.css"
import Image from "next/image"


const Pokedex = () => {
    const [pokemonNome, setPokemonNome] = useState(null);
    const [pokemon, setPokemon] = useState(null)
    const [error, setError] = useState(null)



    const getPokemon = async () => {
        const nomeInput = pokemonNome.toLowerCase()

        try {
            const resposta = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${nomeInput}`
            )
            const data = await resposta.json()
            setPokemon(data);
            setError(null)
        } catch (error) {
            console.error("Erro na busca Pokemon", error)
            setError("Falha na busca Pokemon. Tente novamente.")
        }
    }



    return (
        <>
            <div className={style.tudo}>

                <h1 className="tit">Pokédex</h1>

                <div className="pesquisa">
                    <input
                        type="text"
                        value={pokemonNome}
                        onChange={event => setPokemonNome(event.target.value)}
                    />
                    <button onClick={getPokemon}><Image src="/lupa.png" alt="Pesquisar" width={24} height={24} /></button>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}

                {pokemon && <Pokedexcomp pokemon={pokemon} />}
            </div>
        </>
    )
}
export default Pokedex