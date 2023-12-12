import Link from "next/link"
import style from "./Header.module.css"

function Header() {
    return (
        <div className={style.header}>
            <div className={style.img1}>
                <img src="/pokepedia.png" alt="Pokepédia" />
            </div>
            <ul className={style.nav}>
                <li>
                    <Link href="/">Página Inicial</Link>
                </li>
                <li>
                    <Link href="/">Cartas</Link>
                </li>
                <li>
                    <Link href="/">Pokedex</Link>
                </li>
                <li>
                    <Link href="/">Batalha</Link>
                </li>
            </ul>
            <div className={style.img2}>
                <img src="/bola.png" alt="Bola" />
            </div>

        </div>
    )
}

export default Header