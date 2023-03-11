import React from 'react';
import s from './Footer.module.css';
import telega from './telega.png'
import mail from './mail.png'
import git from './github.png'

export function Footer() {
    return (
        <div className={s.block}>
            <footer className={s.block_footer}>
                <section className={s.footer_section}>
                    <p className={s.firstP}>О КОМПАНИИ</p>
                    <span>Партнёрская программа</span><br />
                    <span>Вакансии</span><br />
                </section>
                <section className={s.footer_section + ' ' + s.section2}>
                    <p className={s.firstP}>Меню</p>
                    <div className={s.footer_section + ' ' + s.section2}>
                        <span>Расчет стоимости</span><br />
                        <span>Услуги</span><br />
                        <span>Виджеты</span><br />
                        <span>Интеграции</span><br />
                        <span>Наши клиенты</span><br />
                    </div>

                </section>
                <section className={s.footer_section + ' ' + s.section3}>
                    <p className={s.firstP + ' ' + s.non}> _ </p>
                    <span>Кейсы</span><br />
                    <span>Благодарственные письма</span><br />
                    <span>Сертификаты</span><br />
                    <span>Блог на Youtube</span><br />
                    <span>Вопрос / Ответ</span><br />

                </section>
                <section className={s.footer_section + ' ' + s.section4}>
                    <p className={s.firstP}>КОНТАКТЫ</p>
                    <span>+7 901 555 55 55</span><br />
                    <span>
                        <ul>
                            <li><span><img src={mail} alt='404'></img></span></li>
                            <li><a href='https://t.me/jan_cl0d'> <img src={telega} alt='404'></img></a> </li>
                            <li><a href="https://github.com/jan-clod/"><img src={git} alt='404'></img></a></li>
                        </ul>
                    </span>
                    <span >Мoсква, Путевой проезд 3с1б к 902</span><br />
                </section>
            </footer>
            <div className={s.block_end}>
                <span className={s.end_text}>WELBEX 2022. Все права защищины</span><br />
                <span className={s.end_text}><a href={'asd'}>Политика конфиденциальности</a></span>
            </div>
        </div>
    );
}