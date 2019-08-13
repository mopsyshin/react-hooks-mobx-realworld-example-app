import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = props => {
  const icon = () => {
    if (props.data.icon) {
      return (
        <i className="ion-compose"></i>
      )
    }
  }

  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.data.path}>
        {icon()}&nbsp;{props.data.navItemName}
      </Link>
    </li>
  )
}

export default NavItem;