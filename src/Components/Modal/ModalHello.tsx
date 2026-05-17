import React, { useState } from 'react';
import type { HelloModalProps, FormSubmitEvent, InputChangeEvent } from '../../types/Types';
import { Input } from '../UI/Input/Input';
import './ModalHello.scss';

export const HelloModal: React.FC<HelloModalProps> = ({ onSave, onClose }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSave(name);
      onClose();
    }
  };

  const handleNameChange = (e: InputChangeEvent) => setName(e.target.value);

  return (
    <div className="backdrop">
      <div className="hello">
        <button onClick={onClose} className="hello__close">X</button>
        <h2 className="hello__title">Привіт!</h2>
        <p className="hello__desc">
          Ви потрапили на сайт інтерактивних ігор та завдань. Надіємось, що вам
          сподобається і ви отримаєте позитивні емоції! Бажаємо Вам гарно провести час!
        </p>
        <form onSubmit={handleSubmit} className="hello__form">
          <label className="hello__label">
            Введіть своє ім’я:
            <Input
              required
              type="text"
              placeholder="Ваше ім’я..."
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <button type="submit" className="hello__btn">Зберегти</button>
        </form>
      </div>
    </div>
  );
};