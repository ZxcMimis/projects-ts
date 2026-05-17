import React, { useState } from 'react';
import type { InputChangeEvent } from '../../types/Types';
import { Input } from '../UI/Input/Input';
import './TimeCalculator.scss';

export const TimeCalculator: React.FC = () => {
  const [minutesInput, setMinutesInput] = useState<string>('');
  const [formattedTime, setFormattedTime] = useState<string>('0 дн. 00:00:00');

  const handleTimeChange = (e: InputChangeEvent) => {
    const val = e.target.value;
    setMinutesInput(val);

    const totalMinutes = parseInt(val);
    
    if (isNaN(totalMinutes) || totalMinutes < 0) {
      setFormattedTime('0 дн. 00:00:00');
      return;
    }

    const days = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
    const mins = totalMinutes % 60;

    const pad = (num: number) => num.toString().padStart(2, '0');

    setFormattedTime(`${days} дн. ${pad(hours)}:${pad(mins)}:00`);
  };

  return (
    <section className="time-calculator">
      <h2>Калькулятор часу</h2>
      <div className="time-calculator__content">
        <Input
          type="number"
          value={minutesInput}
          onChange={handleTimeChange}
          placeholder="Введіть кількість хвилин"
        />
        <div className="time-calculator__result">
          {formattedTime}
        </div>
      </div>
    </section>
  );
};