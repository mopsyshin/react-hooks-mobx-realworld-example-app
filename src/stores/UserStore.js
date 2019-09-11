import Service from '../config/service.config';
import { observable, action, computed } from 'mobx';
import { createContext } from 'react';
import { saveToken, destroyToken } from 'src/config/auth.config';
import { UserModel } from 'src/Models';


class UserStore {
  URL = '/users';

  @observable
  currentUser = new UserModel();

  @computed
  get loginStatus() {
    if (this.currentUser) {
      return true;
    }
    return false;
  }

  @action 
  async login({user}) {
    try {
      const { data } = await Service.post(`${this.URL}/login`, {user});
      this.setCurrentUser(data.user);
    } catch (err) {
      throw err;
    }
  }

  @action
  async logout() {
    this.currentUser = null;
    destroyToken();
  }

  @action
  async registration({user}) {
    try {
      const { data } = await Service.post(this.URL, {user});
      this.setCurrentUser(data);
      return data;
    } catch (err) {
      throw err;
    }
  }

  @action
  async getCurrentUser() {
    try {
      const { data } = await Service.authGet('/user');
      this.setCurrentUser(data.user);
      return data.user;
    } catch (err) {
      throw err;
    }
  }

  @action
  async updateUser({user}) {
    try {
      const { data } = await Service.authPut('/user', {user});
      this.setCurrentUser(data.user);
      return data.user
    } catch (err) {
      throw err;
    }
    
  }

  @action
  setCurrentUser(user) {
    this.currentUser = new UserModel(user);
    saveToken(user.token);
  }
}

export default createContext(new UserStore());