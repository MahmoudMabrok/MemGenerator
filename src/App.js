import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Meme} from './components/Meme';

import './App.css'
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/" > MemGenerator </NavbarBrand>
          </div>
        </Navbar>
        <Meme/>
        <Footer/>

      </div>
    );
  }
}

export default App;
