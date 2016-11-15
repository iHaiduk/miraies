/**
 * Created by igor on 06.11.16.
 */

import { observable } from 'mobx';

class Model {
    @observable view    = 'index';
    @observable name    = 'default';
    @observable width   = 50;
    @observable height  = 50;
    @observable element = null;
    @observable viewBox = '0 0 100 100';
    @observable className = {};
}

export default Model;