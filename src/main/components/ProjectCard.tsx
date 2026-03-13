import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

// TYPES
interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	status: 'In Progress' | 'Alpha' | `V${number}`;
	href: string;
}

// CONSTANTS
// STYLES

const STATUS_VARIANTS = {
	'In Progress': 'in-progress',
	Alpha: 'alpha',
} as const;

const getStatusClass = (status: string): string | null => {
	if (status in STATUS_VARIANTS) {
		return STATUS_VARIANTS[status as keyof typeof STATUS_VARIANTS];
	} else if (status.startsWith('V')) {
		return 'version';
	}
	return null;
};

export function ProjectCard({
	title,
	description,
	tags,
	status,
	href,
}: ProjectCardProps) {
	const { t } = useTranslation();
	const statusClass = getStatusClass(status);

	const getStatusTranslation = () => {
		if (status === 'In Progress') return t('status.inProgress');
		if (status === 'Alpha') return t('status.alpha');
		return status;
	};

	return (
		<Link
			className={styles.card}
			to={href}>
			<span className={styles.title}>{title}</span>
			<span className={styles.description}>{description}</span>
			<div className={styles.tags}>
				{tags.map(tag => (
					<span
						key={tag}
						className={styles.tag}>
						{tag}
					</span>
				))}
				{statusClass && (
					<span className={`${styles.status} ${styles[statusClass]}`}>
						{getStatusTranslation()}
					</span>
				)}
			</div>
		</Link>
	);
}
