"use client"
import React, { useState } from "react"
import Pokedexcomp from "@/components/Pokedexcomp"
import style from "@/app/pokedex/page.module.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


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
            <Header></Header>
            <div className={"tudo2"}>

                <h1 className={style.tit}>Pokédex</h1>
                <input className={style.input}
                    type="text"
                    value={pokemonNome}
                    onChange={(event) => setPokemonNome(event.target.value)} />

                <button onClick={getPokemon}>Pesquisar Pokemon</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {pokemon && <Pokedexcomp pokemon={pokemon} />}
            </div>

            <Footer></Footer>
        </>
    )
}
export default Pokedex