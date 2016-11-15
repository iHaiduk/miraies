/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';
import {Elements} from '../../../Classes/Element';

const _default = block('default');

export default ({elements}) =>
    <section className={_default}>
        <Elements elements={elements} />
    </section>