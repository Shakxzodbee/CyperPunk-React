import './lang.css';
import { FormattedMessage, IntlProvider } from 'react-intl';
import React, { useEffect, useState } from 'react';
import message_ar from '../../../locales/ar.json';
import message_ch from '../../../locales/ch.json';
import message_chs from '../../../locales/chs.json';
import messages_de from '../../../locales/de.json';
import messages_en from '../../../locales/en.json';
import message_es from '../../../locales/es.json';
import message_esp from '../../../locales/esp.json';
import message_fr from '../../../locales/fr.json';
import message_it from '../../../locales/it.json';
import message_ja from '../../../locales/ja.json';
import message_kr from '../../../locales/kr.json';
import message_po from '../../../locales/po.json';
import message_ptbr from '../../../locales/ptbr.json';
import message_ru from '../../../locales/ru.json';

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

const Lang = ({ setLang }) => {
  const [locale, setLocale] = useState('ru');

  const changeLanguage = lang => {
    setLocale(lang);
    console.log("Language type: ", lang)
  };

  useEffect(() => {
    document.title = messages[locale].title;
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="lang-menu-container">
        <div className="lang-menu-nav">
          <div style={{ width: '100%', textAlign: 'end' }}>
            <div onClick={() => setLang(false)} style={{ cursor: 'pointer', fontSize: '20px' }}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <ul className='ul'>
            <li>
              <a href="#" onClick={() => changeLanguage('en')}>
                <FormattedMessage id="en" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('ru')}>
                <FormattedMessage id="ru" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('ch')}>
                <FormattedMessage id="ch" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('po')}>
                <FormattedMessage id="po" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('pbr')}>
                <FormattedMessage id="pbr" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('fr')}>
                <FormattedMessage id="fr" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('es')}>
                <FormattedMessage id="es" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('esp')}>
                <FormattedMessage id="esp" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('it')}>
                <FormattedMessage id="it" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('ja')}>
                <FormattedMessage id="ja" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('kr')}>
                <FormattedMessage id="ko" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('ch')}>
                <FormattedMessage id="ch" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('chs')}>
                <FormattedMessage id="chs" />
              </a>
            </li>
            <li>
              <a href="#" onClick={() => changeLanguage('ar')}>
                <FormattedMessage id="ar" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </IntlProvider>
  );
};

export default Lang;