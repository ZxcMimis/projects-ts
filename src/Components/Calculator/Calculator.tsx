import React, { useState } from 'react';
import type { FormSubmitEvent, InputChangeEvent } from '../../types/Types';
import { Input } from '../UI/Input/Input';
import './Calculator.scss';

const OPERATORS = ['+', '-', '*', '/'];

export const Calculator: React.FC = () => {
  const [val1, setVal1] = useState<string>('');
  const [val2, setVal2] = useState<string>('');
  const [operator, setOperator] = useState<string>('+');
  const [result, setResult] = useState<number | string>('Результат');

  const handleCalculate = (e: FormSubmitEvent) => {
    e.preventDefault();
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Введіть числа!');
      return;
    }

    switch (operator) {
      case '+': setResult(n1 + n2); break;
      case '-': setResult(n1 - n2); break;
      case '*': setResult(n1 * n2); break;
      case '/': 
        setResult(n2 !== 0 ? parseFloat((n1 / n2).toFixed(4)) : 'Ділення на 0!'); 
        break;
      default: setResult('Помилка');
    }
  };

  const handleVal1Change = (e: InputChangeEvent) => setVal1(e.target.value);
  const handleVal2Change = (e: InputChangeEvent) => setVal2(e.target.value);

  return (
    <section id="4" className="calculator">
      <h2>Калькулятор</h2>
      <form className="calculator__form" onSubmit={handleCalculate}>
        <Input 
          type="number" 
          value={val1} 
          onChange={handleVal1Change} 
          placeholder="Число 1" 
          style={{ width: '130px' }}
        />
        <div className="calculator__operators">
          {OPERATORS.map((op) => (
            <button 
              key={op} 
              type="button"
              className={`calculator__op-btn ${operator === op ? 'active' : ''}`}
              onClick={() => setOperator(op)}
            >
              {op}
            </button>
          ))}
        </div>
        <Input 
          type="number" 
          value={val2} 
          onChange={handleVal2Change} 
          placeholder="Число 2" 
          style={{ width: '130px' }}
        />
        <button type="submit" className="calculator__eq">=</button>
      </form>
      <div className="calculator__result">{result}</div>
    </section>
  );
};