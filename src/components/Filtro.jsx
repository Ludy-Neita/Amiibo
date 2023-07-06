import {FcFilledFilter} from '@react-icons/all-files/fc/FcFilledFilter'
import DatosFiltro from "../data/DatosFiltro.json"
import "../styleSheets/Filtro.css"

export default function Filtro({ setFiltros }) {

    return (
        <div>

           <a className="Titulo-filtro"> <FcFilledFilter /> Filtro por tipo </a>

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
                        Todos los tipos
                    </button>
                </div>

            </div>

            </div>
    )

};
