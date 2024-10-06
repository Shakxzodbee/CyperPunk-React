import React, { useState } from 'react';
import './burger-menu.css';
import { FormattedMessage, IntlProvider } from 'react-intl';

const BurgerMenu = ({ setBurgerMenu, setIsModalOpen }) => {
  const [first, setFirst] = useState(false);
  const [two, setTwo] = useState(false);

  const handleClose = () => {
    setBurgerMenu(false);
    setIsModalOpen(true);
  };
  return (
    <div className="burger-menu-container">
      <div className="burger-menu-nav">
        <div style={{ width: '100%', textAlign: 'end' }}>
          <div
            onClick={() => setBurgerMenu(false)}
            style={{ cursor: 'pointer', fontSize: '20px' }}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div style={{ marginTop: '10px' }}>
          <h2
            onClick={() => setFirst(prev => !prev)}
            style={{
              display: 'flex',
              alignContent: 'center',
              gap: '5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          > <FormattedMessage id="greeting" /> <i className="fa-solid fa-chevron-down"></i>
          </h2>
          {first ? (
            <ul
              style={{
                textTransform: 'uppercase',
                padding: '10px 50px',
                fontSize: '20px',
              }}
            >
              <li> <FormattedMessage id='farawell' /></li>
              <li> <FormattedMessage id='fravel2' /></li>
            </ul>
          ) : null}
        </div>
        <div style={{ marginTop: '10px' }}>
          <h2
            onClick={() => setTwo(prev => !prev)}
            style={{
              display: 'flex',
              alignContent: 'center',
              gap: '5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            <FormattedMessage id='community' /> <i className="fa-solid fa-chevron-down"></i>
          </h2>
          {two ? (
            <ul
              style={{
                textTransform: 'uppercase',
                padding: '10px 50px',
                fontSize: '20px',
              }}
            >
              <li><FormattedMessage id='forum' /></li>
              <li><FormattedMessage id='discord' /></li>
              <li><FormattedMessage id='material' /></li>
              <li><FormattedMessage id='kankulator' /></li>
              <li><FormattedMessage id='buket' /></li>
            </ul>
          ) : null}
        </div>
        <div style={{ marginTop: '10px' }}>
          <h2 onClick={handleClose}
            style={{
              display: 'flex',
              alignContent: 'center',
              gap: '5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            <FormattedMessage id='accaunt' />
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <a onClick={handleClose} className="cp-btn cp-btn--yellow h6" id="mybtn">
            <span><FormattedMessage id='buy' /></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;