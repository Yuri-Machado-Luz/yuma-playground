import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Footer } from './components/Footer';
import { ProjectCard } from './components/ProjectCard';
import { webProjects } from './data';
import './index.css';

export default function Home() {
	const { t } = useTranslation();

	return (
		<div className="home">
			<main>
				<div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
					<LanguageSwitcher />
				</div>

				<div className="warning-banner">
					<h2>⚠️ {t('home.warning')} ⚠️</h2>
					<p>{t('home.warningDescription')}</p>
				</div>

				<header className="home-header">
					<h1>{t('home.title')}</h1>
					<p>{t('home.subtitle')}</p>
				</header>

				<div className="project-container">
					<p className="section-label">{t('home.section')}</p>
					<div className="projects-grid">
						{webProjects.map(project => (
							<ProjectCard
								key={project.title}
								{...project}
							/>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
