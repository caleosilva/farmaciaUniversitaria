import './App.css';
import React, { useState } from 'react';
import NavBarFU from './componentes/NavBarFu';
import EstoqueEntrada from './componentes/EstoqueEntrada';
import EstoqueSaida from './componentes/EstoqueSaida';
import FormAtualizarMed from './componentes/FormAtualizarMed';
import FormCadastrarMed from './componentes/FormCadastrarMed';
import TabelaMedicamentos from './componentes/TabelaMedicamentos';
import InputBuscar from './componentes/InputBuscar';
import TabelaEstoque from './componentes/TabelaEstoque';
import TabelaDoadores from './componentes/TabelaDoadores';
import TabelaPacientes from './componentes/TabelaPacientes';


function App() {
  return (
    <div className="App">
      <NavBarFU/>
      <TabelaMedicamentos/>
    </div>
  );
}

export default App;
