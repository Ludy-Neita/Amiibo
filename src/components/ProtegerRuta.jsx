import { Navigate, Outlet } from "react-router-dom"


export default function ProtegerRuta({registrado}) { // "registrado" viene de APP.jsx

// si no esta registado, es decir que en el LocalStorage NO hay dato, se va a "/", si no que lo deje ingresar.
  if (!registrado){

    return <Navigate to="/"/>
  }

  return <Outlet />
  //<Navigate to="/inicio"/>;
}
