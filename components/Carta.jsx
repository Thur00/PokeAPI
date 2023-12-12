import { useEffect } from "react";

const Pokemon = ({ pokemon }) => {

    function ataque1Mais(string) {
        return string.charAt(0).toUpperCase() + string.substring(1);
    }
    const letra1Mais = ataque1Mais(pokemon.moves[2].move.name);

    function ataque2Mais(string) {
        return string.charAt(0).toUpperCase() + string.substring(1);
    }
    const letra2Mais = ataque2Mais(pokemon.moves[4].move.name);

    function letraMais(string) {
        return string.charAt(0).toUpperCase() + string.substring(1);
    }
    const nomeMais = letraMais(pokemon.name);

    const tipoPokemon = pokemon.types[0].type.name
    let background = ""
    let srcEnergia = ""

    switch (tipoPokemon) {
        case 'bug':
        case 'grass':
            background = "bgGrass"
            srcEnergia = "/elementos/grass.png"
            break
        case 'ice':
        case 'water':
            background = "bgWater"
            srcEnergia = "/elementos/water.png"
            break
        case 'flying':
        case 'normal':
            background = "bgNormal"
            srcEnergia = "/elementos/normal.png"
            break
        case 'fire':
            background = "bgFire"
            srcEnergia = "/elementos/fire.png"
            break
        case 'electric':
            background = "bgEletrico"
            srcEnergia = "/elementos/eletrico.png"
            break
        case 'poison':
        case 'ghost':
        case 'psychic':
            background = "bgPsiquico"
            srcEnergia = "/elementos/psiquico.png"
            break
        case 'shadow':
        case 'dark':
            background = "bgDark"
            srcEnergia = "/elementos/dark.png"
            break
        case 'dragon':
            background = "bgDragon"
            srcEnergia = "/elementos/dragon.png"
            break
        case 'fairy':
            background = "bgFada"
            srcEnergia = "/elementos/fada.png"
            break
        case 'rock':
        case 'ground':
        case 'fighting':
            background = "bgLutador"
            srcEnergia = "/elementos/lutador.png"
            break
        case 'steel':
            background = "bgMetal"
            srcEnergia = "/elementos/metal.png"
            break
    }

    return (
        <div className={`${background} ${"carta"}`}>
            <div className="nomepoke">
                <h2>{nomeMais}</h2>
                <div className="energiapoke">
                    <h3><span className="hp">HP: </span>{pokemon.stats[0].base_stat}</h3>
                    <img src={srcEnergia} alt={tipoPokemon} className="fotoElemento" />
                </div>
            </div>
            <div className="bgPokemon">
                <div className="fotoPoke">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            </div>
            <div className="descriçao">
                <h2>{letra1Mais}</h2>
                <br />
                <h3>{letra2Mais}</h3>
            </div>
        </div>
    )
}

export default Pokemon