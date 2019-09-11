import { observable, action } from 'mobx';
import { createContext } from 'react';
import { ArticleModel } from 'src/Models';
import Service from '../config/service.config'

class ArticleStore {
  URL = "/articles";

  // Managing Current Article
  @observable
  currentArticle = new ArticleModel();

  @observable
  articleIsLoaded = false;
  
  @action
  async getCurrentArticle(slug) {
    const { data } = await Service.get(`${this.URL}/${slug}`);
    this.currentArticle = new ArticleModel(data.article);
  };

  @action
  async updateArticle(slug, article) {
    const { data } = await Service.authPut(`${this.URL}/${slug}`, article)
    this.currentArticle = new ArticleModel(data.article);
  }

  @action
  async createArticle(article) {
    const { data } = await Service.authPost(this.URL, { article });
    this.currentArticle = new ArticleModel(data.article);
  }

  @action
  async deleteArticle(slug) {
    await Service.authDelete(`${this.URL}/${slug}`);
    this.currentArticle = new ArticleModel();
  }

  @action
  clearArticle() {
    this.currentArticle = new ArticleModel();
  }

  // Managing Article List
  @observable
  articleList = [];

  @observable
  articleListIsLoaded = false;

  @action
  async getArticleList(params) {
    this.articleListIsLoaded = false;
    const result = await Service.get(this.URL, params);
    if (result) {
      this.articleList = result.data.articles.map(article => new ArticleModel(article));
      this.articleListIsLoaded = true;
    }
  };

  @action
  async getFeed(params) {
    this.articleListIsLoaded = false;
    const result = await Service.authGet(`${this.URL}/feed`, { params });
    if (result) {
      this.articleList = result.data.articles.map(article => new ArticleModel(article));
      this.articleListIsLoaded = true;
    }
  };

  @action
  clearArticleList() {
    this.articleList = [];
  }
}

export default createContext(new ArticleStore());