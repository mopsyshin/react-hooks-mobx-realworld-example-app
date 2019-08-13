import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { CommonStore, UserStore } from "stores/index";

const TabItem = observer(props => {
  return (
    <li className="nav-item">
      <span
        className={`nav-link ${props.data.isActive ? 'active' : 'inActive'}`}
        onClick={() => { 
          props.data.onClick(props.data.key)
        }}>
        {props.data.tabName}
      </span>
    </li>
  );
});

const TabMenu = observer(props => {
  const commonStore = useContext(CommonStore);
  const userStore = useContext(UserStore);
  const loginStatus = userStore.loginStatus;

  const renderMenus = () => {
    return commonStore.tabMenus.map((menu, index) => {
      if (menu.authRequired && !loginStatus) {
        return;
      }
      return (
        <TabItem data={menu} key={index} />
      )
    })
  }
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {renderMenus()}
      </ul>
    </div>
  );
});

export default TabMenu;
