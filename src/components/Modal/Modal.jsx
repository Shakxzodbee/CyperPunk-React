// src/Modal.jsx
import React from 'react';
import './Modal.css'; // CSS faylini import qilamiz
import { FormattedMessage } from 'react-intl';
import { IntlProvider, useIntl } from 'react-intl';

const messages = {
  en: { placeholder: 'Type something...' },
  uz: { placeholder: 'Biror narsa yozing...' },
};


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const intl = useIntl();
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className='close-button' onClick={onClose}>&times;</button>
        <div>
          <div className="steam-logo">
            <a href="https://epicapps.ru/ru/land/steam/?utm_source=direct&utm_medium=cpc&utm_campaign=steam-cis&utm_content=0&utm_term=---autotargeting&yclid=3913537345617919999" className="a-teg">
              <img src="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react//global/steam_icon.svg" alt="Steam" />
              <h2>
                <FormattedMessage id="free" />
              </h2>
            </a>
          </div>
          <h2 className='login-title'>
            <FormattedMessage id='opens' />
          </h2>
          <form action="" className='login-form'>
            <input type="text" placeholder={intl.formatMessage({id: 'placeholder'})} />
            <input type="password" placeholder={intl.formatMessage({ id: 'password' })} />
          </form>
          <button className='login-button'>
            <FormattedMessage id='opens' />
          </button>
          <div className='login-options'>
            <a href="#" className="recovery">
              <FormattedMessage id='recovery' />
            </a>
            <a href="#" className="button">
              <FormattedMessage id='createAccount' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;