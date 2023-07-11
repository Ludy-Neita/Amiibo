import "../styleSheets/Listado2.css"
import { useEffect, useState } from 'react';
import { AiOutlinePlusSquare } from '@react-icons/all-files/ai/AiOutlinePlusSquare' //esto  es el icono de +.
import Item2 from './Item2';

export default function Listado2({ resultadoFiltroBusquedaAmiibo, filtro }) { // props. de la page "Inicio"

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

