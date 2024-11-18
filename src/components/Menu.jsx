import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { posts } from '../assets/assets.js';

const Menu = () => {
	const navigate = useNavigate();

	return (
		<div className='Menu my-10 flex-col px-4 flex'>
			<h1 className='uppercase text-base font-bold'>Other Posts You May Like</h1>
			<div className='Menuposts mt-4'>
				{posts.slice(0, 3).map((post) => (
					<div className='posts' key={post.id}>
						{post.img && <img src={post.img} alt={post.title} className='w-1/2' />}

						<Link to={`/post/${post.id}`} className='LinkPost link'>
							<h1 className='font-bold uppercase text-base'>{post.title}</h1>
						</Link>

						<button onClick={() => navigate(`/post/${post.id}`)} className='my-2'>
							Read More
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Menu;
