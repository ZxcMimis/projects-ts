import React from 'react';
import "./Football.scss";


export const Football: React.FC = () => {
  return (
    <section id="7" className="football">
      <h2 className="football__title">Футбол</h2>
      <div id="football-field" className="football__field">
        <div data-football="backdrop" className="football__backdrop">
          <button data-football="play" className="football__play">PLay now</button>
        </div>
        <div data-football="end" className="football__backdrop is-hidden">
          <p className="football__play">Ти забив <span id="football-output"></span> голів</p>
          <button data-football="restart" className="football__play">Restart</button>
        </div>
        <p id="football-count" className="football__count">0</p>
        <p id="football-time" className="football__time">0:30</p>
        <picture>
          <source srcSet="./img/1x/football/ball@1x.webp 1x, ./img/2x/football/ball@2x.webp 2x" />
          <img id="football-ball" className="football__ball" width="50" height="50" src="./img/1x/football/ball@1x.webp" alt="М'ячик" />
        </picture>
        <picture>
          <source srcSet="./img/1x/football/football-gates@1x.webp 1x, ./img/2x/football/football-gates@2x.webp 2x" />
          <img id="football-gates" className="football__img" width="50" height="50" src="./img/1x/football/football-gates@1x.webp" alt="Ворота" />
        </picture>
      </div>
      <button id="table-btn" className="football__btn">Переглянути результати</button>
      
      <div data-football="table" className="backdrop is-hidden">
        <div className="football__modal">
          <button id="table-close-btn" className="football__close">
            <svg className="football__dagger" width="15" height="15">
              <use href="./svg/icons.svg#close-modal" />
            </svg>
          </button>
          <h2 className="football__subtitle">Таблиця результатів</h2>
          <div id="football-table-list" className="football__table">
            <p className="football__text">Ще не має результатів</p>
          </div>
        </div>
      </div>
      
      <p className="football__info">Почніть гру та забийте як найбільше голів</p>
      <div className="football__line"></div>
    </section>
  );
};