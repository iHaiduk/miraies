/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';
import DevTools from 'mobx-react-devtools';

export default ({timer}, {resetTimer}) => {

    return <div>
        <button onClick={resetTimer} ref="button">
            Seconds passed: {timer}
        </button>
        <DevTools />
    </div>
}