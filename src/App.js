import './App.css';
import React, { useState } from 'react';
import NavBarFU from './componentes/NavBarFu';
import TabelaMedicamentos from './componentes/TabelaMedicamentos';


function App() {
  return (
    <div className="App">
      <NavBarFU/>
      <TabelaMedicamentos/>
    </div>
  );
}

export default App;
