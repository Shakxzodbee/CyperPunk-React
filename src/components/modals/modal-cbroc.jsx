import './modal-cbroc.css';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
const ModalCbroc = ({ setModalCbroc, setIsModalOpen }) => {
  const intl = useIntl();
  return (
    <div className="container-cbroc">
      <div className="modal-cbroc">
        <div className="cbroc-btn-container">
          <button onClick={() => { setModalCbroc(false), setIsModalOpen(false); }} className="cbroc-btnn"> ×</button>
        </div>
        <div className="cbroc-a-teg">
          <a href="https://epicapps.ru/ru/land/steam/?utm_source=direct&amp;utm_medium=cpc&amp;utm_campaign=steam-cis&amp;utm_content=0&amp;utm_term=---autotargeting&amp;yclid=3913537345617919999">
            <img width={'25px'} height={'25px'} src="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react//global/steam_icon.svg" alt="Steam" />
            <h2>
              <FormattedMessage id="free" />
            </h2>
          </a>
        </div>
        <h2>
          <FormattedMessage id='resetpassword' />
        </h2>
        <p>
          <FormattedMessage id='sbrosinfo' />
        </p>
        <form className="form-cbroc">
          <input className="input-cbroc" type="text" placeholder={intl.formatMessage({ id: 'placeholder' })} />
          <button className="cbroc-btn" style={{ marginTop: '20px' }}>
            <FormattedMessage id="contiune" />
          </button>
          <button onClick={() => setModalCbroc(false)} className="cbroc-btn">
            <FormattedMessage id='resetmodal' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalCbroc;