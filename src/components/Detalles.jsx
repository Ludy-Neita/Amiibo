import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

import "../styleSheets/Detalles.css"

export default function Detalles() {
/*
  const navigate = useNavigate()

  const cerrarSesion = () => {

    localStorage.removeItem('cuenta');
    navigate('/');
  };

  */

  const [amiibo2API, setAmiibo2API] = useState([]);



  const consulta2API = async () => {
    const url = "https://amiiboapi.com/api/amiibo/"
    const respuesta2API = await fetch(url);
    const informacion2APIJson = await respuesta2API.json();

    setAmiibo2API(informacion2APIJson.amiibo);

    console.log(amiibo2API)
    
        }
    
  const [amiiboDetallado, setAmiiboDetallado] = useState({})
  let { tail } = useParams() // esto viene de item2

  useEffect(() => {

    consulta2API();

  
    let temporal = amiiboAPI?.filter(unAmiibo => unAmiibo.tail === tail)
    console.log(unAmiibo.tail)
    console.log(temporal)

    setAmiiboDetallado(temporal)
    console.log(amiiboDetallado)
    

  }, [])


  return (
  <>Hola Mundo</>

/*
    <div>

      <h1 className="character-amiibos">{unAmiibo.character}</h1>

      <div className="un-amiibos">

        <div className="contendor-img-nombre-serie">
          
          <div className="contendor-img-un-amiibo">
            <img
              className="img-un-amiibo"
              src={unAmiibo.image}
              alt="Imagen del amiibo"
            />
          </div>

          <div className="nombre-serie">

            <div className="nombre-un-amiibo">
              <p className="subtitulo"> Nombre: </p>
              <p className="subtitulo-informacion">{unAmiibo.name} </p>
            </div>

            <div className="serie-un-amiibo">
              <p className="subtitulo"> Serie: </p>
              <p className="subtitulo-informacion">{unAmiibo.amiiboSeries} </p>
            </div>

          </div>

        </div>

        <div className="contendor-informacion-un-amiibo">

          <div className="juego-un-amiibo">
            <p className="subtitulo"> Juego: </p>
            <p className="subtitulo-informacion">{unAmiibo.gameSeries} </p>
          </div>

          <div className="tipo-un-amiibo">
            <p className="subtitulo"> Tipo: </p>
            <p className="subtitulo-informacion">{unAmiibo.type} </p>
          </div>

          <div className="disponible-un-amiibo">
            <p className="subtitulo"> Disponible: </p>
            <p className="subtitulo-informacion">{unAmiibo.release.eu} </p>
          </div>

        </div>

      </div>

      <button className="button-cerrar-sesion" onClick={cerrarSesion}>
        Cerrar Sesión
      </button>
    </div>
    */
  )
}
