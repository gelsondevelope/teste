
import styles from "./Card.module.css"
function Card(){
    return(
        <section className={styles.card} >
            <a href="https://facebook.com/">
                <img src="/buuner.png" alt="Ngola" />
            </a>
        </section>
    )
}
export default Card;