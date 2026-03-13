import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Css3Tooling.css';

export function Css3Tooling() {
	const { t } = useTranslation();

	return (
		<div className="css3-page">
			<nav className="css3-nav-main">
				<ul>
					<li>
						<Link to="/">{t('css3.nav.home')}</Link>
					</li>
					<li>
						<a href="#hero">{t('css3.nav.top')}</a>
					</li>
					<li>
						<a href="#resources">{t('css3.nav.resources')}</a>
					</li>
					<li>
						<a href="#about">{t('css3.nav.about')}</a>
					</li>
				</ul>
				<div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
					<LanguageSwitcher />
				</div>
			</nav>

			<header className="css3-hero">
				<section id="hero">
					<h1>{t('css3.hero.title')}</h1>
					<p>{t('css3.hero.subtitle')}</p>
				</section>
			</header>

			<main>
				<div className="css3-content">
					<nav
						className="css3-nav-resources"
						id="resources">
						<ul>
							<li>
								<a href="#docs">{t('common.docs')}</a>
							</li>
							<li>
								<a href="#tutorials">{t('common.tutorials')}</a>
							</li>
							<li>
								<a href="#examples">{t('common.examples')}</a>
							</li>
						</ul>
					</nav>

					<section className="css3-sections">
						<section id="docs">
							<h2>Lorem ipsum dolor sit amet.</h2>
						</section>
						<section id="tutorials">
							<h2>Lorem, ipsum.</h2>
						</section>
						<section id="examples">
							<h2>Lorem ipsum dolor sit.</h2>
						</section>
					</section>

					<section
						id="about"
						className="css3-about">
						<h2>{t('css3.about.title')}</h2>
						<h3>{t('css3.about.subtitle')}</h3>
						<p>{t('css3.about.description')}</p>
					</section>
				</div>
			</main>

			<footer className="css3-footer">
				<p>&copy; 2025 YUMA. {t('common.rights')}</p>
			</footer>
		</div>
	);
}
