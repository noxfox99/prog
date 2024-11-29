import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Взлом и восстановление доступа VKontakte, Facebook, Instagram, Tinder, Whatsap, Telegram, Viber, GMAIL</h1>
      <p>90% успеха, срок 24-48ч</p>
      <p><b>Всего 30$ предоплата!</b></p>
      <p>Купите инструкцию для самостоятельной работы</p>

      <div className="gpt3__header-content__input">
        <button type="button">Начать</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>более 1,000 успешных восстановлений доступов!</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
