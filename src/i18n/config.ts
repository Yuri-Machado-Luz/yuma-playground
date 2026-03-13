import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './locales/en-US';
import ptBR from './locales/pt-BR';

const resources = {
	'pt-BR': { translation: ptBR },
	'en-US': { translation: enUS },
};

i18n.use(initReactI18next).init({
	resources,
	lng: localStorage.getItem('language') || 'pt-BR',
	fallbackLng: 'pt-BR',
	interpolation: {
		escapeValue: false,
	},
});

i18n.on('languageChanged', lng => {
	localStorage.setItem('language', lng);
	document.documentElement.lang = lng;
});

export default i18n;
