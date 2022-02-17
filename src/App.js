import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';

import { TranslationContext, translations } from './context/translation';

function App() {
  const [lang, setLang] = React.useState('ru');

  const switchLang = (lang) => {
    setLang(lang)
  }

  return (
    <TranslationContext.Provider value={translations[lang]}>
      <Header switchLang={switchLang} selectedLang={lang} />
      <Main />
      <Footer />
    </TranslationContext.Provider>
  );
}

export default App;