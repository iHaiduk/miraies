/**
 * Created by igor on 12.10.16.
 */

'use strict';

import {Component, PropTypes} from "react";
import {observer} from 'mobx-react';

@observer
class Text extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
        console.log(this.events)
        this.events.didMount.call(this);
    }

    componentDidUpdate(){
        this.events.didMount.call(this);
    }

    render() {
        const {view} = this.store;
        const template = require('./templates/' + view).default;

        return template(this.store, this.events);
    }
}
export default Text;

Text.propTypes = {
    view: PropTypes.string,
    text: PropTypes.string,
    tagType: PropTypes.string,
    containerClassName: PropTypes.any
};