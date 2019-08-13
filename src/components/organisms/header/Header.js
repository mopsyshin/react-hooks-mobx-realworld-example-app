import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { UserStore } from 'stores/index';
import NavItem from 'components/molecules/nav-item/NavItem';

const Header = observer(props => {
  const userStore = useContext(UserStore);

  const loginStatusNavItems = [
    {
      navItemName: 'Home',
      icon: null,
      path: './',
    },
    {
      navItemName: 'New Post',
      icon: 'ion-compose',
      path: './create-article',
    },
    {
      navItemName: 'Settings',
      icon: 'ion-gear-a',
      path: './settings',
    },
    {
      navItemName: userStore.currentUser ? userStore.currentUser.username : '',
      icon: null,
      path: './',
    }
  ]

  const logoutStatusNavItems = [
    {
      navItemName: 'Home',
      icon: null,
      path: './',
    },
    {
      navItemName: 'Login',
      icon: null,
      path: './login',
    },
    {
      navItemName: 'Sign up',
      icon: null,
      path: './register',
    }
  ]

  const navItems = () => {
    let navItemsArray;
    if (userStore.loginStatus) {
      navItemsArray = loginStatusNavItems;
    } else {
      navItemsArray = logoutStatusNavItems;
    }
    
    return navItemsArray.map((data, index) => (
      <NavItem data={data} key={index}/>
    ))
  }
  

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          {navItems()}
        </ul>
      </div>
    </nav>
  )
});

export default Header;