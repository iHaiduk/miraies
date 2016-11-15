/**
 * Created by igor on 12.10.16.
 */

import React from 'react';
import block from '../../../Classes/Bem';

const header = block('header');
const logo = block('logo');
const navigation = block('navigation');

export default () =>
    <header className={header}>
        <span className={logo}>
            <img src="/img/logo.png" alt="Logo Miraries" className={logo('image')}/>
        </span>
        <nav className={navigation}>
            <ul className={navigation('list')}>
                <li className={navigation('element')}>Write</li>
                <li className={navigation('element')}>Read</li>
                <li className={navigation('element')}>Library</li>
            </ul>
        </nav>
        <a href="/login" className={header('login')}>Login</a>
    </header>