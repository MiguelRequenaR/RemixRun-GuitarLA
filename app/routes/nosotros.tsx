
// la función de meta solo funciona dentro de las carpetas routes si se importa en otra archivo o carpeta que no este 
// dentro de routes no funciona de igual manera funciona con los Links (meta y links)
export function meta () {
  return [
    {title: 'GuitarLA - Nosotros'},
  ];
}

function Nosotros() {
  return (
    <div>nosotros</div>
  )
}

export default Nosotros