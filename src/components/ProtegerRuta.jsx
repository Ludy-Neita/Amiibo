import { Navigate, Outlet } from "react-router-dom"

export default function ProtegerRuta() {

  // isLogged mira si en el localStorage hay datos en "cuenta"
  let isLogged = localStorage.getItem("cuenta")

  // si no hay datos me lleve a la pagina inicial
  if (!isLogged) {
    return <Navigate to="/" />
  }
  // si hay, datos se da el permiso a los children, es decir a las otras rutas.
  return (
    <Outlet />
  )

}