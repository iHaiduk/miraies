/**
 * Created by igor on 15.11.16.
 */
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { observable } from 'mobx';
import {observer} from 'mobx-react';

import { Tasks } from './backend/task.js';



import Button from './frontend/components/button';




// https://gist.github.com/danharper/74a5102363fbd85f6b67
/*function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}

(async () => {
    console.log('a');
    await sleep(2000);
    console.log('b');
    await sleep(2000);
    console.log('c');
})();*/

@observer
class App extends Component {

    @observable price = 0;

    constructor(props, context){
        super(props, context);
        const self = this;
        setInterval(() => {
            self.price++;
        }, 1000)
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                    <Button />
                </header>

                <ul>
                    <li>{this.price}</li>
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        tasks: Tasks.find().fetch(),
    };
}, App);