import { BrowserRouter, redirect, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from "./pages/Login";
import Inicio from "./pages/Inicio"
import Detalles from "./pages/Detalles";
import ProtegerRuta from "./components/ProtegerRuta"
import { useLocalStorage } from 'react-use';


function App() {

  const [cuentaGuardada, setCuentaGuardada] = useLocalStorage("cuenta")


  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        {/* <Route element={<ProtegerRuta registrado={cuentaGuardada} />}> */}

        <Route path="/inicio" element={<Inicio />} />
        <Route path="/detalles/:id" element={<Detalles />} />

        {/* </Route> */}

      </Routes>

    </BrowserRouter >

  );
}

export default App;
