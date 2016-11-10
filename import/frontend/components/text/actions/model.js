/**
 * Created by igor on 06.11.16.
 */

import { observable } from 'mobx';

class Model {
    @observable view = 'index';
    @observable text = 'default text';
}

export default Model;