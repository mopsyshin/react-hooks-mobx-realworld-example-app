import { observable, action } from 'mobx';
import { createContext } from 'react';
import service from './service.config';

class FeedStore {
  @observable articleLit = [];

  @action getArticleList() {
    const result = service.get('/articles')
    console.log(result);
    this.articleLit = result;
  }

  @action getFeed() {
    service.get('/articles/feed')
  }
}

export default createContext(new FeedStore());