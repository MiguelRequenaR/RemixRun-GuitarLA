import imagen from '../../public/img/nosotros.jpg'
import { MetaFunction } from "@remix-run/node";
import styles from '~/styles/nosotros.css'

// la función de meta solo funciona dentro de las carpetas routes si se importa en otra archivo o carpeta que no este 
// dentro de routes no funciona de igual manera funciona con los Links (meta y links)
export const meta: MetaFunction = () => {
  return [
    {title: 'GuitarLA - Nosotros'},
    {description: 'Acerca de nosotros'}
  ];
}

//proload para cargar imagenes muy pesadas
export function links (){
  return [
    {rel: 'stylesheet', href: styles},
    {rel: 'preload', href: imagen, as: 'image'}
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">
            Nosostros
        </h2>
        <div className="contenido">
            <img src={imagen} alt="sobre nosotros" />
            <div>
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia enim eveniet iure eius laborum, consequuntur libero accusantium officiis, eos voluptas cum velit? Laudantium fuga qui delectus ut alias quos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere architecto delectus, consectetur, ut rerum omnis eos deserunt natus vero modi eius est reiciendis officia quidem autem dolores ea saepe aliquid.
               </p>
               <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia enim eveniet iure eius laborum, consequuntur libero accusantium officiis, eos voluptas cum velit? Laudantium fuga qui delectus ut alias quos! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere architecto delectus, consectetur, ut rerum omnis eos deserunt natus vero modi eius est reiciendis officia quidem autem dolores ea saepe aliquid.
               </p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros