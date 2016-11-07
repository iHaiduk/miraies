/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';

const _icon = block('icon');

export default ({name, width, height, element, viewBox}) =>
    <i className={_icon({element})}>
        <svg viewBox={viewBox} width={width} height={height}>
            <use xlinkHref={'#' + name}></use>
        </svg>
    </i>