import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { BigNum } from './components/BigNum/BigNum';
import { Calculator } from './components/Calculator/Calculator';
import { Football } from './components/Football/Football';
import { Footer } from './components/Footer/Footer';



const App: React.FC = () => {
  return (
    <>
  
      <Header />
      
      <main>
        <Hero />
        <div className="container">
           <BigNum />
           <Calculator />
           <Football />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default App;