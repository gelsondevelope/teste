import { useState } from "react";
import styles from "./Counter.module.css"




function Counter(){
    let [count, setCount]=useState(0);
function increment(){
setCount(count+1);
}
    return(
        <>
  <button  type="button" onClick={increment} className={styles.counter}>{count}</button>
       </>
    )
}
export default Counter;