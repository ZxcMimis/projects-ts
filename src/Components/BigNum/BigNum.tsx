import React, { useState, useEffect } from 'react';
import type { FormSubmitEvent, InputChangeEvent } from '../../types/Types';
import { Input } from '../UI/Input/Input';
import './BigNum.scss';

export const BigNum: React.FC = () => {
  const [nums, setNums] = useState<string[]>(['', '', '']);
  const [max, setMax] = useState<number | string>('(число)');

  useEffect(() => {
    const validNumbers = nums.map(n => parseFloat(n)).filter(n => !isNaN(n));
    if (validNumbers.length > 0) {
      setMax(Math.max(...validNumbers));
    } else {
      setMax('(число)');
    }
  }, [nums]);

  const handleFormSubmit = (e: FormSubmitEvent) => e.preventDefault();

  const handleInputChange = (index: number, e: InputChangeEvent) => {
    const newNums = [...nums];
    newNums[index] = e.target.value;
    setNums(newNums);
  };

  return (
    <section id="8" className="bignum">
      <h2 className="bignum__title">Введіть три числа</h2>
      <form className="bignum__form" onSubmit={handleFormSubmit}>
        {nums.map((num, index) => (
          <Input
            key={index}
            type="number"
            value={num}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Введіть число"
          />
        ))}
      </form>
      <p className="bignum__text">
        Найбільше число, яке ви ввели - 
        <span className="bignum__span"> {max} </span>
      </p>
      <div className="bignum__line"></div>
    </section>
  );
};