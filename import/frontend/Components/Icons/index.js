/**
 * Created by igor on 12.10.16.
 */;

import { Component, PropTypes } from "react";
//const Icon = require('./../Icon/index').default;

export default class Section extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { view } = this.props;
        let template = require('./templates/' + view).default;
        //console.log(Icon)
        return template(this.props);
    }
}

Section.propTypes = {
    view: PropTypes.string
};

Section.defaultProps = {
    view: 'index'
};