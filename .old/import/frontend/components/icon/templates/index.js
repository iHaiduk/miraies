/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';
import DevTools from 'mobx-react-devtools';

const _icon = block('icon');

export default ({name, width, height, className, viewBox}) => {

    return <i className={_icon({element: className.element})}>
        <svg viewBox={viewBox} width={width} height={height}>
            <use xlinkHref={'#' + name}></use>
        </svg>
        <DevTools />
    </i>
}