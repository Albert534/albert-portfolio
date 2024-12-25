import React, { useRef } from 'react';
import './services.scss';
import { color, motion, useInView } from 'framer-motion';

const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: '-100px' });
	const variants = {
		initial: {
			x: -500,
			y: 100,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},
	};
	return (
		<div
			className='services'
			variants={variants}
			initial='initial'
			whileInView='animate'
			ref={ref}
			animate={isInView && 'animate'}
		>
			<motion.div
				className='textContainer'
				variants={variants}
			>
				<p>
					I always focus on helping your brand <br /> to become the best{' '}
				</p>
				<hr />
			</motion.div>
			<motion.div className='titleContainer'>
				<div className='title'>
					<img
						src='/people.webp'
						alt=''
					></img>
					<h1>
						<motion.b whileHover={{ color: 'orange !important' }}>
							Unique
						</motion.b>{' '}
						Ideas
					</h1>
				</div>

				<div className='title'>
					<h1>
						<motion.b whileHover={{ color: 'orange' }}>For Your</motion.b>{' '}
						Business
					</h1>
					<button> What I DO ? </button>
				</div>
			</motion.div>
			<motion.div
				className='listContainer'
				variants={variants}
			>
				<div className='box'>
					<h2>MERN</h2>
					<p>
						With expertise in MongoDB, Express.js, React, and Node.js, I create
						dynamic, full-stack web applications that are scalable, efficient,
						and user-friendly. From database management to responsive front-end
						design, I ensure every layer of development aligns seamlessly with
						project goals and delivers exceptional results.
					</p>
				</div>
				<div className='box'>
					<h2>TypeScript</h2>
					<p>
						TypeScript elevates development by introducing strong typing and
						advanced features to JavaScript, ensuring code clarity and reducing
						errors. By leveraging TypeScript, I build robust, maintainable
						applications that scale effortlessly while enabling teams to
						collaborate effectively and innovate rapidly.
					</p>
				</div>
				<div className='box'>
					<h2>Highly Adaptable</h2>
					<p>
						In a rapidly evolving tech landscape, adaptability is key. I thrive
						on learning new technologies, frameworks, and methodologies,
						applying them effectively to solve challenging problems. My approach
						ensures projects benefit from cutting-edge advancements and
						tailored, innovative solutions.
					</p>
				</div>
				<div className='box'>
					<h2>Discipline Coding</h2>
					<p>
						Clean, organized, and efficient code is the backbone of sustainable
						software development. I prioritize writing disciplined code that
						adheres to best practices, enabling collaborators to build upon a
						solid foundation. By fostering clarity and structure, I ensure
						long-term maintainability and scalability.
					</p>
				</div>
			</motion.div>
		</div>
	);
};

export default Services;
