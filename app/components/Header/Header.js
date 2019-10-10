import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './images/banner.jpg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <img src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/oiy5csn7atuxfrntyfpc.jpg"/>
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Why did I do this?
          </Link>
          <Link className="router-link" to="https://www.urbandictionary.com/define.php?term=Goose">
            What is a goose?
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
