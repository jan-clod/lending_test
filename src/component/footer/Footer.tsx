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
                    <span><a href='1'>Партнёрская программа</a></span><br />
                    <span><a href='2'>Вакансии</a></span><br />
                </section>

                <div className={s.section_menu}>
                    <p className={s.firstP}>Меню</p>
                    <div className={s.section_menu_container}>
                        <section className={s.footer_section }>
                            <span><a href='1'>Кейсы</a></span><br />
                            <span><a href='2'>Благодарственные письма</a></span><br />
                            <span><a href='3'>Сертификаты</a></span><br />
                            <span><a href='4'>Блог на Youtube</a></span><br />
                            <span><a href='5'>Вопрос / Ответ</a></span><br />
                        </section>

                        <section >
                            <div className={s.footer_section }>
                                <span><a href='1'>Расчет стоимости</a></span><br />
                                <span><a href='2'>Услуги</a></span><br />
                                <span><a href='3'>Виджеты</a></span><br />
                                <span><a href='4'>Интеграции</a></span><br />
                                <span><a href='5'>Наши клиенты</a></span><br />
                            </div>
                        </section>
                    </div>

                </div>

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