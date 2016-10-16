import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../backend/tasks.js';

import Header from './Components/Header/index';
import Section from './Components/Section/index';

// App component - represents the whole app
class App extends Component {

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Tasks.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    render() {
        return (
            <div>
                <Header />
                <Section view="header" />
            </div>
        )
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
}, App);