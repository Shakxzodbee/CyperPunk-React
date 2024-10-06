// useLocale.js
import { useState, useEffect } from 'react';
import messages from '../Navbar/Navbar'; // Bu fayldagi messages ni import qiling (agar boshqa faylda bo'lsa)

const useLocale = () => {
  const [locale, setLocale] = useState('ru');

  const changeLanguage = (lang) => {
    setLocale(lang);
  };

  useEffect(() => {
    document.title = messages[locale].title;
  }, [locale]);

  return { locale, changeLanguage };
};

export default useLocale;
