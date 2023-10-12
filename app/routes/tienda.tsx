
//loader se usa cuando el componente carga y action es cuando se envian datos de un formulario
//una manera de consumir una api
//la otra es creado variables de entorno
//la forma para renderizar una variable de entorno
//(`${process.env.API_URL}/users`)
//es bueno tener variables de entorno para ocultar dicha información de la api
export async function loader() {
  const respuesta = await fetch(`${process.env.API_URL}/users`)
  const resultado = await respuesta.json()
}

function Tienda() {
  return (
    <div>tienda</div>
  )
}

export default Tienda