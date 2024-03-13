import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Routes';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <RoutesComponent />
      </div>
    </Router>
  );
}

export default App;
