/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';

const _button = block('button');

export default ({text}, {stateText}, {handler}) => {

    //let _class = {}; _class[stateText] = true;
    return <button onClick={handler}>
        {stateText || text}
    </button>
}