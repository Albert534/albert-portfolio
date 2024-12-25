import React, { useRef, useEffect, useState } from 'react';
import './parallex.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallex = ({ type }) => {
	const ref = useRef();

	// Corrected scrollYProgress
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});

	// Apply transform values
	const [ranges, setRanges] = useState({
		yBg: ['0%', '60%'],
		yText: ['0%', '250%'],
	});

	// Effect to update ranges on resize
	useEffect(() => {
		const updateRanges = () => {
			if (window.innerWidth <= 768) {
				setRanges({
					yBg: ['0%', '20%'], // Adjusted for smaller screens
					yText: ['0%', '200%'],
				});
			} else if (window.innerWidth <= 1024) {
				setRanges({
					yBg: ['0%', '50%'], // Adjusted for medium screens
					yText: ['0%', '220%'],
				});
			} else {
				setRanges({
					yBg: ['0%', '60%'], // Default for larger screens
					yText: ['0%', '250%'],
				});
			}
		};

		// Initialize on component mount
		updateRanges();

		// Listen to window resize
		window.addEventListener('resize', updateRanges);

		// Cleanup listener
		return () => window.removeEventListener('resize', updateRanges);
	}, []);

	// Apply ranges
	const yBg = useTransform(scrollYProgress, [0, 1], ranges.yBg);
	const yText = useTransform(scrollYProgress, [0, 1], ranges.yText);

	return (
		<div
			className='parallax'
			ref={ref}
			style={{
				background:
					type === 'services'
						? 'linear-gradient(180deg, #0c0c1d, #111132)'
						: 'linear-gradient(180deg, #111132, #505064)',
			}}
		>
			<motion.h1 style={{ y: yText }}>
				{type === 'services' ? 'What I do?' : 'What I Did?'}
			</motion.h1>
			<motion.div className='mountains'></motion.div>
			<motion.div
				className='planets'
				style={{
					y: yBg,
					backgroundImage: `url(${
						type === 'services' ? '/planets.png' : '/sun.png'
					})`,
				}}
			></motion.div>

			<motion.div
				className='stars'
				style={{ x: yBg }}
			></motion.div>
		</div>
	);
};

export default Parallex;
