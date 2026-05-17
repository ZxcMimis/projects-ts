import React, { useState, useEffect } from 'react';
import type { FormSubmitEvent, InputChangeEvent } from '../../types/Types';
import { Input } from '../UI/Input/Input';
import './GuessNumber.scss';

export const GuessNumber: React.FC = () => {
  const [target, setTarget] = useState<number>(0);
  const [guess, setGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('Комп\'ютер загадав число від 1 до 100. Спробуй вгадати!');
  const [isWon, setIsWon] = useState<boolean>(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setMessage('Комп\'ютер загадав нове число. Успіхів!');
    setIsWon(false);
    setGuess('');
  };

  const handleGuessSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    const num = parseInt(guess);

    if (isNaN(num)) {
      setMessage('Будь ласка, введіть число.');
      return;
    }

    if (num === target) {
      setMessage(`Вітаємо! Ти вгадав число ${target}! 🎉`);
      setIsWon(true);
    } else if (num < target) {
      setMessage(`Число комп'ютера БІЛЬШЕ, ніж ${num}`);
    } else {
      setMessage(`Число комп'ютера МЕНШЕ, ніж ${num}`);
    }
    setGuess('');
  };

  const handleInputChange = (e: InputChangeEvent) => setGuess(e.target.value);

  return (
    <section id="5" className="guess-number">
      <h2>Вгадай число</h2>
      <p className={`guess-number__message ${isWon ? 'won' : ''}`}>{message}</p>
      
      <form className="guess-number__form" onSubmit={handleGuessSubmit}>
        <Input
          type="number"
          value={guess}
          onChange={handleInputChange}
          placeholder="Ваш варіант..."
          disabled={isWon}
        />
        {!isWon ? (
          <button type="submit" className="guess-number__btn">Вгадати</button>
        ) : (
          <button type="button" className="guess-number__btn restart" onClick={startNewGame}>
            Почати знову
          </button>
        )}
      </form>
    </section>
  );
};