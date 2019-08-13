import { extendObservable } from 'mobx';

class BaseModel {
  constructor(data) {
    if (data) { this.setData(data) } 
    else { this.init() }
  }
  setData(data) { extendObservable(this, data) }
  init() {}
}

export class UserModel extends BaseModel {
  init() {
    this.email = '';
    this.token = '';
    this.username = '';
    this.bio = '';
    this.image = null;
  }
}

export class ProfileModel extends BaseModel {
  init() {
    this.username = '';
    this.bio = '';
    this.image = '';
    this.following = false;
  }
}

export class ArticleModel extends BaseModel {
  init() {
    this.title = '';
    this.slug = '';
    this.body = '';
    this.createdAt = '';
    this.updatedAt = '';
    this.tagList = [];
    this.description = '';
    this.favorited = false;
    this.favoritesCount = 0;
    this.author = new ProfileModel();
  }
}

export class MultipleArticleModel extends BaseModel {
  init() {
    this.articles = [new ArticleModel()];
    this.articlesCount = 0;
  }
}

export class CommentModel extends BaseModel {
  init() {
    this.id = 0;
    this.createdAt = '';
    this.updatedAt = '';
    this.body = '';
    this.author = new ProfileModel();
  }
}