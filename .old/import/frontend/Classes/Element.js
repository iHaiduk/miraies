/**
 * Created by igor on 05.11.16.
 */
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';
import assignIn from 'lodash/assignIn';

export default class Element extends Component {

    constructor(props, context) {
        super(props, context);
        const {options, name, type} = props;
        const path = `../${type}s/${name}`;

        this.Component = require(path).default;
        this.store = require(`${path}/actions/model`).default;
        this.events = require(`${path}/actions/index`).default;

        console.log(999, this.refs.component)

        const events = new this.events;
        Component.prototype = assignIn(Component.prototype, events, {events, store: Object.assign(new this.store, options)});
    }

    render() {

        const Component = this.Component;

        if(Component.prototype.constructor.propTypes == null) {
            console.warn(`Component "${Component.prototype.constructor.name}" don't have "propTypes".`);
        }

        Object.keys(this.store).forEach((key) => {
            if(key != 'elements') {
                if (Component.prototype.store[key] === undefined) {
                    console.warn(`Component "${Component.prototype.constructor.name}" don't have "${key}" property in the model.`);
                }
                if (!Component.prototype.constructor.propTypes.hasOwnProperty(key)) {
                    console.warn(`Component "${Component.prototype.constructor.name}" don't have "${key}" types in the propTypes.`);
                }
            }
        });

        Object.defineProperty(Component.prototype, "dom", {
            configurable: true,
            value: function (ref) {
                return ref != null ? this.refs[ref] : ReactDOM.findDOMNode(this);
            }
        });

        Object.defineProperty(Component.prototype, "view", {
            configurable: true,
            get: function () {
                return this.store.view;
            },
            set: function (value) {
                this.store.view = value;
            }
        });

        return <Component ref="component" {...Component.prototype.store} />
    }
};

export class Elements extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {elements} = this.props;
        let elementsRender = [];
        if(_.isArray(elements)) {
            elements.forEach((component, key) => {
                elementsRender.push(
                    <Element type={component.type} name={component.name} options={component.options} key={key}/>
                );
            });
        }
        return <div>
            {elementsRender}
        </div>;
    }
}
;

Elements.propTypes = {
    elements: React.PropTypes.array.isRequired
};

Elements.defaultProps = {
    elements: []
};

Element.propTypes = {
    type: React.PropTypes.oneOf(['module', 'section', 'block', 'group', 'component']).isRequired,
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