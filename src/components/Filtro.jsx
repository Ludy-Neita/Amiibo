import { FcFilledFilter } from '@react-icons/all-files/fc/FcFilledFilter'
import DatosFiltro from "../data/DatosFiltro.json"
import "../styleSheets/Filtro.css"

import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export default function Filtro({ setFiltros }) {

    const [dropDown, setDropDown] = useState(false);

    const abrircerrarDropDown = () => {

        setDropDown(!dropDown);
    }

    return (
        <div className="contenedor-filtro">

            <Dropdown isOpen={dropDown} toggle={abrircerrarDropDown} direction="down">

                <DropdownToggle caret className="titulo-filtro">
                    <FcFilledFilter /> Filtro por tipo
                </DropdownToggle>

                <DropdownMenu className="contenedor-boton-filtro">

                    {DatosFiltro.map((tipo) =>
                        <DropdownItem header key={tipo.type}>
                            <DropdownItem className="boton-filtro" onClick={() => setFiltros(tipo.type)}>{tipo.type}</DropdownItem>
                        </DropdownItem>
                    )}

                    <DropdownItem divider />
                    <DropdownItem className="boton-filtro" onClick={() => setFiltros(null)}>
                        Todos los tipos
                    </DropdownItem>

                </DropdownMenu>

            </Dropdown>

        </div>
    )

}
