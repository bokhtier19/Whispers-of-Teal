import React from 'react';
import { posts } from '../assets/assets.js';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const Home = () => {
	return (
		<div className='flex justify-center mt-10'>
			<div className='flex flex-col gap-10 w-2/3'>
				{posts.map((post) => (
					<div className='flex-1 flex gap-4 items-center' key={post.id}>
						<div className='flex-1 flex w-full h-3/4  overflow-hidden rounded-lg shadow-md'>
							<img src={post.img} alt='' className='object-cover h-full w-full rounded-lg hover:scale-105 cursor-pointer' />
						</div>
						<div className='flex flex-1 flex-col justify-between gap-8'>
							<Link className='link' to={'/post'}>
								<p className='title text-[#1a5319] text-3xl mb-4 hover:text-[#80af81]'>{post.title}</p>
							</Link>

							<p className='text-start'> {post.post.length > 100 ? `${post.post.slice(0, 100)}...` : post.post} </p>
							<button className='flex rounded items-center gap-4  bg-[#80af81] text-[#1a5319] py-2 px-4 cursor-pointer border-[#80af81] mb-2 hover:bg-[#80af81] hover:text-white'>
								Read More <FaArrowRightLong />
							</button>
							<hr />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
