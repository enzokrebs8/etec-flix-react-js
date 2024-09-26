import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>ETEC Flix</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Pesquisar</Link>
                <Link to="/favorites">Favoritos</Link>
                <Link to="/cadastre">Cadastre um vídeo</Link>
            </nav>
        </header>
    );
}

export default Header;