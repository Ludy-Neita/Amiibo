import "../styleSheets/Listado2.css"
import { useEffect, useState } from 'react';
import { AiOutlinePlusSquare } from '@react-icons/all-files/ai/AiOutlinePlusSquare'
import Item2 from './Item2';

export default function Listado2({ resultadoFiltroBusquedaAmiibo }) {

    // ------- Cantidad de Amiibos a mostrar  --------- //

    const [pagina, setPagina] = useState(1)
    const [amiibosCantidadMostrar, setAmiibosCantidadMostrar] = useState([])

    useEffect(() => {

        setAmiibosCantidadMostrar(resultadoFiltroBusquedaAmiibo.slice(0, 4 * pagina)) // datos del cero al 10. slice: cortar el arreglo.

    }, [pagina])

    return (

        <div className="amiibos-page">

            <div className="contendor-button-mas-amiibos">
                <button
                    className="button-mas-amiibos"
                    onClick={() =>
                        setPagina((pagina) => pagina + 1)}
                >
                    <AiOutlinePlusSquare />  Cargar más
                </button>
            </div>

            <div className='contenedor-item' >
                {amiibosCantidadMostrar.map((amiiboAPI, index) =>

                    <Item2
                        key={index}
                        listAmiiboAPI={amiiboAPI}
                    />

                )}
            </div>

        </div>
    )
}

