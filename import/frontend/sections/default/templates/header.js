/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';
import {Elements} from '../../../Classes/Element';

const header = block('sectionHeader');

export default ({elements}) =>
    <section className={header}>
        <h1 className={header('write')}>Live and Write.</h1>
        <h1 className={header('read')}>Read and Dream.</h1>
        <div>
            <Elements elements={elements} />
        </div>
    </section>