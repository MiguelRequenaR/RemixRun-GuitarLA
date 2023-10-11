import Navegacion from "./navegacion"


//{new Date().getFullYear()} para que se actualice el año automaticamente
function Footer() {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navegacion />
            <p className="copyright">
                Todos los derechos reservados &copy; {new Date().getFullYear()} 
            </p>
        </div>
    </footer>
  )
}

export default Footer