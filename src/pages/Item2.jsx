import { useNavigate } from "react-router-dom"

import "../styleSheets/Item2.css";

export default function Item2({ listAmiiboAPI, loading }) {
  //export default function Item2 ({ listAmiiboAPI, cantidadAmiibo, setCantidadAmiibo }) {
  const navigate = useNavigate();


  // const { loading, resultadoAmiibo } = listAmiiboAPI;// se desestructura el props

  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader inverted> Cargando más Amiibos...no se vaya!...</Loader>
      </Dimmer>
    );
  }

  /*
      const { resultadoAmiibo } = resultadoAmiibo.data;
  
      const cargarMoreAmiibos = () => {
  
          const numberAmiibos = cantidadAmiibo;
          setCantidadAmiibo(numberAmiibos + 5);
  
      };
  
  */
  return (

    <div className="lista-amiibos">

      <h1 className="nombre-amiibo">{listAmiiboAPI.name} </h1>

      <img
        className="img-amiibo"
        src={listAmiiboAPI.image}
        alt="Imagen del amiibo"
      />

      <div className="nombre-tipo"> Tipo: {listAmiiboAPI.type}</div>

      <div className="detalles">

        <button
          className="button-detalles"
          target="_blank"
          color="black"
          onClick={() => navigate(`/detalles/${listAmiiboAPI.type}`)}
        >
            Más Detalles
        </button>

      </div>

    </div>

  )
}

