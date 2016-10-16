/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';

const header = block('sectionHeader');

export default () =>
    <section className={header}>
        <h1 className={header('write')}>Live and Write.</h1>
        <h1 className={header('read')}>Read and Dreams.</h1>
    </section>