/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import TextTruncate from 'react-text-truncate';
import DevTools from 'mobx-react-devtools';

export default ({text}) => {

    return <div>
        <TextTruncate
            line={1}
            truncateText="…"
            text={text}
            textTruncateChild={<a href="#">Read on</a>}
        />
        <DevTools />
    </div>
}