/**
 * Created by igor on 03.10.16.
 */
import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Header extends Component {
    render() {
        return (
            <section className="se-container">
                <div className="se-slope">
                    <article className="se-content">
                    </article>
                </div>
            </section>
        );
    }
}

Header.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    //task: PropTypes.object.isRequired,
};