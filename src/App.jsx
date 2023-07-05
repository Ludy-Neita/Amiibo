import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./pages/Login";
import Inicio from "./pages/Inicio"
import Detalles from "./pages/Detalles";
import ProtegerRuta from "./components/ProtegerRuta"
import { useLocalStorage } from 'react-use';
import { useState } from 'react';


function App() {


  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route element={<ProtegerRuta />}>

          <Route path="/inicio" element={<Inicio />} />
          <Route path="/detalles/:tail" element={<Detalles />} />

        </Route>

      </Routes>

    </BrowserRouter >

  );
}

export default App;
