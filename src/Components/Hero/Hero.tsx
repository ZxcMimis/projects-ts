import React from 'react';
import "./Hero.scss";


export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">Популярні інетрактивні ігри</h1>
      <div className="hero__line"></div>
    </section>
  );
};