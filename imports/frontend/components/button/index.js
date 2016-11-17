/**
 * Created by igor on 12.10.16.
 */

'use strict';

import React, {Component, PropTypes} from "react";
import {observer} from 'mobx-react';

//@observer
class Button extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const view = 'index';
        this.template = require('./view/test').default;
        return this.template();
    }

}
export default Button;

Button.propTypes = {
    view: PropTypes.string
};