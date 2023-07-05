import { useState, useEffect } from "react"
import template from "./responseTemplate.json"

export default function Cantidad() {


    const ENDPOINT = "https://amiiboapi.com/api/amiibo/";

    const [pagina, setPagina] = useState(1)
    const [datosActuales, setDatosActuales] = useState([])

    useEffect(() => {
        setDatosActuales(template.amiibo.slice(0, 10 * pagina))
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