import { observable, action } from 'mobx';
import { createContext } from 'react';
import { ProfileModel } from 'src/Models';
import Service from '../config/service.config';


class ProfileStore {
  URL = '/profiles';

  @observable
  currentProfile = new ProfileModel();

  @action
  async getProfile(username) {
    try {
      const { data } = await Service.get(`${this.URL}/${username}`);
      this.setCurrentProfile(data.profile);
    } catch (err) {
      throw err;
    }
  }

  @action
  setCurrentProfile(profile) {
    this.currentProfile = new ProfileModel(profile);
  }

  @action
  clearProfile() {
    this.currentProfile = new ProfileModel();
  }
}

export default createContext(new ProfileStore());