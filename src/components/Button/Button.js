import styles from './../../assets/css/Button.module.css';
import './../../assets/css/Button.css';
const Button = ()=>{  //jsx
    return(
        <button className={styles.buttonGreen + " btnGreen btn btn-primary "}>Green</button>
    );
}
export default Button;