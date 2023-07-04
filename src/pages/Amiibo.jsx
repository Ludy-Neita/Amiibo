
import "../styleSheets/Detalles.css"

export default function Amiibo({ listAmiiboAPI }) {

  return (

    <div>

      <h1 className="character-amiibos">{listAmiiboAPI.character}</h1>

      <div className="un-amiibos">

        <div className="contendor-img-nombre-serie">
          
          <div className="contendor-img-un-amiibo">
            <img
              className="img-un-amiibo"
              src={listAmiiboAPI.image}
              alt="Imagen del amiibo"
            />
          </div>

          <div className="nombre-serie">

            <div className="nombre-un-amiibo">
              <p className="subtitulo"> Nombre: </p>
              <p className="subtitulo-informacion">{listAmiiboAPI.name} </p>
            </div>

            <div className="serie-un-amiibo">
              <p className="subtitulo"> Serie: </p>
              <p className="subtitulo-informacion">{listAmiiboAPI.amiiboSeries} </p>
            </div>

          </div>


        </div>

        <div className="contendor-informacion-un-amiibo">



          <div className="juego-un-amiibo">
            <p className="subtitulo"> Juego: </p>
            <p className="subtitulo-informacion">{listAmiiboAPI.gameSeries} </p>
          </div>

          <div className="tipo-un-amiibo">
            <p className="subtitulo"> Tipo: </p>
            <p className="subtitulo-informacion">{listAmiiboAPI.type} </p>
          </div>

          <div className="disponible-un-amiibo">
            <p className="subtitulo"> Disponible: </p>
            <p className="subtitulo-informacion">{listAmiiboAPI.release.eu} </p>
          </div>



        </div>

      </div>

      <button className="button-cerrar-sesion">
        Cerrar Sesión
      </button>
    </div>
  )


};


