import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
	const { i18n, t } = useTranslation();

	const languages = [
		{ code: 'pt-BR', label: t('common.pt') },
		{ code: 'en-US', label: t('common.en') },
	];

	return (
		<div className="flex gap-2">
			{languages.map(lang => (
				<button
					key={lang.code}
					onClick={() => i18n.changeLanguage(lang.code)}
					className={`rounded px-3 py-1 text-sm transition-colors ${
						i18n.language === lang.code
							? 'bg-primary text-white'
							: 'bg-surface text-color-text hover:bg-surface-hover'
					}`}
					aria-label={`Switch to ${lang.label}`}>
					{lang.label}
				</button>
			))}
		</div>
	);
}
