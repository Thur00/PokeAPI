"use client"

import Pokemon1 from "@/components/Pokemon1";
import Pokemon2 from "@/components/Pokemon2";
import { useState } from "react"
import styles from "./page.module.css"
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function PokeBattle() {
    const [pokemonId1, setPokemonId1] = useState(null)
    const [pokemon1, setPokemon1] = useState(null)
    const [error1, setError1] = useState(null)

    const getPokemon1 = async () => {
        const nomeInput1 = pokemonId1.toLowerCase()

        try {
            const resposta1 = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${nomeInput1}`
            );
            const data1 = await resposta1.json();
            setPokemon1(data1);
            setError1(null)
        }
        catch (error) {
            console.error("Erro ao buscar o Pokemon:", error);
            setError1("Falha ao buscar o Pokemon. Tente novamente")
        }
    }

    const [pokemonId2, setPokemonId2] = useState(null)
    const [pokemon2, setPokemon2] = useState(null)
    const [error2, setError2] = useState(null)

    const getPokemon2 = async () => {
        const nomeInput2 = pokemonId2.toLowerCase()


        try {
            const resposta2 = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${nomeInput2}`
            );
            const data2 = await resposta2.json();
            setPokemon2(data2);
            setError2(null)
        }
        catch (error) {
            console.error("Erro ao buscar o Pokemon:", error);
            setError2("Falha ao buscar o Pokemon. Tente novamente")
        }
    }

    const [error3, setError3] = useState(null)
    const [vencedor, setVencedor] = useState(null)
    const [img, setImg] = useState(null)

    const startBattle = () => {
        debugger
        if (pokemon1 === null || pokemon2 === null) {
            setError3("Você ainda não inseriu um pokemon. Insira e tente novamente")
        } else {
            let poke1 = pokemon1.name.charAt(0).toUpperCase() + pokemon1.name.substring(1);
            let poke2 = pokemon2.name.charAt(0).toUpperCase() + pokemon2.name.substring(1);
            let vida1 = pokemon1.stats[0].base_stat
            let vida2 = pokemon2.stats[0].base_stat
            let ataque1 = pokemon1.stats[1].base_stat
            let ataque2 = pokemon2.stats[1].base_stat
            let speed1 = pokemon1.stats[5].base_stat
            let speed2 = pokemon2.stats[5].base_stat

            let ataquesPoke1 = vida2 / ataque1
            if (vida2 % ataque1 != 0) {
                ataquesPoke1 += 1
            }
            let ataquesPoke2 = vida1 / ataque2
            if (vida1 % ataque2 != 0) {
                ataquesPoke2 += 1
            }

            if (ataquesPoke1 == ataquesPoke2) {
                if (speed1 > speed2) {
                    setVencedor(poke1)
                    setImg(pokemon1.sprites.front_default)
                }
                else if (speed2 > speed1) {
                    setVencedor(poke2)
                    setImg(pokemon2.sprites.front_default)
                }
                else {
                    setVencedor("Houve um empate")
                }
            }
            else if (ataquesPoke1 < ataquesPoke2) {
                setVencedor(poke1)
                setImg(pokemon1.sprites.front_default)
            } else {
                setVencedor(poke2)
                setImg(pokemon2.sprites.front_default)
            }
        }
    }

    return (
        <>
            <Header />
            <div className="batalhaTitle">
                <h1 className="tit">Batalhe</h1>
                <div className="boxPesquisa">
                    <div className="pesquisa">
                        <input
                            type="text"
                            value={pokemonId1}
                            onChange={event => setPokemonId1(event.target.value)}
                        />
                        <button onClick={getPokemon1}><Image src="/lupa.png" alt="Pesquisar" width={24} height={24} /></button>
                    </div>
                    {error1 && <p style={{ color: "red" }}>{error1}</p>}

                    <div className="pesquisa">
                        <input
                            type="text"
                            value={pokemonId2}
                            onChange={event => setPokemonId2(event.target.value)}
                        />
                        <button onClick={getPokemon2}><Image src="/lupa.png" alt="Pesquisar" width={24} height={24} /></button>
                    </div>
                    {error2 && <p style={{ color: "red" }}>{error2}</p>}
                </div>





                <div className={styles.campoBatalha}>
                    {pokemon1 && <Pokemon1 pokemon={pokemon1} />}
                    <Image className={styles.versus} src="/versus.png" alt="Versus" width={200} height={125} />
                    {pokemon2 && <Pokemon2 pokemon={pokemon2} />}

                    <div className="boxVencedor">
                        <h2>Vencedor</h2>

                        <h4>{vencedor}</h4>
                        <br /><br />
                        <img src={img} fill sizes="100%,100%" alt={vencedor} />
                    </div>

                    <div className="boxBtn">
                        <button className="startBtn" onClick={() => startBattle()}>Batalhar!</button>
                        {error3 && <p style={{ color: "red" }}>{error3}</p>}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default PokeBattle