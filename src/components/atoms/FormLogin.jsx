import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg"
import styles from "../../assets/styles/FormLogin.module.css"

import Boton from "../../elements/Boton";
const FormLogin = () => {
  return (
    
    <form action="" className={styles.formulario}>
      <img src={Logo} alt="Logotipo de la empresa"></img>
      <label htmlFor='Tittle' className={styles.label} >Iniciar sesion</label>
      <div>
      <label htmlFor='usuario' className={styles.label} >Usuario</label>
      <input  type="text" id="usuario" className={styles.input}></input>
      </div>
      <div>
          <label htmlFor='password' className={styles.label} >Contraseña</label>
          <input type='password' id="password"  className={styles.input}></input>
      </div>
      <div> 
          <Boton largo type='button' className={styles.boton}>Iniciar sesion</Boton>
      </div>
      <Link to="/Register">Registrate</Link>
    </form>
  );
};

export default FormLogin;
