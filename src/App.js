import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Curriculo from './components/Curriculo';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="curriculo-app">
      <Navbar />
      <Presentation />
      
      <div className="container">
        <div className="content-row">

          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;