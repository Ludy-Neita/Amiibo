import "../styleSheets/Listado2.css"
import Item2 from './Item2';
import { useEffect, useState } from 'react';
import { AiOutlinePlusSquare } from '@react-icons/all-files/ai/AiOutlinePlusSquare' //esto  es el icono de +.
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Listado2({ resultadoFiltroBusquedaAmiibo, filtro, cargar }) { // props. de la page "Inicio"

    // ------- CANTIDAD DE AMIIBOS A MOSTRAR  --------- //

    const [pagina, setPagina] = useState(1)
    const [amiibosCantidadMostrar, setAmiibosCantidadMostrar] = useState([])

    useEffect(() => {

        setAmiibosCantidadMostrar(resultadoFiltroBusquedaAmiibo.slice(0, 4 * pagina)) // slice: cortar el arreglo. Mostrar datos del 0 al 4. 

    }, [pagina, resultadoFiltroBusquedaAmiibo])
    // cada que cambie la pagina o el resultadoFiltroBusquedaAmiibo se vuelva a ejecutar el useEffect.

    useEffect(() => {
        setPagina(1)
    }, [filtro])

    // --------- LOADING --------- //
    // el CSS está en Detalles.css

    if (cargar || !resultadoFiltroBusquedaAmiibo) {
        return (
            <div className="contenedor-spinner">
                <Spinner className="cargando" color="info" />
                <p className="nombre-spinner">Cargando amiibos...</p>
            </div>
        );
    }

    return (

        <div className="amiibos-page">

            <div className='contenedor-item' >
                {amiibosCantidadMostrar.map((amiiboAPI, index) =>
                    <Item2
                        key={index}
                        listAmiiboAPI={amiiboAPI}
                    />
                )}
            </div>

            <div className="contendor-button-mas-amiibos">
                <button
                    className="button-mas-amiibos"
                    onClick={() =>
                        setPagina((pagina) => pagina + 1)}
                >
                    <AiOutlinePlusSquare /> Cargar más
                </button>
            </div>

        </div>
    )
}

