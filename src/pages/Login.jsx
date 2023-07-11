import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgTitulo from "../img/Titulo.png"
import '../styleSheets/Login.css';

export default function Login() {

  const navigate = useNavigate()

  const [usuario, setUsuario] = useState("");

  const ingresoUsuario = (value) => {
    setUsuario(value);
  }

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

  const [hayError, setHayError] = useState(false);

  const ifMatch = (param) => {

    if (param.usuario.length > 0 && param.contraseña.length > 0) {

      if (param.usuario === "Ludy" && param.contraseña === "123456") {

        const { usuario, contraseña } = param

        let variableRegistro = { usuario, contraseña };
        let registro = JSON.stringify(variableRegistro);

        localStorage.setItem("cuenta", registro);

        setHayError(false);

        navigate("/inicio")

      }
      else { setHayError(true); } // del segundo if

    }
    else { setHayError(true); } // del primer if
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
          alt="logo inicial"
        />
      </div>

      <div className="contenedor-inicial">

        <h1 className='bienvenido'>¡Bienvenido!</h1>

        <label className="label-normal">Usuario:</label>

        <input
          className="input-normal"
          type="text"
          placeholder='Write your username'
          onChange={(e) => ingresoUsuario(e.target.value)}>
        </input>

        <label className="label-normal">Constraseña:</label>

        <input
          className={contraseñaError ? "input-error" : "input-normal"} // cambia el className si hay un error, esto para el CSS. que lo muestre rojo.
          type="password"
          placeholder='Type your password'
          onChange={(e) => ingresoContraseña(e.target.value)}
        >
        </input>

        {contraseñaError && // si la contraseña tiene menos de 6 caracteres hacer lo siguiente:
          <label className="label-error">
            La contraseña debe tener más de 6 caracteres
          </label>
        }

        <button
          className="boton-ingresar"
          onClick={verificar}>
          Enter
        </button>

        {hayError && // si hay error en la contraseña o en el usuario hacer lo siguiente:
          <label className="error-general">
            ¡El usuario o la contraseña son inválidos!
          </label>
        }
      </div>
    </div>
  )
}