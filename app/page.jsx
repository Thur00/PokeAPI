import Image from "next/image"

function PgInicial() {
  return (
    <>

      <div className="flex" >
        <div className="image">
          <Image src="/pokeapi.png" fill sizes="100%, 100%" />
        </div>
        <a href="#anchor"><button className="butsm" >  Saiba Mais </button></a>
      </div>

      <div className="cenario">
        <video autoPlay loop muted>
          <source src="/videopaisagem.mp4" type="video/mp4"></source>
        </video>
        <div className="api" id="anchor">
          <h1 className="apititle" > O que é uma API? </h1>
          <h2> Uma API, ou Interface de Programação de Aplicações, é um conjunto de definições e protocolos que permite a comunicação entre
            diferentes softwares. Ela permite que aplicativos, plataformas e sistemas se comuniquem e interajam entre si, compartilhando dados
            e recursos de forma segura e eficiente. </h2>
        </div>
      </div>

      <div className="gradiente">

        <div className="api2">
          <Image src="/pokeapi.png" width={300} height={150} />
          <h1 className="pokeapititle"> Saiba tudo sobre o PokeAPI! </h1>
          <h2> A pokeAPI é uma API RESTful completa vinculada a um extenso banco de dados que detalha tudo sobre a série principal de jogos Pokémon.
            Ela cobre tudo, desde habilidades, tipos, movimentos, etc. Você pode acessar a PokeAPI no GitHub e encontrar várias informações sobre
            como usá-la. Ela é uma fonte de dados online que contém informações sobre todos os Pokémon conhecidos. É como uma enorme enciclopédia
            Pokémon online.</h2>
        </div>

      </div>
      <div className="flexbox">

        <div className="quadrados">
          <h1 className="title" > Funções </h1>
          <p> Oferece uma variedade de funções, incluindo acesso a dados sobre Pokémon, tipos, movimentos, habilidades e muito mais. Ela é uma
            fonte de dados online que contém informações detalhadas sobre todos os Pokémon conhecidos. Se você tiver interesse em usá-la,
            acesse o link abaixo para obter mais informações detalhadas sobre as funções específicas que ela oferece. </p>
          <a href="https://pokeapi.co/"> <button className="butlink"> Acesse a documentação oficial da API </button></a>
        </div>

        <div className="quadrados">
          <h1 className="title"> História </h1>
          <p> O PokéAPI V1 foi criado por Paul Hallett como um projeto de fim de semana, mas rapidamente se tornou mais do que um trabalho de
            fim de semana. O PokéAPI conquistou muitos novos consumidores devido ao seu novo desempenho extremamente rápido. Zane Adickes achou
            o projeto original uma ideia fantástica e queria ajudá-lo a crescer. Com orientação de Paul, Zane criou a API V2 usando um espelho
            exato dos dados da Veekun relacionados à série principal de jogos. </p>
        </div>

      </div>
    </>
  )
}

export default PgInicial;