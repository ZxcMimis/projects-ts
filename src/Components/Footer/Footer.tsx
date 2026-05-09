import React from 'react';
import "./Footer.scss";


export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <a id="footer-icon" href="/" className="footer__logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="165" height="70" viewBox="0 0 165 70" fill="none">
             {/* Сюда вставь теги <path> из своего HTML (strokeWidth, strokeLinecap, strokeLinejoin) */}
          </svg>
        </a>
        <ul className="footer__list">
          <li className="footer__item">Тел: <a href="tel:+381234567890" className="footer__link">+38 (123) 456 78 90</a></li>
          <li className="footer__item">E-Mail: <a href="mailto:codingmagic@gmail.com" className="footer__link">codingmagic@gmail.com</a></li>
          <li className="footer__item">Facebook: <a target="_blank" rel="noreferrer" href="https://www.facebook.com/?locale=uk_UA" className="footer__link">CodingMagic</a></li>
          <li className="footer__item">Twitter: <a target="_blank" rel="noreferrer" href="https://x.com/?lang=ru-" className="footer__link">CodingMagic</a></li>
          <li className="footer__item">Instagram: <a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className="footer__link">CodingMagic</a></li>
        </ul>
        <form id="subscribe-form" className="footer__form">
          <div className="footer__wrapper">
            <label className="footer__label">
              <input type="email" required placeholder="Ваша ел. адреса..." id="footer-input" className="footer__input" />
            </label>
            <button className="footer__btn">Підписатись</button>
          </div>
          <p className="footer__info">*Підписавшись, Ви зможете ортимувати інформацію про новинки на сайті</p>
        </form>
      </div>
    </footer>
  );
};