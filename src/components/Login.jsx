import '../styleSheets/Login.css';

import ImgTitulo from "../img/Titulo.png"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  //localStorage.removeItem("cuenta")

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState("");

  const ingresoUsuario = (value) => {
    setUsuario(value);
  }
  //console.log(usuario);

  const [contraseña, setContraseña] = useState("");
  const [contraseñaError, setContraseñaError] = useState(false);

  const ingresoContraseña = (value) => {
    if (value.length < 6) {
      setContraseñaError(true);
    } else {
      setContraseñaError(false);
      setContraseña(value);
    }

  }

  const [isLogin, setIsLogin] = useState(false);
  const [hasError, sethasError] = useState(false);

  const ifMatch = (param) => {

    if (param.usuario.length > 0 && param.contraseña.length > 0) {

      if (param.usuario === "Ludy" && param.contraseña === "123456") {

        const { usuario, contraseña } = param

        let ac = { usuario, contraseña };
        let account = JSON.stringify(ac);

        localStorage.setItem("cuenta", account);
        
        setIsLogin(true);
        sethasError(false);

        navigate("/inicio")

      } else {
        setIsLogin(false);
        sethasError(true);
      }
    } else {
      setIsLogin(false);
      sethasError(true);
    }
  }

  const verificar = () => {
    let account = { usuario, contraseña }

    if (account) {
      ifMatch(account);
    }
  }

  return (

    <div className="fondo">

      <div className="img-title">

        <img
          src={ImgTitulo}
          className="logo"
          alt="logo inicial" />

      </div>

      <div className="contenedor-inicial">

        <h1 className='bienvenido'>¡WELCOME!</h1>

        <label className="label-normal">User:</label>

        <input
          className="input-normal"
          type="text"
          placeholder='Write your username'
          onChange={(e) => ingresoUsuario(e.target.value)}>
        </input>


        <label className="label-normal">Password:</label>

        <input
          className={contraseñaError ? "input-error" : "input-normal"}
          type="password"
          placeholder='Type your password'
          onChange={(e) => ingresoContraseña(e.target.value)}

        >
        </input>

        {contraseñaError &&
          <label className="label-error">
            Password must be more than 6 characters
          </label>
        }

        <button className="boton-ingresar" onClick={verificar}> Enter
        </button>


        {hasError &&
          <label className="error-general">
            ¡The username or password is invalid!!
          </label>
        }
      </div>
    </div>
  )
}