import { useEffect, useState } from 'react';
import Filtro from "../components/Filtro";
import Listado2 from "../components/Listado2"
import "../styleSheets/Inicio.css"
import { useNavigate } from 'react-router-dom';

export default function Inicio() {

    // obtener la información de la API
    const [resultadoAmiibo, setResultadoAmiibo] = useState([]);
    //const [cantidadAmiibo, setCantidadAmiibo] = useState(10);
    //const [loading, setLoading] = useState(true); // peticiones, pero con una imagen de carga

    useEffect(() => {

        const consultarAPI = async () => {

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


        // filtrar el array de la API, se coloca una varible x 
        // y esta se le que guarda los datos del "type" y se comprara si estos datos son igual a los de filtros
        let variableTemporal = resultadoAmiibo?.filter(product => product.type === filtros)
        // se guarda en una varible temporal el resultado del filtro.

        setAmiibosFiltrados(variableTemporal)

        console.log(resultadoAmiibo)
        console.log(filtros)

    }, [filtros]) // se coloca "filtros" para que el useEffect se actualice cada vez que cambia el filtro o la selección del tipo de Amiibo.

    // Botón de cerrar sesión 
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

            <button
                className="button-cerrar-sesion"
                onClick={cerrarSesion}
            >
                Cerrar Sesión
            </button>


            <Filtro
                setFiltros={setFiltros} />

            <Listado2
                //  si hay datos en el filtro (amiibosFiltrados), pase a Listado2 el array que se filtró, y si no, pase completo el array de la API (resultadoAmiibo)
                resultadoFiltroAmiibo={amiibosFiltrados.length !== 0 ? amiibosFiltrados : resultadoAmiibo} />

        </div>

    );
}
