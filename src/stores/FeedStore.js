import { observable, action, configure } from 'mobx';
import { createContext } from 'react';
import service from './service.config';

class FeedStore {
  @observable articleList = [];

  @action async getArticleList() {
    const data = await service.get('/articles');
    console.log(data.articles);
    this.articleList = data.articles;
  };

  @action getFeed() {
    service.get('/articles/feed');
  };
}

export default createContext(new FeedStore());