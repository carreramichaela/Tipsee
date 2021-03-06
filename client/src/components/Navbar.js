import React from 'react';
import { NavLink } from 'react-router-dom';
import wineglass1 from '../images/wineglass2.png';
import twitter from '../images/s-twitter.svg';
import facebook from '../images/s-facebook.svg'
import pinterest from '../images/pinterest.svg'


const Navbar = () => (
  <nav>
    <ul>
      <li>
        {' '}
        <NavLink className="nav-item" exact to="/">
          <img 
          src={wineglass1} 
          id="wineglass1" 
          alt="winebottle-icon" />{' '}
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-item" exact to="/Random-drink">
          TIPSEE
        </NavLink>
      </li>
      <span id="nav-social">
      <li>
        <a className="nav-item" href="https://www.facebook.com/wyncode/">
          <img 
          src={facebook} 
          id="facebook" 
          alt="facebook-icon" />
        </a>{' '}
      </li>
      <li>
        <a className="nav-item" href="https://twitter.com/wyncode">
          <img 
          src={twitter} 
          id="twitter" 
          alt="twitter-icon" />{' '}
        </a>{' '}
      </li>
      <li>
        <a className="nav-item" href="https://www.pinterest.com/">
          <img
          src={pinterest} 
          id="pinterest" 
          alt="pinterest-icon" />{' '}
        </a>{' '}
      </li>
      </span>
    </ul>
  </nav>
);
export default Navbar;
