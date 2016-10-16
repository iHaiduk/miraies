/**
 * Created by igor on 12.10.16.
 */;

import { Component, PropTypes } from "react";

export default class Header extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { view } = this.props;
        let template = require('./templates/' + view).default;
        return template();
    }
}

Header.propTypes = {
    view: PropTypes.string
};

Header.defaultProps = {
    view: 'index'
};