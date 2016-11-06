/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';
import DevTools from 'mobx-react-devtools';

const _button = block('button');

export default ({data}, {resetTimer}) => {

    //let _class = {}; _class[stateText] = true;
    return <div>
        <button onClick={resetTimer}>
            Seconds passed: {data.timer}
        </button>
        <DevTools />
    </div>
}