import { useEffect, useState } from 'react';
import Filtro from '../pages/Filtro';
import Listado2 from '../pages/Listado2';
import "../styleSheets/Inicio.css"
import { useNavigate } from 'react-router-dom';

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
            console.log(resultadoAmiibo);
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
        console.log(filtros)

    }, [filtros]) // se actualiza el useEffect cada vez que cambia filtros

    const navigate = useNavigate()
    const cerrarSesion = () => {

        localStorage.removeItem('cuenta');
        navigate('/');
    };

    return (

        <div>
            {console.log(amiibosFiltrados)}

            <div className="Imagen-top"> </div>

            <h1 className='Titulo-inicial'>Los mejores Amiibos</h1>

            <button className="button-cerrar-sesion" onClick={cerrarSesion}>
                Cerrar Sesión
            </button>


            <Filtro
                setFiltros={setFiltros}/>

            <Listado2
                resultadoFiltroAmiibo={amiibosFiltrados.length !== 0 ? amiibosFiltrados : resultadoAmiibo} />

        </div>

    );
}
