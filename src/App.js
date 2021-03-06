import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//bring in components
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart';
import Default from './components/Default';
import Modal from './components/Modal';

// bring in bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <React.Fragment>
      <Navbar /> {/* show navbar on every page */}
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
