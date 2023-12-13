import styles from "./pokemons.module.css"

const Pokemon = ({ pokemon }) => {
    return (
        <div className={styles.pokemon1}>
            <img src={pokemon.sprites.back_default} fill sizes="100%,100%" alt={pokemon.name} />
        </div>
    )
}

export default Pokemon