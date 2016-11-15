/**
 * Created by igor on 06.11.16.
 */

class Events {

    constructor() {
        this.resetTimer = this.resetTimer.bind(this);
    }

    resetTimer() {
        this.store.timer += 1;
    }

}

export default Events;