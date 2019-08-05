import { observable, action } from 'mobx';
import { createContext } from 'react';
import service from './service.config';

class ArticleStore {
  @observable currentArticle = {
    title: '',
    slug: '',
    body: '',
    createdAt: '',
    updatedAt: '',
    tagList: [],
    description: '',
    favorited: false,
    favoritesCount: 0,
    author: {
      username: '',
      bio: '',
      image: '',
      following: false,
    }
  };
  
  @action async getCurrentArticle(slug) {
    const data = await service.get(`/articles/${slug}`);
    console.table(data.article)
    this.currentArticle = data.article;
  };
}

export default createContext(new ArticleStore());