import React from 'react';
import s from './Main.module.css';

export function Main() {
    return (

        <div className={s.block}>
            <main className={s.block_main}>
                <section className={s.block_main_left}>
                    <h1>
                        Зарабатывайте больше <h1 className={s.gradient_text}> с WELBEX</h1>
                    </h1>
                    <p>
                        Развиваем и контролируес продажи за вас
                    </p>
                </section>
                <section className={s.block_main_right}>
                    <span className={s.span_text}>Вместе с <span className={s.gradient_text}>БЕСПЛАТНОЙ <br /> КОНСУЛЬТАЦИЕЙ</span> мы дарим:</span>
                    <div className={s.main_right_section}>
                        <div><h2>ВИДЖЕТЫ</h2><p>30 готовых решений</p></div>
                        <div><h2>DASHBOARD</h2><p>с покозателями вашего бизнеса</p></div>
                        <div><h2>SKYPE АУДИТ</h2><p>отдела продаж и CRM системы</p></div>
                        <div><h2>35 ДНЕЙ</h2><p>использования CRM</p></div>
                    </div>
                </section>
            </main>
            <div className={s.block_buttonContainer}>
                <button>Получить консультацию</button>
            </div>
        </div>
    );
}
