import { Navigate, Outlet } from "react-router-dom"

export default function ProtegerRuta() {

  let isLogged = localStorage.getItem("cuenta") // isLogged mira si en el localStorage hay datos en "cuenta" que se definió en la page de "Login"

  if (!isLogged) { // si no hay datos me lleva a la pagina inicial
    return <Navigate to="/" />
  }

  return (
    <Outlet /> // si hay datos, se da el permiso a los children, es decir a las otras ruta que envuelve este componente.
  )
}