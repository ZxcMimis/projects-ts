import React, { useState } from 'react';
import './ModalHello.scss';

interface HelloModalProps {
  onSave: (name: string) => void;
  onClose: () => void;
}

export const HelloModal: React.FC<HelloModalProps> = ({ onSave, onClose }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave(name);
      onClose();
    }
  };

  return (
    <div className="backdrop">
      <div className="hello">
        <button onClick={onClose} className="hello__close">
          <svg className="hello__dagger" width="15" height="15">
            <use href="/svg/icons.svg#close-modal"></use>
          </svg>
        </button>

        <h2 className="hello__title">Привіт!</h2>
        <p className="hello__desc">
          Ви потрапили на сайт інтерактивних ігор та завдань Надіємось, що вам
          сподобається і ви отримаєте позитивні емоції! Бажаємо Вам гарно провести
          час!
        </p>

        <form onSubmit={handleSubmit} className="hello__form">
          <label className="hello__label">
            Введіть своє ім’я:
            <input
              required
              type="text"
              placeholder="Ваше ім’я..."
              className="hello__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button type="submit" className="hello__btn">
            Зберегти
          </button>
        </form>

        <img
          className="hello__icon hello__icon--sword"
          width="30"
          height="30"
          src="/img/modal/sword@1x.webp"
          alt="Меч"
        />

        <img
          className="hello__icon hello__icon--puzzel"
          width="30"
          height="30"
          src="/img/modal/puzzle@1x.webp"
          alt="Пазл"
        />

        <img
          className="hello__icon hello__icon--game"
          width="30"
          height="30"
          src="/img/modal/tic-tac-toe@1x.webp"
          alt="Хрестики-Нолики"
        />

        <img
          className="hello__icon hello__icon--layout"
          width="30"
          height="30"
          src="/img/modal/game-development@1x.webp"
          alt="Розробка"
        />
      </div>
    </div>
  );
};