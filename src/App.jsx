import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from "./components/Login";
import Listado2 from "./components/Listado2";
import Detalles from "./components/Detalles";
import Item2 from "./components/Item2";
import Filtro from './components/Filtro';
import Inicio from "./components/Inicio"


function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Listado" element={<Listado2 />} />
        <Route path="/detalles/:id" element={<Detalles />} />
        <Route path="/item" element={<Item2 />} />
        <Route path="/filtro" element={<Filtro />} />
        <Route path="/inicio" element={<Inicio />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
