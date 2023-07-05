import DatosFiltro from "../data/DatosFiltro.json"
import "../styleSheets/Filtro.css"
import {FcFilledFilter} from '@react-icons/all-files/fc/FcFilledFilter'


export default function Filtro({ setFiltros }) {


    return (
        <div>

           <a className="Titulo-filtro"> <FcFilledFilter /> Filtrar por tipo de amiibo </a>

            <div className="contenedor-boton-filtro">

                {DatosFiltro.map((tipo) =>

                    <div key={tipo.type}>

                        <button
                            className="boton-filtro"
                            onClick={() => setFiltros(tipo.type)}
                        >
                            {tipo.type}
                        </button>

                    </div>

                )}

                <div>

                    <button
                        className="boton-filtro"
                        onClick={() => setFiltros(null)}
                    >
                        Todas los tipos
                    </button>

                </div>

            </div>

            </div>
    )

};
