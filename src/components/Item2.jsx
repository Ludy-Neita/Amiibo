import { useNavigate } from "react-router-dom"

import { Card, Dimmer, Image, Loader, Icon, Button, ButtonContent } from "semantic-ui-react";

import "../Stlye/Item2.css";

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

        <Button
          className="button-detalles"
          animated
          fluid
          target="_blank"
          color="black"
          onClick={() => navigate(`/detalles/${listAmiiboAPI.type}`)}

        >
          <Button.Content visible>
            Más Detalles
          </Button.Content>

          <Button.Content hidden>
            <Icon name="angle double right" />
          </Button.Content>

        </Button>


      </div>








    </div>




  )
}

