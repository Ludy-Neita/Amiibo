import { useNavigate } from "react-router-dom"
import "../styleSheets/Item2.css";

export default function Item2({ listAmiiboAPI }) { // props. del componente "Listado2"
  
  const navigate = useNavigate();

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
          onClick={() => navigate(`/detalles/${listAmiiboAPI.tail}`)}
        >
          Más Detalles
        </button>
      </div>

    </div>
  )
}

