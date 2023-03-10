import React from 'react';
import s from './App.module.css';
import { Footer } from './component/footer/Footer';
import { Header } from './component/header/Header';
import { Main } from './component/main/Main';

function App() {
  return (
    <div className={s.block}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
