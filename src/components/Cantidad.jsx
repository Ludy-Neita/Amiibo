import { useState, useEffect } from "react"

export default function Cantidad() {


    const ENDPOINT = "https://amiiboapi.com/api/amiibo/";

    const [pagina, setPagina] = useState(1)
    const [datosActuales, setDatosActuales] = useState([])

    const [resultadoAmiibo, setResultadoAmiibo] = useState([]);

    useEffect(() => {
        setDatosActuales(amiibosFiltrados.slice(0, 10 * pagina)) // datos del cero al 10. slice: cortar el arreglo.
    }, [pagina])

    return (
        <>
            <button
                onClick={() =>
                    setPagina((pagina) => pagina + 1)}
            >
                Cargar más</button>

            {datosActuales.map((dato, index) =>

                <div key={`dato${index}`}>

                    <h3>{index + 1}</h3>
                    <h2>{dato.gameSeries}</h2>
                    <p>{dato.amiiboSeries}</p>

                </div>
            )}
        </>
    );
}