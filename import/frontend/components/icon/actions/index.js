/**
 * Created by igor on 06.11.16.
 */

import Model from "./model";

class Events {

    constructor() {
        this.store = new Model;
        this.setViewBox = this.setViewBox.bind(this);
    }

    setViewBox(){
        this.store.viewBox = document.getElementById(this.store.name).getAttribute('viewBox');
    }

}

export default new Events;