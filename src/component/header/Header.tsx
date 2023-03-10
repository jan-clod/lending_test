import React from 'react';
import s from './Header.module.css';
import telega from './telega.png'
import mail from './mail.png'
import git from './github.png'
import logo from './logo.png'

export function Header() {
    return (
        <header className={s.block_header}>
            <img src={logo} alt={'logo'} className={s.header_logo}></img>
            <nav className={s.header_nav}>
                <ul>
                    <li>Услуги</li>
                    <li>Виджеты</li>
                    <li>Интеграции</li>
                    <li>Кейсы</li>
                    <li>Сертификаты</li>
                </ul>
            </nav>
            <p>+7 901 555 55 55</p>
            <ul>
                <li><span><img src={mail} alt='404'></img></span></li>
                <li><a href='https://t.me/jan_cl0d'> <img src={telega} alt='404'></img></a> </li>
                <li><a href="https://github.com/jan-clod/"><img src={git} alt='404'></img></a></li>
            </ul>
        </header>
    );
}
