import React from 'react';
import Logo from '../assets/Logo.jpg';

function Footer() {
	return (
		<div className='footer mt-24 flex items-center justify-center mb-2'>
			<div className='w-full bg-[#80af81] flex justify-between items-center py-2 px-20 font-bold text-lg'>
				<img src={Logo} alt='' className='w-10' />

				<span className='text-white'> Copyright &#169; Wispers of Teal, 2024</span>
			</div>
		</div>
	);
}

export default Footer;
