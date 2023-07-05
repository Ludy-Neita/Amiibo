import { useEffect, useState } from 'react';
import Filtro from "../components/Filtro";
import Listado2 from "../components/Listado2"
import "../styleSheets/Inicio.css"
import { useNavigate } from 'react-router-dom';
import {AiOutlineCloseCircle} from '@react-icons/all-files/ai/AiOutlineCloseCircle'
import {AiOutlinePlusSquare} from '@react-icons/all-files/ai/AiOutlinePlusSquare'


export default function Inicio() {

    // obtener la información de la API
    const [resultadoAmiibo, setResultadoAmiibo] = useState([]);

    useEffect(() => {

        const consultarAPI = async () => {

            const url = "https://amiiboapi.com/api/amiibo/"
            const respuestaAPI = await fetch(url);
            const informacionAPIJson = await respuestaAPI.json();

            setResultadoAmiibo(informacionAPIJson.amiibo);

            console.log(resultadoAmiibo);

        }
        consultarAPI();

    }, [])

        // ------- Cantidad de Amiibos a mostrar.

        const [pagina, setPagina] = useState(1)
        const [datosActuales, setDatosActuales] = useState([])
    
        useEffect(() => {
            setDatosActuales(resultadoAmiibo.slice(0, 4 * pagina)) // datos del cero al 10. slice: cortar el arreglo.
        
        }, [pagina])
    
    
        console.log(datosActuales)
    
        //---------

    const [filtros, setFiltros] = useState(null)
    const [amiibosFiltrados, setAmiibosFiltrados] = useState([])

    useEffect(() => {

        // filtrar el array de la API, se coloca una varible x 
        // y esta se le que guarda los datos del "type" y se comprara si estos datos son igual a los de filtros
        let variableTemporal = resultadoAmiibo?.filter(product => product.type === filtros)
        // se guarda en una varible temporal el resultado del filtro.


        setAmiibosFiltrados(variableTemporal)


    }, [filtros]) // se coloca "filtros" para que el useEffect se actualice cada vez que cambia el filtro o la selección del tipo de Amiibo.



    // Botón de cerrar sesión 

    const navigate = useNavigate()
    const cerrarSesion = () => {

        localStorage.removeItem('cuenta');
        navigate('/');
    };

    return (

        <div>
            <div className="Imagen-top"> </div>

            <h1 className='Titulo-inicial'>Los mejores Amiibos</h1>

            <div className="contendor-button-cerrar-sesion">
                <button
                    className="button-cerrar-sesion"
                    onClick={cerrarSesion}
                >
                    <AiOutlineCloseCircle/> Cerrar Sesión
                </button>

            </div>

            <div className="contendor-button-mas-amiibos">

                <button
                    className="button-mas-amiibos"
                    onClick={() =>
                        setPagina((pagina) => pagina + 1)}
                >
                <AiOutlinePlusSquare/>  Cargar más </button>
            </div>

            <Filtro
                setFiltros={setFiltros} />

            {console.log(amiibosFiltrados)}

            <Listado2
                //  si hay datos en el filtro (amiibosFiltrados), pase a Listado2 el array que se filtró, y si no, pase completo el array de la API (resultadoAmiibo)
                resultadoFiltroAmiibo={amiibosFiltrados.length !== 0 ? amiibosFiltrados : datosActuales} />


        </div>

    );
}
