// src/Modal.jsx
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import './modal-zapis.css';

const ModalZapis = ({ setModalZapis, setIsModalOpen }) => {
  const intl = useIntl();


  return (
    <div className="container-zapis">
      <div className="modal-zapis">
        <div className="zapis-btn-container">
          <button onClick={() => {setModalZapis(false), setIsModalOpen(false); }} className="zapis-btnn">×</button>
        </div>
        <div className="zapis-cont">
          <div className="zapis-a-teg">
            <a href="https://epicapps.ru/ru/land/steam/?utm_source=direct&amp;utm_medium=cpc&amp;utm_campaign=steam-cis&amp;utm_content=0&amp;utm_term=---autotargeting&amp;yclid=3913537345617919999">
              <img width={'25px'} height={'25px'} src="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react//global/steam_icon.svg" alt="Steam"/>
              <h2>
              <FormattedMessage id="free" />
              </h2>
            </a>
          </div>
          <h2>
            <FormattedMessage id='createzavest'/>
          </h2>
          <form className="form-zapis">
            <input
              className="input-zapis"
              type="text"
             placeholder={intl.formatMessage({ id: 'pochta' })}
            />
            <input className="input-zapis" type="text" 
             placeholder={intl.formatMessage({ id: 'parol' })}  
             />

            <div className="zapis-text">
              <div className="zapis-around" />
              <FormattedMessage id='Cyperinfo'/>
            </div>
            <div className="zapis-text">
              <div className="zapis-around" />
             <FormattedMessage id='zapisaround'/>
            </div>

            <button className="zapis-btn" style={{ marginTop: '20px' }}>
             <FormattedMessage id='contiune'/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalZapis;  