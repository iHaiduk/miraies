/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';
import {Elements} from '../../../Classes/Element';

const header = block('sectionHeader');

export default ({elements}) => {

    const Element = $C.Element;

    return <section className={header}>
        <Element type="component" name="text" options= {{
            text: 'Live and Write.',
            tagType: 'h1',
            containerClassName: header('write')
        }}/>
        <Element type="component" name="text" options= {{
            text: 'Read and Dream.',
            tagType: 'h1',
            containerClassName: header('read')
        }}/>
        <Elements elements={elements}/>
    </section>
}