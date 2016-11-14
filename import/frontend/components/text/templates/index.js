/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import TextTruncate from 'react-text-truncate';

export default (props) => {

    return <div ref="scope">Test</div>;

    // if(process.env.NODE_ENV == 'development') {
    //     const DevTools = require('mobx-react-devtools').default;
    //     console.log(props)
    //     return <div>
    //         <TextTruncate
    //             {...props}
    //             line={1}
    //             truncateText="…"
    //             tagType="h1"
    //         />
    //         <DevTools />
    //     </div>
    // } else {
    //     return <TextTruncate
    //         {...props}
    //         line={1}
    //         truncateText="…"
    //         tagType="h1"
    //     />
    // }
}