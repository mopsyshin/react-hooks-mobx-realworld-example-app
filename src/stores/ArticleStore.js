import { observable, action } from 'mobx';
import { createContext } from 'react';
import service from './service.config';

class ArticleStore {

}

export default createContext(new ArticleStore());