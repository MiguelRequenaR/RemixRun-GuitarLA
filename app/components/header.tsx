//librerias
//link es para enlaces
//en este caso usamos useLocation para resaltar el link de la ruta en la que estamos
import { Link } from "@remix-run/react"
import logoHeader from '../../public/img/logo.svg'
import Navegacion from "./navegacion"

function Header() {

  return (
    <header className="header">
        <div className="contenedor barra">
            <Link 
                to={'/'} //el to es para indicar a que ruta se va a dirigir el link en este caso a la ruta raiz
            >
                <img src={logoHeader} alt="imagen-logo" className="logo"/>
            </Link>
            
            <Navegacion />
        </div>
    </header>
  )
}

export default Header