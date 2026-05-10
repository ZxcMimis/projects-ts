import React, { useState } from 'react';
import './Calculator.scss';

export const Calculator: React.FC = () => {
  const [v1, setV1] = useState('');
  const [v2, setV2] = useState('');
  const [res, setRes] = useState<any>('?');

  const calc = (op: string) => {
    const n1 = Number(v1), n2 = Number(v2);
    if (op === '+') setRes(n1 + n2);
    if (op === '-') setRes(n1 - n2);
    if (op === '*') setRes(n1 * n2);
    if (op === '/') setRes(n2 !== 0 ? n1 / n2 : 'Error');
  };

  return (
    <section className="calculator">
      <h2>Калькулятор</h2>
      <div className="calculator__row">
        <input type="number" value={v1} onChange={e => setV1(e.target.value)} placeholder="0" />
        <div className="calculator__ops">
          {['+', '-', '*', '/'].map(op => (
            <button key={op} onClick={() => calc(op)}>{op}</button>
          ))}
        </div>
        <input type="number" value={v2} onChange={e => setV2(e.target.value)} placeholder="0" />
        <span className="calculator__eq">=</span>
        <div className="calculator__result">{res}</div>
      </div>
    </section>
  );
};