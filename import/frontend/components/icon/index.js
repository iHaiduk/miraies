/**
 * Created by igor on 12.10.16.
 */;

import { Component } from "react";
import { observer } from 'mobx-react';
import loadsvg from 'load-svg';
let svg_load;

@observer
class Icon extends Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        if(!svg_load)
            svg_load = new Promise((resolve) => {
                loadsvg('/img/svg/sprite.svg', (err, svg) =>{
                    document.body.insertBefore(svg, document.body.firstChild);
                    resolve();
                });
            });
    }

    componentDidMount() {
        svg_load.then(this.events.setViewBox);
    }

    render() {
        const { view } = this.store;
        const template = require('./templates/' + view).default;

        return template(this.store, this.events);
    }
}

export default Icon;