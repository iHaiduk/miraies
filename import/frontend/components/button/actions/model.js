/**
 * Created by igor on 06.11.16.
 */

import { observable } from 'mobx';

class Model {
    @observable timer = 0;
    @observable view = 'index';
}

export default Model;