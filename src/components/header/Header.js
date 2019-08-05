import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link active" href="./">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./">
              <i className="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./">
              <i className="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;