import { BrowserRouter, redirect, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from "./components/Login";
import Inicio from "./components/Inicio"
import Detalles from "./components/Detalles";
import ProtegerRuta from "./pages/ProtegerRuta"
import { useLocalStorage } from 'react-use';




function App() {

  const [cuenta, setcuenta] = useLocalStorage("cuenta")


  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

       {/* <Route element={<ProtegerRuta isLogged={cuenta} />}> */}

          <Route path="/inicio" element={<Inicio />} />
          <Route path="/detalles/:id" element={<Detalles />} />

       {/* </Route> */}

      </Routes>

    </BrowserRouter >

  );
}

export default App;
