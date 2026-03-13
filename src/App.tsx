import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/main/Home';
import { Css3Tooling } from '@/web/Css3Tooling/Css3Tooling';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/css3-tooling"
					element={<Css3Tooling />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
