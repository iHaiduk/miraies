/**
 * Created by igor on 06.11.16.
 */

import { observable } from 'mobx';

class Data {
    @observable view    = 'index';
    @observable name    = 'default';
    @observable width   = 50;
    @observable height  = 50;
    @observable element = null;
    @observable viewBox = '0 0 100 100';
}

class Events {

    constructor() {
        this.store = new Data;
        this.setViewBox = this.setViewBox.bind(this);
    }

    setViewBox(){
        this.store.viewBox = document.getElementById(this.store.name).getAttribute('viewBox');
    }

    getData() {
        return this.store;
    }
}

export default new Events;