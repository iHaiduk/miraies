/**
 * Created by igor on 05.11.16.
 */
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import _ from 'lodash';

export default class Element extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {options, name, type} = this.props;
        const path = `../${type}s/${name}`;
        const _model = require(`${path}/actions/model`).default;
        const model = new _model;
        const events = require(`${path}/actions/index`).default;
        const Component = require(path).default;
        events.store = _.merge(events.store, options);

        if(Component.prototype.constructor.propTypes == null) {
            throw `Component "${Component.prototype.constructor.name}" don't have "propTypes".`;
        }

        Object.keys(options).forEach((key) => {
            if(key != 'elements') {
                if (model[key] === undefined) {
                    throw `Component "${Component.prototype.constructor.name}" don't have "${key}" property in the model.`;
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

        Object.defineProperty(Component.prototype, "events", {
            value: events,
            writable: false, // запретить присвоение
            configurable: false // запретить удаление
        });

        Object.defineProperty(Component.prototype, "store", {
            value: events.store
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

        return <Component {...options}/>
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