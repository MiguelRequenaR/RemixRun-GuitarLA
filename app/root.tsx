import { 
    Meta, //metadatos
    Links, //links de hojas de estilos
    Outlet //renderiza el contenido de las rutas hijas
} from "@remix-run/react";
import styles from './styles/index.css';

//exportar metadatos, se puede exportar un array de objetos
export function meta() {
    return[
        {charset: 'utf-8'},
        {title: 'GuitarLA - Remix'},
        {viewport: 'width=device-width, initial-scale=1.0'},
    ];
}

//exportar links, son hojas de estilos, se puede exportar hojas de estilos para cada componente
export function links() {
    //se retorna un array de objetos
    return [
        //normalize css es un reset porque lo que debe ir antes de todo
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
        },
        //importa hojas de estilos de fuentes externas google fonts
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true",
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
            rel: 'stylesheet',
        },
        {
            rel: 'stylesheet',
            href: styles,
        },
    ];
}

//aplicación principal, aca se consume el componente Document y se muestre en pantalla
//inyectar contenido en otro componente
export default function App() {
    return (
        <Document>
            <Outlet />
        </Document>
    );
}

//children porque renderiza todo lo que se muestra en pantalla
function Document({children} : {children: React.ReactNode}) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}