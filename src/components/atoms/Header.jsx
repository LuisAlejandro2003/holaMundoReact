import Logo from '../../assets/react.svg'
import Boton from '../../elements/Boton';
import '../../assets/styles/Header.css'
function Header(){
    return(
        <header>
            <img src={Logo} alt="logo de la empresa" />
            <h1>programacion web</h1>
            {/* <Boton>Click</Boton> */}
        </header>
    )
}
export default Header;