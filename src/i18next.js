import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPT from "./assets/translations/translationPT.json"
import translationEN from "./assets/translations/translationEN.json"


/*
This file is for the website to support multiple languages.
*/


const Languages = ['pt','en']

i18n
  .use(initReactI18next)
  .init({
    lng:'en',
    fallbackLng: 'pt',
    debug: true,
    whitelist: Languages,
    resources:{
      pt:{
        translation: translationPT
      },
      en:{
        translation: translationEN
      }
    }
  });


export default i18n;