import { observable, action } from 'mobx';
import { createContext } from 'react';
// import service from './service.config';

class ArticleStore {
  @observable count = 0;
  
  @action addCount() {
    this.count++;
  };
}

export default createContext(new ArticleStore());