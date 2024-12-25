import React from 'react';
import './hero.scss';
import { motion } from 'framer-motion';

// Define variants
const textVariants = {
	initial: { x: -500, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const scrollButtonVariants = {
	initial: { opacity: 0, y: 10 },
	animate: {
		opacity: [0, 1, 0],
		y: [10, 0, 10],
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const sliderVariants = {
	initial: { x: 0 },
	animate: {
		x: '-220%',
		transition: {
			repeat: Infinity,
			repeatType: 'mirror',
			duration: 20,
		},
	},
};

const Hero = () => {
	return (
		<div className='hero'>
			<div className='wrapper'>
				<motion.div
					className='textContainer'
					variants={textVariants}
					initial='initial'
					animate='animate'
				>
					<motion.h2 variants={textVariants}>Aung Paing Oo</motion.h2>
					<motion.h1 variants={textVariants}>Full-Stack Developer</motion.h1>
					<motion.div
						className='buttons'
						variants={textVariants}
					>
						<a href='#Portfolio'>
							<motion.button variants={textVariants}>
								See the Latest Works
							</motion.button>
						</a>
						<a href='#Contact'>
							<motion.button variants={textVariants}>Contact Me</motion.button>
						</a>
					</motion.div>
					<motion.img
						src='/scroll.png'
						alt='Scroll Indicator'
						variants={scrollButtonVariants}
						initial='initial'
						animate='animate'
					/>
				</motion.div>
			</div>
			<motion.div
				className='slidingTextContainer'
				variants={sliderVariants}
				initial='initial'
				animate='animate'
			>
				Junior Full-Stack Developer
			</motion.div>
			<div className='imageContainer'>
				<img
					className='me'
					src='/me.png'
					alt='Aung Paing Oo'
				/>
			</div>
		</div>
	);
};

export default Hero;
