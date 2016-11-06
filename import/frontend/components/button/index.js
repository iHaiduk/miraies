/**
 * Created by igor on 12.10.16.
 */;

import { Component, PropTypes } from "react";
import { observer } from 'mobx-react';
import Events from './actions/index';
import {observable} from 'mobx';


@observer
class Button extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { view } = this.props;
        let template = require('./templates/' + view).default;
        return template(this.props, Events);
    }
}
export default Button;

Button.propTypes = {
    view: PropTypes.string,
    text: PropTypes.string,
    data: PropTypes.any
};

Button.defaultProps = {
    view: 'index',
    data: Events.getData()
};