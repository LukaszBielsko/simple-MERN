import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import AppNavbar from './components/Navbar';
import ShopList from './components/ShopList';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <ShopList/>
    </div>
  );
}

export default App;
