import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Выберите приложение для заказа" vis="notvskn" text="Если Вам необходим доступ к чужому аккаунту в любой социальной сети, мессенджере или на сайте знакомств - просто заполните поля в форме справа!" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Работа по предоплате, полная оплата после достоверных подтверждающих материалов</h1><br /><br />
    </div>
    <div className="gpt3__header-content__input"><br /><p><button type="button">Выбрать приложение и Заказать </button></p></div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Instagram" vis="notvs" text="" img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" />
      <Feature title="Vkontakte" vis="notvs" text="" img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png" />
      <Feature title="Facebook" vis="notvs" text="" img="https://www.stephenvilletx.gov/sites/default/files/imageattachments/hr/page/23820/facebook_icon_130940.png" />
      <Feature title="Telegram" vis="notvs" text="" img="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png" />
      <Feature title="Whatsapp" vis="notvs" img="https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png" text="" />
      <Feature title="Viber" vis="notvs" text="" img="https://cdn.iconscout.com/icon/free/png-256/viber-2-226548.png" />
      <Feature title="Tinder" vis="notvs" text="" img="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-White-Dark-Background-Logo.wine.svg" />
      <Feature title="GMAIL/Mail.ru" vis="notvs" text="" img="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" />
    </div>
  </div>
);

export default WhatGPT3;
