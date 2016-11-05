import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Tasks} from '../backend/tasks.js';
import {Elements} from './Classes/Element';

import structure from '../../_structure/landing';

// App component - represents the whole app
class App extends Component {

    render() {
        let elements = this.props.structure.elements;
        return (
            <div>
                <Elements elements={elements}/>
            </div>
        )
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
        return {
            tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch(),
            structure
        };
    },
    App
);