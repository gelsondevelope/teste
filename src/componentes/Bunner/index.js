import Props from "../Props";
import styles from "./Bunner.module.css"
function Bunner(st){
    return(
        <div className={styles.bunner}
          style={{backgroundImage:"url('/girl.png')"} }
        >
          <Props titulo={st.novo}/>
          
        </div>
    )
}
export default Bunner;