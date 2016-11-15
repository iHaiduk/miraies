/**
 * Created by igor on 06.11.16.
 */

import { observable } from 'mobx';

class Model {
    @observable view = 'index';
    @observable text = 'default 2';
}

export default Model;