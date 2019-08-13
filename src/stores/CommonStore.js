import { observable, action } from 'mobx';
import { createContext } from 'react';
import service from '../config/service.config'

class CommonStore {
  @observable
  tabMenus = [];

  @observable
  tagList = [];

  @observable
  errorList = [];

  @action
  async getTagList() {
    const { data } = await service.get('/tags');
    this.tagList = data.tags;
  }

  @action
  setErrorList(errorList) {
    this.errorList = errorList;
  }

  @action
  clearErrorList() {
    this.errorList = [];
  }

  @action
  setTabMenus(menus) {
    this.tabMenus = menus;
  }

  @action
  addTabMenu(menu) {
    let i;
    for (i = 0; i < this.tabMenus.length; i += 1) {
      if (this.tabMenus[i].key === menu.key) {
        this.tabMenus[i] = menu;
        return;
      }
    }
    this.tabMenus.push(menu);
  }

  @action
  selectTabMenu(key) {
    this.tabMenus.forEach(menu => {
      if (menu.key === key) {
        menu.isActive = true;
      } else {
        menu.isActive = false;
      }
    })
  }
}

export default createContext(new CommonStore());