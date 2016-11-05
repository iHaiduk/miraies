/**
 * Created by igor on 12.10.16.
 */;

import { Component } from "react";
import template from './templates/index';

export default class Header extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return template();
    }
}