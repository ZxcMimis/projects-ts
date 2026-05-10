import React, { useState } from 'react';
import './Header.scss';

interface HeaderProps {
  userName: string;
  toggleTheme: () => void;
  isDark: boolean;
}

export const Header: React.FC<HeaderProps> = ({ userName, toggleTheme, isDark }) => {
  const [isSublistOpen, setIsSublistOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__container">
        <a href="/" className="header__logo">
          <h2>CodingMagic</h2>
        </a>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <button className="header__select" onClick={() => setIsSublistOpen(!isSublistOpen)}>
                Інтерактив
              </button>
              {isSublistOpen && (
                <ul className="header__sublist">
                  <li><button>Без фільтрації</button></li>
                  <li><button>Числовий</button></li>
                  <li><button>Ігровий</button></li>
                </ul>
              )}
            </li>
            <li className="header__item"><a href="#9">Наша команда</a></li>
            <li className="header__item"><a href="#contact">Контакти</a></li>
          </ul>
        </nav>
        <div className="header__user-block">
          <button onClick={toggleTheme} className="header__theme-btn">
            {isDark ? '☀️' : '🌙'}
          </button>
          <p className="header__text">Вітаємо, <span>{userName}</span>!</p>
        </div>
      </div>
    </header>
  );
};