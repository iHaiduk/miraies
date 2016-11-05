/**
 * Created by igor on 05.11.16.
 */
import React, { Component, PropTypes } from "react";

export default class Element extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { options, name, type } = this.props;
        const path = `../${type}s/${name}`;
        const Component = require(path).default;
        return <Component {...options}/>
    }
};

export class Elements extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { elements } = this.props;
        let elementsRender = [];
        elements.forEach((component, key) => {
            elementsRender.push(
                <Element type={component.type} name={component.name} options={component.options} key={key} />
            );
        });
        return <div>
            {elementsRender}
            </div>;
    }
};

Elements.propTypes = {
    elements: React.PropTypes.array.isRequired
};

Elements.defaultProps = {
    elements: []
};

Element.propTypes = {
    type: React.PropTypes.oneOf(['module','section','block','group','component']).isRequired,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.shape({
        hash: React.PropTypes.string,
        view: React.PropTypes.string
    })
};

Element.defaultProps = {
    options: {
        view: 'index'
    }
};