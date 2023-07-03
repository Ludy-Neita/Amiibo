import { useState } from 'react';
import Item2 from './Item2';
import "../styleSheets/Listado2.css"


export default function Listado2({ resultadoFiltroAmiibo }) {

    const [buscar, setBuscar] = useState("")

    const buscador = (e) => {

        setBuscar(e.target.value)
        console.log(e.target.value)
    }

    return (

        <div className="amiibos-page">

            <input
                className='buscar'
                value={buscar}
                onChange={buscador}
                type="text"
                placeholder=" 🔍︎  Buscar"> 
            </input>

            <div className='contenedor-item' >

                {resultadoFiltroAmiibo.map((amiiboAPI, index) =>

                    <Item2
                        key={index}
                        listAmiiboAPI={amiiboAPI}
                    />
                )}

            </div>

        </div>

    )

}

