export interface WebProject {
	title: string;
	description: string;
	tags: string[];
	status: 'In Progress' | 'Alpha' | `V${number}`;
	href: string;
}

export const webProjects: WebProject[] = [
	{
		title: 'CSS3 Tooling',
		description:
			'Interactive tools to explore CSS3 features — layouts, animations, transitions and modern visual effects.',
		tags: ['React', 'CSS', 'TypeScript'],
		status: 'In Progress',
		href: '/css3-tooling',
	},
	{
		title: 'Placeholder Project',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		tags: ['React', 'CSS', 'TypeScript'],
		status: 'Alpha',
		href: '/',
	},
	{
		title: 'Placeholder Project',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		tags: ['React', 'CSS', 'TypeScript'],
		status: 'V1.0',
		href: '/',
	},
	{
		title: 'Placeholder Project',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		tags: ['React', 'CSS', 'TypeScript'],
		status: 'In Progress',
		href: '/',
	},
];
