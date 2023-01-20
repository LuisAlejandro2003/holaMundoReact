import { Link } from "react-router-dom";
import styles from "../../assets/styles/FormLogin.module.css"
import Logo from "../../assets/react.svg"
import Boton from "../../elements/Boton";
import { useNavigate } from "react-router-dom";
const FormRegisterUser = () => {
    const navigate = useNavigate();

    const clickHandler = (e) =>{
        e.preventDefault();
        navigate("/Home");
    }
    return ( 
        <form action="" className={styles.formulario}>
        <img src={Logo} alt="Logotipo de la empresa"></img>
        <label htmlFor='Tittle' className={styles.label} >Crear cuenta</label>
        <div>
        <label htmlFor='Nombre' className={styles.label} >Nombre</label>
        <input  type="text" className={styles.input}></input>
        </div>
        
        <div>
        <label htmlFor='Usuario' className={styles.label} >Usuario</label>
        <input  type="text" className={styles.input}></input>
        </div>

        <div>
            <label htmlFor='password' className={styles.label} >Contraseña</label>
            <input type='password'  className={styles.input}></input>
        </div>

        <div> 
            <Boton negro largo type='button' onClick={clickHandler} className={styles.boton}>Crear cuenta</Boton>
        </div>
        <Link to="/Home">Crear cuenta</Link>
        </form>
     );
}
 
export default FormRegisterUser;