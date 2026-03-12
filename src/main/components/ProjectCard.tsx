import { Link } from 'react-router-dom';

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	status: 'In Progress' | 'Done';
	href: string;
}

export function ProjectCard({
	title,
	description,
	tags,
	status,
	href,
}: ProjectCardProps) {
	return (
		<Link
			className="border-border bg-surface hover:border-border-hover hover:bg-surface-hover flex flex-col gap-2 rounded-lg border p-5 no-underline transition-[border-color,background] duration-150 ease-in-out"
			to={href}>
			<span className="text-base font-semibold">{title}</span>
			<span className="text-muted flex-1 text-sm leading-relaxed">
				{description}
			</span>
			<div className="mt-1 flex flex-wrap gap-2">
				{tags.map(tag => (
					<span
						key={tag}
						className="bg-border text-text-secondary rounded-full px-2 py-0.5 text-xs">
						{tag}
					</span>
				))}
				{status === 'In Progress' && (
					<span className="bg-primary text-white rounded-full px-2 py-0.5 text-xs">
						{status}
					</span>
				)}
			</div>
		</Link>
	);
}

