import React, { useState } from "react";
import type { HeaderProps } from "../../types/Types";
import "./Header.scss";

export const Header: React.FC<HeaderProps> = ({
  userName,
  toggleTheme,
  isDark,
}) => {
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
              <button
                className="header__select"
                onClick={() => setIsSublistOpen(!isSublistOpen)}
              >
                Інтерактив
              </button>
              {isSublistOpen && (
                <ul className="header__sublist">
                  {["Без фільтрації", "Числовий", "Ігровий", "Ознайомчий"].map(
                    (item, index) => (
                      <li key={index}>
                        <button className="header__subbtn">{item}</button>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </li>
            <li className="header__item">
              <a href="#9" className="header__link">
                Наша команда
              </a>
            </li>
            <li className="header__item">
              <a href="#contact" className="header__link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__user-block">
          <button onClick={toggleTheme} className="header__theme-btn">
            {isDark ? "☀️" : "🌙"}
          </button>
          <p className="header__text">
            Вітаємо, <span>{userName}</span>!
          </p>
        </div>
      </div>
    </header>
  );
};
