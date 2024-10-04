import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider, FormattedMessage } from 'react-intl';
import messages_en from '../../../locales/en.json';
import messages_de from '../../../locales/de.json';
import message_ru from '../../../locales/ru.json';
import message_po from '../../../locales/po.json';
import message_ptbr from '../../../locales/ptbr.json';
import message_fr from '../../../locales/fr.json';
import message_es from '../../../locales/es.json' ;
import message_esp from '../../../locales/esp.json' ;
import message_it from '../../../locales/it.json' ;
import message_ja from '../../../locales/ja.json' ;
import message_kr from '../../../locales/kr.json' ;
import message_ch from '../../../locales/ch.json';
import message_chs from '../../../locales/chs.json';
import message_ar from '../../../locales/ar.json'

const messages = {
  en: messages_en,
  de: messages_de,
  ru: message_ru,
  po: message_po,
  pbr: message_ptbr,
  fr: message_fr,
  es: message_es,
  esp: message_esp,
  it: message_it,
  ja: message_ja,
  kr: message_kr,
  ch: message_ch,
  chs: message_chs,
  ar: message_ar,
};


function Navbar() {

  const [locale, setLocale] = useState('en');

  const changeLanguage = (lang) => {
    setLocale(lang);
  };

  useEffect(() => {
    document.title = messages[locale].title;
  }, [locale]);


  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <header className="header" id="header">
        <div className="header-top">
          <a href="#" className="header-top__logo">
            <img className="header-top__logo-yellow" src="https://i.imgur.com/j3Za9uB.png" srcSet="https://i.imgur.com/j3Za9uB.png 1x, https://i.imgur.com/j3Za9uB.png 2x" />
            <img className="header-top__logo-black" src="https://i.imgur.com/j3Za9uB.png" srcSet="https://i.imgur.com/j3Za9uB.png 1x, https://i.imgur.com/j3Za9uB.png 2x" />
          </a>
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <span className="menu-sub">
                  <FormattedMessage id="greeting" />
                </span>
                <ul className="menu-sub-list">
                  <li>
                    <a href="#">
                      <FormattedMessage id="farawell" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id="fravel2" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <span className="menu-sub">
                  <FormattedMessage id="community" />
                </span>
                <ul className="menu-sub-list">
                  <li>
                    <a href="#">
                      <FormattedMessage id='forum' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id='discord' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id='material' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id='kankulator' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FormattedMessage id='buket' />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item" id="myBtns">
                <a href="#">
                  <FormattedMessage id='accaunt' />
                </a>
              </li>
              <li className="menu-item menu-item-lang">
                <span className="menu-sub">
                  <FormattedMessage id='change' />
                </span>
                <ul className="menu-sub-list">
                  <li>
                    <a href="#" onClick={() => changeLanguage('en')}>
                      <FormattedMessage id='en' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => changeLanguage('ru')}>
                      <FormattedMessage id='ru' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => changeLanguage('de')}>
                      <FormattedMessage id='de' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => changeLanguage('po')}>
                      <FormattedMessage id='po' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => changeLanguage('pbr')}>
                      <FormattedMessage id='pbr' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={()=> changeLanguage('fr')}>
                      <FormattedMessage id='fr' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={()=> changeLanguage('es')}>
                      <FormattedMessage id='es' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={()=> changeLanguage('esp')}>
                      <FormattedMessage id='esp' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={()=> changeLanguage('it')}>
                      <FormattedMessage id='it' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={()=> changeLanguage('ja')}>
                      <FormattedMessage id='ja' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={()=> changeLanguage('kr')}>
                      <FormattedMessage id='ko' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={()=> changeLanguage('ch')}>
                      <FormattedMessage id='ch' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={()=> changeLanguage('chs')}>
                      <FormattedMessage id='chs' />
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={()=> changeLanguage('ar')}>
                      <FormattedMessage id='ar' />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-buy">
                <a href="#">
                  <FormattedMessage id='open' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__content" id="headerLogo">
          <img className="header__logo" src="https://i.imgur.com/vNBZEe9.png" srcSet="https://i.imgur.com/vNBZEe9.png 1x, https://i.imgur.com/swcCgza.png 2x" />
          <h1 className="header__title">
            <FormattedMessage id='headTitle'/>
          </h1>
          <div className="header__buttons">
            <a className="cp-btn cp-btn--yellow-rotated h6" href="#" id="myBtnss">
              <span>
                <FormattedMessage id='buy'/>
              </span>
            </a>
            <a className="cp-btn cp-btn--yellow h6" href="https://youtu.be/FO14X9YAeps?si=Tzao0AwNI27w5o1K" id="mybtn" >
              <span>
                <FormattedMessage id='treyler'/>
              </span>
            </a>
          </div>
        </div>
      </header>
    </IntlProvider>
  )
}
export default Navbar