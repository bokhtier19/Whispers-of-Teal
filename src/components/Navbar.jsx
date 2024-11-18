import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='flex items-center bg-[#80af81] justify-around py-2'>
			<div>
				<Link to={'/'}>
					<img src={logo} alt='' className='w-16' />
				</Link>
			</div>

			<ul className='flex gap-4'>
				<Link className='link' to='/?cat=app'>
					<h6>App</h6>
				</Link>
				<Link className='link' to='/?cat=science'>
					<h6>Science</h6>
				</Link>
				<Link className='link' to='/?cat=movies'>
					<h6>Movies</h6>
				</Link>
				<Link className='link' to='/?cat=technology'>
					<h6>Technology</h6>
				</Link>
				<Link className='link' to='/?cat=transport'>
					<h6>Transport</h6>
				</Link>
			</ul>
			<div className='flex items-center gap-4'>
				<div>Login</div>
				<div className='write bg-white w-12 h-12 rounded-full text-[#1a5319] flex justify-center items-center hover:bg-[#d6efd8] hover:border-2 hover:border-white'>Write</div>
			</div>
		</div>
	);
};

export default Navbar;
