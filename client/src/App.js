import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import {Provider} from 'react-redux';
import {Container} from 'reactstrap';

import store from './store';

import AppNavbar from './components/Navbar';
import ShopList from './components/ShopList';
import ItemModal from './components/ItemModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
          <ItemModal/>
          <ShopList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
