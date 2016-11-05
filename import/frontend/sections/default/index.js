/**
 * Created by igor on 12.10.16.
 */;

import { Component, PropTypes } from "react";

export default class Section extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { view, elements } = this.props;
        let template = require('./templates/' + view).default;
        return template({elements});
    }
}

Section.propTypes = {
    view: PropTypes.string
};

Section.defaultProps = {
    view: 'index'
};