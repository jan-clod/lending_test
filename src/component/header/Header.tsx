import React from 'react';
import s from './Header.module.css';
import telega from './telega.png'
import mail from './mail.png'
import git from './github.png'
import logo from './logo.png'

export function Header() {
    return (
        <header className={s.block_header}>
           <a href="a"> <img  src={logo} alt={'logo'} className={s.header_logo}></img></a>
            <nav className={s.header_nav}>
                <ul>
                    <li><a href='1'>Услуги</a></li>
                    <li><a href='2'>Виджеты</a></li>
                    <li><a href='3'>Интеграции</a></li>
                    <li><a href='4'>Кейсы</a></li>
                    <li className={s.li_non}><a href='5'>Сертификаты</a></li>
                </ul>
            </nav>
            <p>+79015555555</p>
            <ul >
                <li className={s.li_non}><a href='https://t.me/jan_cl0d'> <span><img src={mail} alt='404'></img></span></a></li>
                <li className={s.li_non}><a href='https://t.me/jan_cl0d'> <img src={telega} alt='404'></img></a> </li>
                <li className={s.li_non}><a href="https://github.com/jan-clod/"><img src={git} alt='404'></img></a></li>
            </ul>
        </header>
    );
}
