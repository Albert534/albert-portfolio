import React, { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
const items = [
	{
		id: 1,
		title: 'BOOM',
		img: './Boom.png',
		desc: 'The alternative web application of ZOOM meeting developed with Next.js which has least function in it.On the other hand it work really well like ZOOM.(No Mobile Support)',
		link: 'https://boom-flame.vercel.app/',
	},

	{
		id: 2,
		title: 'Albert-Sharing',
		img: './albertsharing.png',
		desc: 'An application that is created with Next.Js and Firebase for file sharing through the email at the same itme it can store as a cloud storeage',
		link: 'https://albert-sharing.netlify.app/',
	},

	{
		id: 3,
		title: 'AI Image Generator',
		img: './imagegenerator.png',
		desc: 'AI image generator that has built with React.Js and API. Since the API is free there is a limitation for generating images. ',
		link: 'https://albertimagegenerator.netlify.app',
	},
	{
		id: 4,
		title: 'React Commerce',
		img: './Ecommerce.png',
		desc: 'Ecommerce landing page that have been created with React.Js. This website is fully responsive and also aviable to use light and dark mode.',
		link: 'https://albertcommerce.netlify.app/',
	},

	{
		id: 5,
		title: 'To-do list',
		img: './todo-list.png',
		desc: 'Simple To-do list that has been created with React.Js without database.',
		link: 'https://simpletodolist22.netlify.app/',
	},
	{
		id: 6,
		title: 'React Calculator',
		img: './reactcalculator.png',
		desc: 'A calculator that is being created by React.Js',
		link: 'https://albert-calculator-cb3189.netlify.app/',
	},

	{
		id: 7,
		title: 'React-Quizz',
		img: './reactquizz.png',
		desc: 'Quizz Application that asked about React.Js Essential Quizzes',
		link: 'https://react-quiz22.netlify.app/',
	},
];

const Single = ({ item }) => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
	}); // Use correct scrollYProgress
	const y = useTransform(scrollYProgress, [0, 1], [-300, 250]);

	return (
		<section>
			<div className='container'>
				<div className='wrapper'>
					<div
						className='imageContainer'
						ref={ref}
					>
						<img
							src={item.img}
							alt=''
						/>
					</div>

					<motion.div
						className='textContainer'
						style={{ y }}
					>
						<h2>{item.title}</h2>
						<p>{item.desc}</p>
						<a
							href={item.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							<button>See Demo</button>
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

const Portfolio = () => {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	});
	const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
	return (
		<div
			className='portfolio'
			ref={ref}
		>
			<div className='progress'>
				<h1>Featured Works</h1>
				<motion.div
					className='progressBar'
					style={{ scaleX }}
				></motion.div>
			</div>
			{items.map((item) => (
				<Single
					item={item}
					key={item.id}
				/>
			))}
		</div>
	);
};

export default Portfolio;
