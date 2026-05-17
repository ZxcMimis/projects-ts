import React, { useState } from 'react';
import type { Choice } from '../../types/Types';
import './Rps.scss';

const CHOICES: { id: NonNullable<Choice>; img: string; alt: string }[] = [
  { id: 'stone', img: '/img/rps/stone@1x.webp', alt: 'Камінь' },
  { id: 'scissors', img: '/img/rps/scissors@1x.webp', alt: 'Ножиці' },
  { id: 'paper', img: '/img/rps/paper@1x.webp', alt: 'Папір' },
];

export const Rps: React.FC = () => {
  const [userChoice, setUserChoice] = useState<Choice>(null);
  const [compChoice, setCompChoice] = useState<Choice>(null);
  const [resultMsg, setResultMsg] = useState<string>('Зробіть свій вибір!');
  const [stats, setStats] = useState({ wins: 0, losses: 0, draws: 0 });

  const play = (user: NonNullable<Choice>) => {
    const comp = CHOICES[Math.floor(Math.random() * CHOICES.length)].id;
    setUserChoice(user);
    setCompChoice(comp);

    if (user === comp) {
      setResultMsg('Нічия! 🤝');
      setStats(s => ({ ...s, draws: s.draws + 1 }));
    } else if (
      (user === 'stone' && comp === 'scissors') ||
      (user === 'scissors' && comp === 'paper') ||
      (user === 'paper' && comp === 'stone')
    ) {
      setResultMsg('Ви перемогли! 🎉');
      setStats(s => ({ ...s, wins: s.wins + 1 }));
    } else {
      setResultMsg('Комп\'ютер переміг! 💻');
      setStats(s => ({ ...s, losses: s.losses + 1 }));
    }
  };

  const resetStats = () => {
    setStats({ wins: 0, losses: 0, draws: 0 });
    setUserChoice(null);
    setCompChoice(null);
    setResultMsg('Зробіть свій вибір!');
  };

  return (
    <section className="rps">
      <h2>Камінь - ножиці - папір</h2>
      <div className="rps__container">
        
        <div className="rps__choices">
          {CHOICES.map((choice) => (
            <button key={choice.id} onClick={() => play(choice.id)} className="rps__btn">
              <img src={choice.img} alt={choice.alt} />
            </button>
          ))}
        </div>

        <div className="rps__stats">
          <p>Виграш: <span>{stats.wins}</span></p>
          <p>Програш: <span>{stats.losses}</span></p>
          <p>Нічия: <span>{stats.draws}</span></p>
        </div>
      </div>

      <div className="rps__result">
        {userChoice && compChoice && (
          <p className="rps__battle">
            Ви: <b>{userChoice}</b> vs Комп'ютер: <b>{compChoice}</b>
          </p>
        )}
        <h3 className="rps__message">{resultMsg}</h3>
        <button className="rps__reset" onClick={resetStats}>
          Очистити статистику
        </button>
      </div>
    </section>
  );
};