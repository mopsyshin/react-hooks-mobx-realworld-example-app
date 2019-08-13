import { observable, action, computed } from 'mobx';
import { createContext } from 'react';
import { saveToken, destroyToken } from 'src/config/auth.config';
import { UserModel } from 'src/Models';


class ProfileStore {

}

export default createContext(new ProfileStore());