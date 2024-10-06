import './lang.css';

const Lang = ({ setLang }) => {
  return (
    <div className="lang-menu-container">
      <div className="lang-menu-nav">
        <div style={{ width: '100%', textAlign: 'end' }}>
          <div onClick={() => setLang(false)} style={{ cursor: 'pointer', fontSize: '20px' }}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <ul className='ul'>
          <li>АНГЛИЙСКИЙ</li>
          <li>РОССИЯ</li>
          <li>НЕМЕЦКИЙ</li>
          <li>ПОЛЬСКИЙ</li>
          <li>ПОРТУГАЛЬСКИЙ (BR)</li>
          <li>ФРАНЦУЗСКИЙ</li>
          <li>ИСПАНСКИЙ</li>
          <li>ИСПАНСКИЙ (MX)</li>
          <li>ИТАЛЬЯНСКИЙ</li>
          <li>ЯПОНСКИЙ</li>
          <li>КОРЕЙСКИЙ</li>
          <li>УПРОЩЕННЫЙ K</li>
          <li>ТРАДИЦИОННЫЙ K</li>
          <li>АРАБСКИЙ</li>
        </ul>
      </div>
    </div>
  );
};

export default Lang;