/**
 * Created by igor on 03.10.16.
 */
import React, {Component, PropTypes} from 'react';

// Task component - represents a single todo item
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <span className="logo">
                    <img src="/img/logo.png" alt="Logo Miraries" className="logo__image"/>
                </span>
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__list_element">Write</li>
                        <li className="navigation__list_element">Read</li>
                        <li className="navigation__list_element">Library</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    //task: PropTypes.object.isRequired,
};