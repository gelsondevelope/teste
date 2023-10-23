import Counter from "../Counter";
import styles from "./Header.module.css";
function Header(){
    return(
        <header className={styles.header}>
<a href="#"><span>Ango-World</span></a>
<nav>
    <a href="#" id="2">Home</a>
    <a href="#">Notificações<Counter/></a>
    <a href="#">Cadastrar</a>
    <a href="#">Login</a>
</nav>

        </header>

)

}
export default Header;