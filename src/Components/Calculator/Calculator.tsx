import React from 'react';
import "./Calculator.scss";


export const Calculator: React.FC = () => {
  return (
    <section id="4" className="calculator">
      <h2 className="calculator__title">Калькулятор</h2>
      <form className="calculator__form">
        <label className="calculator__label">
          <input type="number" className="calculator__input" id="firstNum" placeholder="Введіть число" />
        </label>
        <ul id="calculatorList" className="calculator__list">
          <li className="calculator__item"><button type="button" className="calculator__button" id="add">+</button></li>
          <li className="calculator__item"><button type="button" id="multiply" className="calculator__button">*</button></li>
          <li className="calculator__item"><button type="button" className="calculator__button" id="subtract">-</button></li>
          <li className="calculator__item"><button type="button" className="calculator__button" id="divide">/</button></li>
        </ul>
        <label className="calculator__label">
          <input type="number" className="calculator__input" id="secondNum" placeholder="Введіть число" />
        </label>
        <button type="button" className="calculator__button" id="equals">=</button>
        <p id="result1" className="calculator__result">Результат</p>
      </form>
      <div className="calculator__line"></div>
    </section>
  );
};