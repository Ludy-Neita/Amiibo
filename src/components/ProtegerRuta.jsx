import { Navigate, Outlet } from "react-router-dom"

export default function ProtegerRuta() { 

  let isLogged = localStorage.getItem("cuenta")

  if (!isLogged) {
    console.log(isLogged)
    return <Navigate to="/" />
  }

  return (
    <Outlet /> // permiso a los children. 
  )

}