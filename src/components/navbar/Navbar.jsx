import React from 'react';
import './navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from './sidebar/Sidebar';
const Navbar = () => {
	return (
		<div className='navbar'>
			{/* Sidebar */}
			<Sidebar />
			<div className='wrapper'>
				<motion.span
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1 }}
					className='span'
				>
					Aung Paing Oo (Albert)
				</motion.span>
				<div className='social'>
					<a href='https://www.facebook.com/app.o.3367?mibextid=ZbWKwL'>
						<img
							src='/facebook.png'
							alt='Facebook'
						/>
					</a>

					<a href='https://t.me/AungPaingOo2277'>
						{' '}
						<img
							src='/telegram.png'
							alt='Telegram'
						/>
					</a>

					<a href='https://discordapp.com/users/629537698972958730'>
						<img
							src='/discord.png'
							alt='Discord'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
