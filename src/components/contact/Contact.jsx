import React, { useRef, useState } from 'react';
import './contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
const Contact = () => {
	const ref = useRef();
	const form = useRef();
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const isInView = useInView(ref, { margin: '0px' });
	const variants = {
		initials: {
			y: 500,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
			},
		},
	};

	const sendEmail = (e) => {
		e.preventDefault();

		// You don't need to access form fields like this (formRef.name).
		console.log(form.current); // This will show the whole form element

		emailjs
			.sendForm('service_z6i259m', 'template_tjoqh3n', form.current, {
				publicKey: 'lYtXMll67k9mWW1Ke',
			})
			.then(
				() => {
					setError(false);
					setSuccess(true);
					console.log('SUCCESS!');
				},
				(error) => {
					setError(true);
					setSuccess(false);
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<motion.div
			className='contact'
			variants={variants}
			initial='initials' // Fix: The key must match the one in the `variants`
			whileInView='animate'
			ref={ref}
			viewport={{ once: true, amount: 0 }} // Ensures animation triggers when 50% in view
		>
			<motion.div
				className='textContainer'
				variants={variants}
			>
				<motion.h1 variants={variants}>Let's work together</motion.h1>
				<motion.div className='item'>
					<h2>Mail</h2>
					<span>oaungpaing56@gmail.com</span>
				</motion.div>
				<motion.div
					className='item'
					variants={variants}
				>
					<h2>Address</h2>
					<span>Yangon , Hlaing Township</span>
				</motion.div>
				<motion.div
					className='item'
					variants={variants}
				>
					<h2>Phone</h2>
					<span>+95 9765170900</span>
				</motion.div>
			</motion.div>
			<div className='formContainer'>
				<motion.div
					className='phoneSvg'
					initial={{ opacity: 1 }}
					whileInView={{ opacity: 0 }}
					transition={{ delay: 2, duration: 1 }}
					viewport={{ once: false, amount: 0.5 }}
				>
					<svg
						fill='#000000'
						width='350px'
						height='350px'
						viewBox='0 0 32.66 32.66'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>phone-call</title>
						<motion.path
							strokeWidth={0.2}
							fill='none'
							initial={{ pathLength: 0 }}
							animate={isInView && { pathLength: 1 }}
							transition={{ dueration: 3 }}
							d='M31.129 23.072c-0.118-0.743-0.365-1.409-0.719-2.004l0.014 0.026c-0.189-0.31-0.502-0.529-0.868-0.589l-0.007-0.001-8.969-1.424c-0.056-0.009-0.12-0.013-0.185-0.013-0.348 0-0.664 0.138-0.895 0.363l0-0c-0.605 0.609-1.094 1.334-1.429 2.14l-0.016 0.044c-3.506-1.573-6.252-4.319-7.785-7.729l-0.039-0.097c0.849-0.351 1.574-0.839 2.182-1.445l-0 0c0.226-0.226 0.366-0.539 0.366-0.885 0-0.069-0.006-0.137-0.017-0.204l0.001 0.007-1.423-8.97c-0.061-0.374-0.281-0.688-0.587-0.873l-0.006-0.003c-0.546-0.327-1.185-0.568-1.866-0.684l-0.033-0.005c-0.349-0.078-0.75-0.122-1.161-0.122-0.024 0-0.047 0-0.071 0l0.004-0h-0.010c-3.772 0.028-6.821 3.081-6.844 6.851v0.002c0.015 13.037 10.579 23.601 23.615 23.616h0.001c3.776-0.022 6.831-3.076 6.854-6.849v-0.002c0.001-0.029 0.001-0.063 0.001-0.098 0-0.373-0.039-0.737-0.114-1.088l0.006 0.034zM24.383 28.576c-11.657-0.013-21.103-9.459-21.116-21.115v-0.001c0.019-2.399 1.961-4.338 4.359-4.354h0.001c0.010-0 0.023-0 0.035-0 0.249 0 0.492 0.027 0.726 0.079l-0.022-0.004c0.233 0.039 0.438 0.093 0.635 0.163l-0.025-0.008 1.21 7.634c-0.516 0.379-1.135 0.651-1.807 0.768l-0.026 0.004c-0.591 0.107-1.033 0.618-1.033 1.232 0 0.146 0.025 0.286 0.071 0.416l-0.003-0.009c1.824 5.217 5.859 9.252 10.951 11.038l0.125 0.038c0.121 0.043 0.261 0.067 0.407 0.067 0.234 0 0.452-0.063 0.64-0.174l-0.006 0.003c0.311-0.184 0.532-0.492 0.597-0.854l0.001-0.008c0.121-0.698 0.393-1.317 0.78-1.846l-0.009 0.012 7.633 1.211c0.068 0.193 0.129 0.425 0.17 0.663l0.004 0.026c0.037 0.177 0.057 0.381 0.057 0.589 0 0.024-0 0.048-0.001 0.073l0-0.004c-0.013 2.4-1.954 4.343-4.352 4.359h-0.002zM18.063 6.136c-0.028-0.002-0.060-0.004-0.093-0.004-0.66 0-1.197 0.526-1.214 1.182l-0 0.002c-0.001 0.020-0.002 0.043-0.002 0.066 0 0.666 0.519 1.21 1.175 1.25l0.003 0c3.266 0.182 5.846 2.875 5.846 6.17 0 0.205-0.010 0.407-0.029 0.607l0.002-0.025c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0c0.013-0.176 0.020-0.381 0.020-0.588 0-4.626-3.622-8.406-8.185-8.659l-0.022-0.001zM17.938 3.248c0.43 0.022 10.523 0.66 10.523 12.136 0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0c0.015-0.239 0.023-0.519 0.023-0.8 0-7.325-5.681-13.324-12.878-13.829l-0.044-0.002c-0.028-0.002-0.061-0.004-0.094-0.004-0.662 0-1.201 0.529-1.216 1.188l-0 0.001c-0.001 0.019-0.002 0.041-0.002 0.063 0 0.668 0.524 1.213 1.184 1.247l0.003 0z'
						></motion.path>
					</svg>
				</motion.div>
				<motion.form
					ref={form}
					onSubmit={sendEmail}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 4, duration: 1 }}
					viewport={{ once: false, amount: 0.5 }}
				>
					<input
						type='text'
						required
						placeholder='Name'
						name='name'
					></input>
					<input
						type='email'
						required
						placeholder='Email'
						name='email'
					></input>
					<textarea
						required
						rows={8}
						placeholder='Message'
						name='message'
					></textarea>
					<button>Submit</button>
					{error && <p style={{ color: 'red' }}>Error</p>}
					{success && <p style={{ color: 'green' }}>Success</p>}
				</motion.form>
			</div>
		</motion.div>
	);
};

export default Contact;
