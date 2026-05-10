import React, { useState, useEffect } from 'react';
import './Football.scss';

export const Football: React.FC<{ userName: string }> = ({ userName }) => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [status, setStatus] = useState<'idle' | 'playing' | 'ended'>('idle');

  useEffect(() => {
    if (status === 'playing' && timeLeft > 0) {
      const t = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(t);
    } else if (timeLeft === 0) setStatus('ended');
  }, [status, timeLeft]);

  return (
    <section className="football">
      <h2>Футбол</h2>
      <div className="football__field">
        <div className="football__ui">
          <span>Голи: {score}</span>
          <span>0:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</span>
        </div>
        
        {status !== 'playing' && (
          <div className="football__overlay">
            {status === 'ended' && <p>Ти забив {score} голів!</p>}
            <button onClick={() => { setScore(0); setTimeLeft(30); setStatus('playing'); }}>
              {status === 'idle' ? 'Play Now' : 'Restart'}
            </button>
          </div>
        )}

        <img 
          src="/img/football/ball@1x.webp" 
          className="football__ball" 
          style={{ top: status === 'playing' ? '70%' : '80%' }}
          onClick={() => status === 'playing' && setScore(s => s + 1)}
          alt="М'яч" 
        />
        <img src="/img/football/football-gates@1x.webp" className="football__gates" alt="Ворота" />
      </div>
    </section>
  );
};