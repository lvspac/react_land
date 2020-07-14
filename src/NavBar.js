import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <div className="nav">
      <div className="wrapper">
        <div className="header-menu">
          <Link to="/" className="logo"><img src={require('./img/logo.png')} alt="" /></Link>
          <ul className="header-nav ">
            <Link to="/"><li className="header-nav__item">Home</li></Link>
            <Link to="/products"><li className="header-nav__item">Products</li></Link>
            <Link to="/cart"><li className="header-nav__item"><img src={require('./img/cart.png')} alt="" /></li></Link>
          </ul>
        </div>
      </div>

    </div>

  </>

);

export default NavBar;
