import './App.css';
import React, { useState } from 'react';
import NavBarFU from './componentes/NavBarFu';
import FormCadastrarMed from './componentes/FormCadastrarMed';

function App() {
  return (
    <div className="App">
      <NavBarFU />
      <FormCadastrarMed/>
    </div>
  );
}

export default App;
