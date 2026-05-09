import React from 'react';
import "./BigNum.scss";


export const BigNum: React.FC = () => {
  return (
    <section id="8" className="bignum">
      <h2 className="bignum__title">Ведіть три числа</h2>
      <form className="bignum__form">
        <input type="number" className="bignum__input" id="number-first" placeholder="Ведіть число" />
        <input className="bignum__input" type="number" id="number-second" placeholder="Ведіть число" />
        <input className="bignum__input" type="number" id="number-three" placeholder="Ведіть число" />
      </form>
      <p className="bignum__text">
        Найбільше число, яке ви ввели -
        <span className="bignum__span"> (число) </span>
      </p>
      <div className="bignum__line"></div>
    </section>
  );
};