import React, { useState, useEffect } from 'react';
import './BigNum.scss';

export const BigNum: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [num3, setNum3] = useState<string>('');
  
  const [max, setMax] = useState<number | string>('(число)');

  useEffect(() => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    const validNumbers = [n1, n2, n3].filter(n => !isNaN(n));

    if (validNumbers.length > 0) {
      setMax(Math.max(...validNumbers));
    } else {
      setMax('(число)');
    }
  }, [num1, num2, num3]);

  return (
    <section id="8" className="bignum">
      <h2 className="bignum__title">Введіть три числа</h2>
      <form className="bignum__form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          className="bignum__input"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Введіть число"
        />
        <input
          type="number"
          className="bignum__input"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Введіть число"
        />
        <input
          type="number"
          className="bignum__input"
          value={num3}
          onChange={(e) => setNum3(e.target.value)}
          placeholder="Введіть число"
        />
      </form>

      <p className="bignum__text">
        Найбільше число, яке ви ввели - 
        <span className="bignum__span"> {max} </span>
      </p>
      <div className="bignum__line"></div>
    </section>
  );
};