import { observable, action } from 'mobx';
import { createContext } from 'react';
import service from './service.config';

class EditorStore {

}

export default createContext(new EditorStore());