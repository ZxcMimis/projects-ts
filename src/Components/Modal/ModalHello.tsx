import React from 'react';

export const HelloModal: React.FC = () => {
  return (
    <div data-hello="backdrop" className="backdrop">
      <div className="hello">
        <button data-hello="close" className="hello__close">
          <svg className="hello__dagger" width="15" height="15">
            <use href="./svg/icons.svg#close-modal" />
          </svg>
        </button>
        <h2 className="hello__title">Привіт!</h2>
        <p className="hello__desc">
          Ви потрапили на сайт інтерактивних ігор та завдань Надіємось, що вам сподобається і ви отримаєте позитивні емоції! Бажаємо Вам гарно провести час!
        </p>
        <form id="hello-form" className="hello__form">
          <label className="hello__label">
            Введіть своє ім’я:
            <input required type="text" id="hello-input" placeholder="Ваше ім’я..." className="hello__input" />
          </label>
          <button type="submit" id="hello-submit" className="hello__btn">Зберегти</button>
        </form>
        <picture>
          <source srcSet="./img/1x/modal/sword@1x.webp 1x, ./img/2x/modal/sword@2x.webp 2x" />
          <img className="hello__icon hello__icon--sword" width="30" height="30" src="./img/1x/modal/sword@1x.webp" alt="Меч" />
        </picture>
      </div>
    </div>
  );
};

export const MistakeModal: React.FC = () => {
  return (
    <div data-error="backdrop" className="backdrop is-hidden">
      <div className="mistake">
        <button data-error="close" className="mistake__close">
          <svg className="mistake__dagger" width="15" height="15">
            <use href="./svg/icons.svg#close-modal" />
          </svg>
        </button>
        <h2 className="mistake__title">На данну пошту вже оформленна підписка. Будь ласка, введіть іншу.</h2>
        {/* Иконки */}
        <picture>
          <source srcSet="./img/1x/modal/sword@1x.webp 1x, ./img/2x/modal/sword@2x.webp 2x" />
          <img className="mistake__icon mistake__icon--sword" width="30" height="30" src="./img/1x/modal/sword@1x.webp" alt="Меч" />
        </picture>
        {/* Добавь остальные иконки из mistake.html */}
      </div>
    </div>
  );
};