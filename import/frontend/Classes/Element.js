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
        const events = require(`${path}/actions/index`).default;
        const Component = require(path).default;
        events.store = _.merge(events.store, this.props.options);

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
            value: events.getData()
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
        elements.forEach((component, key) => {
            elementsRender.push(
                <Element type={component.type} name={component.name} options={component.options} key={key}/>
            );
        });
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