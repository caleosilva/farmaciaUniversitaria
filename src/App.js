import './App.css';
import React, { useState } from 'react';
import NavBarFU from './componentes/NavBarFu';
import EstoqueEntrada from './componentes/EstoqueEntrada';
import EstoqueSaida from './componentes/EstoqueSaida';
import FormAtualizarMed from './componentes/FormAtualizarMed';
import FormCadastrarMed from './componentes/FormCadastrarMed';


function App() {
  return (
    <div className="App">
      <NavBarFU/>
      <FormCadastrarMed/>
    </div>
  );
}

export default App;
