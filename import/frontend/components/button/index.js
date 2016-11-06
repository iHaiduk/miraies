/**
 * Created by igor on 12.10.16.
 */;

import { Component, PropTypes } from "react";

export default class Button extends Component {

    constructor(props, context) {
        super(props, context);
        let events = {
            handler: this.handler.bind(this)
        };
        Object.assign(this, events);
        this.state =  {stateText: null};
    }

    handler() {

        this.setState({stateText: 'test'})
    }

    render() {
        const { view } = this.props;
        let template = require('./templates/' + view).default;
        return template(this.props, this.state, this);
    }
}

Button.propTypes = {
    view: PropTypes.string,
    text: PropTypes.string
};

Button.defaultProps = {
    view: 'index',
    text: 'Button'
};