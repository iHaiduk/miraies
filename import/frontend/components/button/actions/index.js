/**
 * Created by igor on 06.11.16.
 */

import { observable } from 'mobx';

class Data {
    @observable timer = 0;
}

class Events {

    constructor() {
        this.store = new Data;
        this.resetTimer = this.resetTimer.bind(this);
    }

    resetTimer() {
        this.store.timer += 1;
    }

    getData() {
        return this.store;
    }

}

export default new Events;