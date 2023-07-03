import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from "./components/Login";
import Inicio from "./components/Inicio"
import Detalles from "./components/Detalles";


function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/detalles/:id" element={<Detalles />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
