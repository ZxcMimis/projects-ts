import React, { useState, useEffect } from 'react';
import type { FootballProps, GameResult } from '../../types/Types';
import './Football.scss';

export const Football: React.FC<FootballProps> = ({ userName }) => {
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [status, setStatus] = useState<'idle' | 'playing' | 'ended'>('idle');
  
  const [results, setResults] = useState<GameResult[]>([]);
  const [isTableOpen, setIsTableOpen] = useState<boolean>(false);

  useEffect(() => {
    let timerId: number;
    if (status === 'playing' && timeLeft > 0) {
      timerId = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && status === 'playing') {
      setStatus('ended');
      setResults(prev => [...prev, { name: userName, score }]);
    }
    return () => clearInterval(timerId);
  }, [status, timeLeft, score, userName]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setStatus('playing');
  };

  const handleBallClick = () => {
    if (status === 'playing') {
      setScore(prev => prev + 1);
    }
  };

  return (
    <section id="7" className="football">
      <h2>Футбол</h2>
      
      <div className="football__field">
        <div className="football__stats">
          <span>Голи: {score}</span>
          <span>0:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
        </div>
        
        {status !== 'playing' && (
          <div className="football__overlay">
            {status === 'ended' && (
              <div className="football__result-text">
                Ти забив <span>{score}</span> голів!
              </div>
            )}
            <button className="football__btn-play" onClick={startGame}>
              {status === 'idle' ? 'Play Now' : 'Restart'}
            </button>
          </div>
        )}

        <img 
          src="/img/football/ball@1x.webp" 
          className="football__ball" 
          style={{ top: status === 'playing' ? '60%' : '80%' }}
          onClick={handleBallClick}
          alt="М'яч" 
        />
        <img 
          src="/img/football/football-gates@1x.webp" 
          className="football__gates" 
          alt="Ворота" 
        />
      </div>

      <button className="football__btn-table" onClick={() => setIsTableOpen(true)}>
        Переглянути результати
      </button>

      {isTableOpen && (
        <div className="backdrop">
          <div className="football__modal">
            <button className="close-btn" onClick={() => setIsTableOpen(false)}>X</button>
            <h2>Таблиця результатів</h2>
            
            {results.length === 0 ? (
              <p>Ще немає результатів</p>
            ) : (
              <div className="football__table-list">
                {results.map((res, index) => (
                  <div key={index} className="football__row">
                    <span>{res.name}</span>
                    <span>{res.score}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};