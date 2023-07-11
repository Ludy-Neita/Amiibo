import "../styleSheets/Inicio.css"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseCircle } from '@react-icons/all-files/ai/AiOutlineCloseCircle'
import Filtro from "../components/Filtro";
import Listado2 from "../components/Listado2"

export default function Inicio() {

    // --------- OBTENER INFORMACIÓN DE LA API --------- //

    const [resultadoAmiibo, setResultadoAmiibo] = useState([]);

    useEffect(() => {

        const consultarAPI = async () => {

            const url = "https://amiiboapi.com/api/amiibo/"
            const respuestaAPI = await fetch(url);
            const informacionAPIJson = await respuestaAPI.json();

            setResultadoAmiibo(informacionAPIJson.amiibo);

        }
        consultarAPI();

    }, [])

    // --------- HACER FILTRO --------- //

    const [filtros, setFiltros] = useState(null)
    const [amiibosFiltrados, setAmiibosFiltrados] = useState([])

    useEffect(() => {

        if (!filtros) { // si no hay filtro que muestre todos los amiibos, pero solo los 4.

            setAmiibosFiltrados(resultadoAmiibo)

        } else {
            let variableTemporalFiltro = resultadoAmiibo?.filter(product => product.type === filtros)  // filtrar el array de la API, se coloca una varible x "product" y esta se le que guarda los datos del "type" y se comprara si estos datos son igual a los de filtros
            // se guarda en una varible temporal el resultado del filtro.

            setAmiibosFiltrados(variableTemporalFiltro)
        }
    }, [filtros, resultadoAmiibo]) // se coloca "filtros" para que el useEffect se actualice cada vez que cambia el filtro.

    // --------- HACER BÚSQUEDA --------- //

    const [buscar, setBuscar] = useState("")

    const [amiibosBuscados, setAmiibosBuscados] = useState(filtros)

    useEffect(() => {

        if (buscar !== '') {

            // amiibosFiltrados, son los datos filtrados o todos los datos si no se hace la opcion de filtro.
            let variableTemporalBusqueda = amiibosFiltrados.filter(obj => obj.name.includes(buscar)); //Busca en los nombres que incluyan la palabra de la busqueda
            setAmiibosBuscados(variableTemporalBusqueda)

        } else {
            setAmiibosBuscados(amiibosFiltrados) //Seteamos el valor de los amiibos buscados
        }
    }, [buscar, amiibosFiltrados])  //Cada vez que cambie el buscar o si le cambio el filtro


    // ---------  BOTÓN CERRAR SESIÓN ---------  //

    const navigate = useNavigate()
    const cerrarSesion = () => {

        localStorage.removeItem('cuenta');
        navigate('/');
    };

    return (

        <div>
            <div className="imagen-top"> </div>

            <h1 className='titulo-inicial'>Los mejores Amiibos</h1>

            <div className="contendor-button-cerrar-sesion">
                <button
                    className="button-cerrar-sesion"
                    onClick={cerrarSesion}
                >
                     <AiOutlineCloseCircle /> Cerrar Sesión
                </button>

                
            </div>

            <input
                className='buscar'
                onChange={(e) => setBuscar(e.target.value)}
                type="text"
                placeholder=" 🔍︎  Buscar">
            </input>

            <Filtro
                setFiltros={setFiltros} />

            <Listado2
                //  si se hace busqueda pasar los amiibos que tienen el nombre buscado, si no, pasar "amiibosFiltrados" que es el array que se filtró o puede ser el array de la API (resultadoAmiibo)
                resultadoFiltroBusquedaAmiibo={amiibosBuscados !== null ? amiibosBuscados : amiibosFiltrados}
                filtro={filtros}
            />
        </div>
    );
}
