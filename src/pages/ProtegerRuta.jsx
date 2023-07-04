import { Navigate } from "react-router-dom"


export default function ProtegerRuta({isLogged}) {


  if (!isLogged){

    return <Navigate to="/"/>
  }

  return <Navigate to="/inicio"/>;
}
