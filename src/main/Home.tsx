import { Footer } from './components/Footer';
import { ProjectCard } from './components/ProjectCard';
import './index.css';

const projects = [
	{
		title: 'CSS3 Tooling',
		description:
			'Interactive tools to explore CSS3 features — layouts, animations, transitions and modern visual effects.',
		tags: ['React', 'CSS', 'TypeScript'],
		status: 'In Progress' as const,
		href: '/css3-tooling',
	},
];

export default function Home() {
	return (
		<div className="home">
			<main>
				<div className="warning-banner">
					<h2>⚠️ WORK IN PROGRESS ⚠️</h2>
					<p>
						This is a personal playground for experimenting with web
						technologies. Projects here are works in progress and may not be
						fully polished or functional. Use at your own risk!
					</p>
				</div>

				<header className="home-header">
					<h1>Welcome to my Playground!</h1>
					<p>
						A space to experiment with various technologies, share projects and
						document the learning journey.
					</p>
				</header>

				<div className="project-container">
					<p className="section-label">Web Projects</p>
					<div className="projects-grid">
						{projects.map(project => (
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
