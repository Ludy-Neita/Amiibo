import { useEffect, useState } from 'react';
import Filtro from './Filtro';
import Listado2 from './Listado2';
import "../Stlye/Inicio.css"

export default function Inicio() {

    const [resultadoAmiibo, setResultadoAmiibo] = useState([]);
    //const [cantidadAmiibo, setCantidadAmiibo] = useState(10);
    //const [loading, setLoading] = useState(true); // peticiones, pero con una imagen de carga

    useEffect(() => {

        const consultarAPI = async () => {

            //const url =(`https://amiiboapi.com/api/amiibo/&limit=${cantidadAmiibo}`);
            const url = "https://amiiboapi.com/api/amiibo/"
            const respuestaAPI = await fetch(url);
            const informacionAPIJson = await respuestaAPI.json();

            console.log(informacionAPIJson);
            setResultadoAmiibo(informacionAPIJson.amiibo);
            //setLoading(false);

        }
        consultarAPI();

    }, [])

    const [filtros, setFiltros] = useState(null)
    const [amiibosFiltrados, setAmiibosFiltrados] = useState([])

    useEffect(() => {

        let variableTemporal = resultadoAmiibo?.filter(product => product.type === filtros)

        setAmiibosFiltrados(variableTemporal)

        console.log(resultadoAmiibo)

    }, [filtros]) // se actualiza esee use Effect que se cambia 


    return (

        <div>
            {console.log(amiibosFiltrados)}

            <div className="Imagen-top"> </div>

            <h1 className='Titulo-inicial'>Los mejores Amiibos</h1>

            <Filtro
                setFiltros={setFiltros}/>

            <Listado2
                resultadoFiltroAmiibo={amiibosFiltrados.length !== 0 ? amiibosFiltrados : resultadoAmiibo} />

        </div>

    );
}
