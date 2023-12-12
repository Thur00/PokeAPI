import Link from "next/link"
import style from "./Footer.module.css"

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.text1}>
                <p>Grupo 1 - Desenvolvimento de sistemas</p>
                <p>SESI Senai 2023</p>
                <p>Professores Tupinambá e Leandro</p>
            </div>
            <button className={style.btn}>
                <Link href="/">Sobre Nós </Link>
            </button>
        </div>
    )
}

export default Footer
