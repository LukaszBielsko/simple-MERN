import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {Provider} from 'react-redux';

import store from './store';

import AppNavbar from './components/Navbar';
import ShopList from './components/ShopList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <ShopList/>
      </div>
    </Provider>
  );
}

export default App;
