import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./elements/Home";
import Create from "./elements/Create";
import Read from "./elements/Read";

function App() {
  return (
    <div className="App">
      <h1>Sistema de Alunos</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read/:id' element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
