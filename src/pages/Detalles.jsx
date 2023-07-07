import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseCircle } from '@react-icons/all-files/ai/AiOutlineCloseCircle'
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack'
import "../styleSheets/Detalles.css"

export default function Detalles() {

  // --------- BOTÓN CERRAR SESIÓN --------- //

  const navigate = useNavigate()

  const cerrarSesion = () => {

    localStorage.removeItem('cuenta');
    navigate('/');
  };

  // --------- OBTENER INFORMACIÓN DE LA API NUEVAMENTE  --------- //

  const [amiibo2API, setAmiibo2API] = useState([]);

  useEffect(() => {

    const consulta2API = async () => {

      const url = "https://amiiboapi.com/api/amiibo/?showgames"
      const respuesta2API = await fetch(url);
      const informacion2APIJson = await respuesta2API.json();

      setAmiibo2API(informacion2APIJson.amiibo);

    }
    consulta2API();

  }, [])

  // --------- OBTENER INFORMACIÓN DE SOLO UN AMIIBO POR TAIL (ID) --------- //

  const [amiiboDetallado, setAmiiboDetallado] = useState({})

  let { tail } = useParams() // esto viene de item2

  useEffect(() => {


    let temporal = amiibo2API?.filter(unAmiibo => unAmiibo.tail === tail)
    let temporal2 = temporal[0]

    setAmiiboDetallado(temporal2)

  }, [tail, amiibo2API])

  return (

    <div>

      <div className="contendor-button-cerrar-sesion">

        <button
          className="button-back"
          onClick={() => navigate("/inicio")}>
          <IoIosArrowBack />  Regresar
        </button>

        <button className="button-cerrar-sesion" onClick={cerrarSesion}>
          <AiOutlineCloseCircle /> Cerrar Sesión
        </button>

      </div>

      <h1 className="character-amiibos">{amiiboDetallado?.character}</h1>

      <div className="un-amiibos">

        <div className="contendor-img-nombre-serie">

          <div className="contendor-img-un-amiibo">
            <img
              className="img-un-amiibo"
              src={amiiboDetallado?.image}
              alt="Imagen del amiibo"
            />
          </div>

          <div className="nombre-serie">

            <div className="nombre-un-amiibo">
              <p className="subtitulo"> Nombre: </p>
              <p className="subtitulo-informacion"> {amiiboDetallado?.name} </p>
            </div>

            <div className="serie-un-amiibo">
              <p className="subtitulo"> Serie: </p>
              <p className="subtitulo-informacion"> {amiiboDetallado?.amiiboSeries} </p>
            </div>

          </div>

        </div>

        <div className="contendor-informacion-un-amiibo">

          <div className="seriejuego-un-amiibo">
            <p className="subtitulo"> Serie de juego: </p>
            <p className="subtitulo-informacion">{amiiboDetallado?.gameSeries} </p>
          </div>

          <div className="tipo-un-amiibo">
            <p className="subtitulo"> Tipo: </p>
            <p className="subtitulo-informacion">{amiiboDetallado?.type} </p>
          </div>

          {/*
              <div className="juego-un-amiibo">
                <p className="subtitulo"> Juego: </p>
                <p className="subtitulo-informacion">{amiiboDetallado?.games3DS[0].gameName} </p>
              </div>

              <div className="disponible-un-amiibo">
                <p className="subtitulo"> Disponible: </p>
                <p className="subtitulo-informacion">{amiiboDetallado?.release.jp} </p>
              </div>
           */}

        </div>

      </div>

    </div>
  )
}
