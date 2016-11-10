/**
 * Created by igor on 06.11.16.
 */

class Events {

    constructor() {
        this.setViewBox = this.setViewBox.bind(this);
    }

    setViewBox(){
        this.store.viewBox = document.getElementById(this.store.name).getAttribute('viewBox');
    }

}

export default Events;