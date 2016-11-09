/**
 * Created by igor on 12.10.16.
 */

'use strict';

import {Component, PropTypes} from "react";
import {observer} from 'mobx-react';

@observer
class Button extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {view} = this.store;
        const template = require('./templates/' + view).default;

        return template(this.store, this.events);
    }
}
export default Button;

Button.propTypes = {
    view: PropTypes.string,
    timer: PropTypes.number
};