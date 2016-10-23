/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';

const header = block('sectionHeader');

export default ({Icon}) =>
    <section className={header}>
        <h1 className={header('write')}>Live and Write.</h1>
        <h1 className={header('read')}>Read and Dream.</h1>
        <Icon link="/img/svg/arrow-down.svg" />
        <Icon link="/img/svg/arrow-down.svg" />
        <Icon link="/img/svg/arrow-down.svg" />
    </section>