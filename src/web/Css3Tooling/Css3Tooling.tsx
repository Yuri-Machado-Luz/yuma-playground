import { Link } from 'react-router-dom';
import './index.css';

export default function Css3Tooling() {
	return (
		<div className="css3-page">
			<nav className="css3-nav-main">
				<ul>
					<li>
						<Link to="/">← Home</Link>
					</li>
					<li>
						<a href="#hero">Top</a>
					</li>
					<li>
						<a href="#resources">Resources</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
				</ul>
			</nav>

			<header className="css3-hero">
				<section id="hero">
					<h1>CSS3 Tools</h1>
					<p>Ferramentas interativas para explorar recursos CSS3</p>
				</section>
			</header>

			<main>
				<div className="css3-content">
					<nav className="css3-nav-resources">
						<ul>
							<li>
								<a href="#docs">Documentation</a>
							</li>
							<li>
								<a href="#tutorials">Tutorials</a>
							</li>
							<li>
								<a href="#examples">Examples</a>
							</li>
						</ul>
					</nav>

					<section
						id="resources"
						className="css3-sections">
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
						<h2>Sobre o projeto CSS3</h2>
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							mollitia laboriosam harum unde eius exercitationem iste quia
							provident quos cumque cupiditate molestiae, quisquam praesentium
							quasi atque totam inventore sint expedita.
						</p>
					</section>
				</div>
			</main>

			<footer className="css3-footer">
				<p>&copy; 2025 YUMA. All rights reserved.</p>
			</footer>
		</div>
	);
}
