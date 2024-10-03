function Navbar() {
  return (
    <header className="header" id="header">
      <div className="header-top">
        <a href="#" className="header-top__logo">
          <img className="header-top__logo-yellow" src="https://i.imgur.com/j3Za9uB.png" srcSet="https://i.imgur.com/j3Za9uB.png 1x, https://i.imgur.com/j3Za9uB.png 2x" />
          <img className="header-top__logo-black" src="https://i.imgur.com/j3Za9uB.png" srcSet="https://i.imgur.com/j3Za9uB.png 1x, https://i.imgur.com/j3Za9uB.png 2x" />
        </a>
        <div className="menu">
          <ul className="menu-list">
            <li className="menu-item">
              <span className="menu-sub">Игры</span>
              <ul className="menu-sub-list">
                <li>
                  <a href="#" id="farewell">Cyberpunk 2077</a>
                </li>
                <li>
                  <a href="#" id="fravel2">Призрачная свобода</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <span className="menu-sub" id="community" >Сообщество</span>
              <ul className="menu-sub-list">
                <li>
                  <a href="#">Форум</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
                <li>
                  <a href="#">ПОЛЕЗНЫЕ МАТЕРИАЛЫ</a>
                </li>
                <li>
                  <a href="#">Калькулятор способностей</a>
                </li>
                <li>
                  <a href="#">Игровой буклет</a>
                </li>
              </ul>
            </li>
            <li className="menu-item" id="myBtns">
              <a href="#">Aккаунт</a>
            </li>
            <li className="menu-item menu-item-lang">
              <span className="menu-sub">ru</span>
              <ul className="menu-sub-list">
                <li><a href="#">Английский</a></li>
                <li><a href="#">Россия</a></li>
                <li><a href="#">немецкий</a></li>
                <li><a href="#">польский</a></li>
                <li><a href="#">португальский (BR)</a></li>
                <li><a href="#">Французский</a></li>
                <li><a href="#">испанский</a></li>
                <li><a href="#">испанский (MX)</a></li>
                <li><a href="#">итальянский</a></li>
                <li><a href="#">японский</a></li>
                <li><a href="#">корейский</a></li>
                <li><a href="#">Упрощенный к</a> </li>
                <li><a href="#">Традиционный к</a></li>
                <li><a href="#">арабский</a></li>
              </ul>
            </li>
            <li className="menu-item menu-item-buy"><a href="#" id="buy">ВОЙТИ</a></li>
          </ul>
        </div>
      </div>
      <div className="header__content" id="headerLogo">
        <img className="header__logo" src="https://i.imgur.com/vNBZEe9.png" srcSet="https://i.imgur.com/vNBZEe9.png 1x, https://i.imgur.com/swcCgza.png 2x" />
        <h1 className="header__title">Уже в продаже</h1>
        <div className="header__buttons">
          <a className="cp-btn cp-btn--yellow-rotated h6" href="#" id="myBtnss">
            <span>Купить</span>
          </a>
          <a className="cp-btn cp-btn--yellow h6" href="https://youtu.be/FO14X9YAeps?si=Tzao0AwNI27w5o1K" id="mybtn" >
            <span>ТРЕЙЛЕР</span>
          </a>
        </div>
      </div>
    </header>
  )
}
export default Navbar