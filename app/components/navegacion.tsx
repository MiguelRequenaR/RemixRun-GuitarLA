//librerias
//link es para enlaces
//en este caso usamos useLocation para resaltar el link de la ruta en la que estamos
import { Link , useLocation } from "@remix-run/react"

function navegacion() {

    const location = useLocation()

  return (
    <nav className="navegacion">
       <Link
            to={'/'} //el to es para indicar a que ruta se va a dirigir el link en este caso a la ruta raiz
            className={location.pathname === '/' ? 'active' : ''} //para resaltar el link de la ruta en la que estamos
        >
            Inicio   
        </Link>
        <Link
            to={'/nosotros'} //el to es para indicar a que ruta se va a dirigir el link en este caso a la ruta raiz
            className={location.pathname === '/nosotros' ? 'active' : ''} //para resaltar el link de la ruta en la que estamos
        >
            Nosotros 
        </Link>
        <Link
            to={'/tienda'} //el to es para indicar a que ruta se va a dirigir el link en este caso a la ruta raiz
            className={location.pathname === '/tienda' ? 'active' : ''} //para resaltar el link de la ruta en la que estamos
        >
            Tienda
        </Link>
        <Link
            to={'/blog'} //el to es para indicar a que ruta se va a dirigir el link en este caso a la ruta raiz
            className={location.pathname === '/blog' ? 'active' : ''} //para resaltar el link de la ruta en la que estamos
        >
            Blog
        </Link>
    </nav>
  )
}

export default navegacion