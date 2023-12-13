'use client'

import Integrante from '@/components/Integrantes'
import styles from '@/components/integrante.module.css'

const ImageUrls = [
    { img: "/integrantes/Sofia.jpg", nome: "Sofia Caun", idade: "17", funcao: "Vice-Líder / Programadora" },
    { img: "/integrantes/AnaBeatriz.jpg", nome: "Ana Beatriz", idade: "17", funcao: "Programadora" },
    { img: "/integrantes/Isabeli.jpg", nome: "Isabeli D'grande", idade: "16", funcao: "Roteirista" },
    { img: "/integrantes/Arthur.jpg", nome: "Arthur Santos", idade: "17", funcao: "Líder / Programador" },
    { img: "/integrantes/Gustavo.jpg", nome: "Gustavo Silva", idade: "16", funcao: "Programador" },
    { img: "/integrantes/Yran.jpg", nome: "Yran Spresson", idade: "16", funcao: "Programador" }
]

function SobreNos() {

    return (
        <>
            <main>
                <div className="tit">
                    <h1>Sobre nós</h1>
                </div>

                <div className={styles.container}>
                    <Integrante ImageUrls={ImageUrls} />
                </div>
            </main>
        </>
    )
}

export default SobreNos