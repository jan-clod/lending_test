import React from 'react';
import s from './App.module.css';
import { Footer } from './component/footer/Footer';
import { Header } from './component/header/Header';
import { Main } from './component/main/Main';

function App() {
  return (
    <div className={s.block}>
      <div className={s.wrap}>
        <div className={s.button + ' ' + s.one}></div>
        <div className={s.button + ' ' + s.two}></div>
        <div className={s.button + ' ' + s.three}></div>
        <div className={s.button + ' ' + s.four}></div>
      </div>
      <div  className={s.block_component}>
        <Header />
        <Main />
        <Footer />
      </div>

    </div>
  );
}

export default App;
