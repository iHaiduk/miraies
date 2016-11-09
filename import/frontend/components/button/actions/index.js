/**
 * Created by igor on 06.11.16.
 */

import Model from "./model";

class Events {

    constructor() {
        this.store = new Model;
        this.resetTimer = this.resetTimer.bind(this);
    }

    resetTimer() {
        this.store.timer += 1;
    }

}

export default new Events;