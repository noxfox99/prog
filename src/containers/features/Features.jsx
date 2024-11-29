import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Социальных сети',
    text: 'Предоставление данных для авторизации, "невидимый" вход',
  },
  {
    title: 'Мессенджеры',
    text: 'Просмотр чатов и сообщений',
  },
  {
    title: 'Сайты знакомств',
    text: 'Доступа к анкете любого человека',
  },
  {
    title: 'Электронная почта',
    text: 'Просмотр входящих и исходящих писем в любом почтовом ящике.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Сделай сам - Пошаговая инструкция для самостоятельной работы.</h1>
      <p>50$ Стоимость инструкции</p>
      <div className="gpt3__header-content__input">
        <button type="button">Купить</button>
      </div>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} vis="notvskn" text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
