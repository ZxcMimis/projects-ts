import React, { useState } from 'react';
import './Calculator.scss';

export const Calculator: React.FC = () => {
  const [val1, setVal1] = useState<string>('');
  const [val2, setVal2] = useState<string>('');
  const [operator, setOperator] = useState<string>('+');
  const [result, setResult] = useState<number | string>('Результат');

  const handleCalculate = (e: React.FormEvent) => {
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

  return (
    <section id="4" className="calculator">
      <h2>Калькулятор</h2>
      <form className="calculator__row" onSubmit={handleCalculate}>
        <input 
          type="number" 
          value={val1} 
          onChange={e => setVal1(e.target.value)} 
          placeholder="Число 1" 
        />
        
        <div className="calculator__ops">
          {['+', '-', '*', '/'].map(op => (
            <button 
              key={op} 
              type="button"
              style={{ opacity: operator === op ? 1 : 0.5 }}
              onClick={() => setOperator(op)}
            >
              {op}
            </button>
          ))}
        </div>

        <input 
          type="number" 
          value={val2} 
          onChange={e => setVal2(e.target.value)} 
          placeholder="Число 2" 
        />
        
        <button type="submit" className="calculator__eq">=</button>
        <div className="calculator__result">{result}</div>
      </form>
    </section>
  );
};