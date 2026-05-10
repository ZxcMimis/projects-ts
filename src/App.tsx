import React, { useState, useEffect } from 'react';
import { Header } from './Components/Header/Header';
import { Hero } from './Components/Hero/Hero';
import { Calculator } from './Components/Calculator/Calculator';
import { BigNum } from './Components/BigNum/BigNum';
import { Football } from './Components/Football/Football';
import { Footer } from './Components/Footer/Footer';
import { HelloModal } from './Components/Modal/ModalHello';
import './styles/reset.scss';

const App: React.FC = () => {
  const [user, setUser] = useState('User');
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    document.body.className = dark ? 'dark-theme' : 'light-theme';
  }, [dark]);

  return (
    <div className="app-wrapper">
      {showModal && <HelloModal onSave={setUser} onClose={() => setShowModal(false)} />}
      <Header userName={user} isDark={dark} toggleTheme={() => setDark(!dark)} />
      <main className="container">
        <Hero />
        <Calculator />
        <BigNum />
        <Football userName={user} />
      </main>
      <Footer />
    </div>
  );
};

export default App;