import React, { useState } from 'react';
import type { InputChangeEvent, FormSubmitEvent } from '../../types/Types';
import { Input } from '../UI/Input/Input';
import './YearChecker.scss';

export const YearChecker: React.FC = () => {
  const [year, setYear] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleInputChange = (e: InputChangeEvent) => setYear(e.target.value);

  const checkYear = (e: FormSubmitEvent) => {
    e.preventDefault();
    const y = parseInt(year);
    
    if (isNaN(y)) {
      setResult('Будь ласка, введіть рік');
      return;
    }

    const isLeap = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    
    if (isLeap) {
      setResult('Ви народилися у високосний рік! 📅');
    } else {
      setResult('Ви народилися у звичайний рік. 🗓️');
    }
  };

  return (
    <section id="6" className="year-checker">
      <h2>Перевір в який рік ти народився</h2>
      <form onSubmit={checkYear} className="year-checker__form">
        <Input
          type="number"
          value={year}
          onChange={handleInputChange}
          placeholder="Введіть рік..."
        />
        <button type="submit" className="year-checker__btn">Дізнатися</button>
      </form>
      <p className="year-checker__result">{result}</p>
    </section>
  );
};