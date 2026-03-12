const socialLinks = [
	{
		href: 'mailto:yurimachadoluz@gmail.com',
		label: 'Gmail',
		icon: 'gmail',
	},
	{
		href: 'https://github.com/Yuri-Machado-Luz',
		label: 'GitHub',
		icon: 'github',
	},
	{
		href: 'https://linkedin.com/in/yurimachadoluz0311',
		label: 'LinkedIn',
		icon: 'linkedin',
	},
];

export function Footer() {
	return (
		<footer className="border-border-subtle flex items-center justify-center gap-5 border-t px-8 py-6">
			<span className="text-muted text-sm">Feel free to reach out</span>
			{socialLinks.map(link => (
				<a
					key={link.icon}
					href={link.href}
					aria-label={link.label}>
					<img
						src={`https://skillicons.dev/icons?i=${link.icon}`}
						alt={link.label}
						className="block size-7 opacity-80 transition-opacity duration-150 ease-in-out hover:opacity-100"
					/>
				</a>
			))}
		</footer>
	);
}
