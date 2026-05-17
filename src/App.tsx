import React, { useState, useEffect, Suspense } from "react";
import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Footer } from "./Components/Footer/Footer";
import { HelloModal } from "./Components/Modal/ModalHello";
import "./styles/reset.scss";


import {
  Calculator,
  BigNum,
  Football,
  Rps,
  GuessNumber,
  TimeCalculator
} from "./lazy";

const App: React.FC = () => {
  const [user, setUser] = useState("User");
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    document.body.className = dark ? "dark-theme" : "light-theme";
  }, [dark]);

  return (
    <div className="app-wrapper">
      {showModal && (
        <HelloModal onSave={setUser} onClose={() => setShowModal(false)} />
      )}
      
      <Header
        userName={user}
        isDark={dark}
        toggleTheme={() => setDark(!dark)}
      />
      
      <main className="container">
        <Hero />
        
        <Suspense fallback={
          <div style={{ textAlign: 'center', padding: '50px', color: dark ? '#a29bfe' : '#6c5ce7', fontSize: '20px', fontWeight: 'bold' }}>
            Загрузка інтерактиву...
          </div>
        }>
          <GuessNumber />
          <TimeCalculator />
          <Rps />
          <Calculator />
          <BigNum />
          <Football userName={user} />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;