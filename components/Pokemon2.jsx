import styles from "./pokemons.module.css"

const Pokemon = ({ pokemon }) => {
    return (
        <div className={styles.pokemon2}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    )
}

export default Pokemon