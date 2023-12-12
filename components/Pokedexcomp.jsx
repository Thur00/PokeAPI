import style from '@/components/Pokedex.module.css'
const Pokemon = ({ pokemon }) => {
    // const validaTipo = () => {
    //  (pokemon.types.lenght = 1) 
    // return <p>pokemon.types[0].type.name </p>
    // } else {
    //     return <p>pokemon.types[0].type.name</p> && <p> pokemon.types[1].type.name</p>
    // }

    
   
    return (
        <div className={style.nome}>
            <h1>{pokemon.name}</h1>
            <div className={style.img}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            </div>


            <div className={style.infos}>

                <div className={style.classe1}>
                    <h3>Type: </h3>
                    <p>{pokemon.types[0].type.name}</p>


        
                    <h3>HP: </h3>
                    <p>{pokemon.stats[0].base_stat}</p>

                    <h3>Attack: </h3>
                    <p>{pokemon.stats[1].base_stat}</p>

                    <h3>Speed: </h3>
                    <p> {pokemon.stats[5].base_stat}</p>
                 

                    <h3>Height: </h3>
                    <p>{pokemon.height}</p>
   </div>
                    <div className={style.classe2}>
                    <h3>Defense:</h3>
                    <p>{pokemon.stats[2].base_stat}</p>

                    <h3>Special-Attack: </h3>
                    <p>{pokemon.stats[3].base_stat}</p>

                    <h3>Special-Defense: </h3>
                    <p> {pokemon.stats[4].base_stat}</p>

                    <h3>Weight: </h3>
                    <p>{pokemon.weight}</p>
                </div>
            
        </div>
        </div>

    )
}
export default Pokemon