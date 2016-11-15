import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pages} from '../backend/pages.js';
import {Elements} from './Classes/Element';

import structure from '../../_structure/landing';

// App component - represents the whole app
class App extends Component {

    render() {
        let elements = (this.props.pages || structure).elements || [];
        return (
            <div>
                <Elements elements={elements}/>
            </div>
        )
    }
}

App.propTypes = {
    pages: PropTypes.any,
};

export default createContainer(() => {
        return {
            pages: null//Pages.findOne({name: 'landing'})
        };
    },
    App
);