import React from 'react';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Test from './Test';
import Hero from './components/hero/Hero';
import Parallex from './parallex/Parallex';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
const App = () => {
	return (
		<div>
			<Cursor />
			<section id='Homepage'>
				<Navbar />
				<Hero />
			</section>

			<section id='Services'>
				<Parallex type='services' />
			</section>

			<Services />

			<section id='Portfolio'>
				<Parallex type='portfolio' />
			</section>
			<Portfolio />
			<section id='Contact'>
				<Contact />
			</section>
		</div>
	);
};

export default App;
