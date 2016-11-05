/**
 * Created by igor on 12.10.16.
 */;

import { Component, PropTypes } from "react";
const loadsvg = require('load-svg');
let svg_load;

export default class Icon extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            viewBox: '0 0 100 100'
        };
        this.setViewBox = this.setViewBox.bind(this);
    }

    setViewBox(err, svg){

        const self = this;
        self.setState({
            viewBox: document.getElementById(self.props.name).getAttribute('viewBox')
        });
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
        const self = this;
        svg_load.then(self.setViewBox);
    }

    render() {
        const { view } = this.props;
        let template = require('./templates/' + view).default;
        return template(this.props, this.state);
    }
}

Icon.propTypes = {
    view: PropTypes.string,
    name: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    element: PropTypes.string
};

Icon.defaultProps = {
    view: 'index',
    name: 'default',
    width: 50,
    height: 50,
    element: null
};