import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';

const Post = () => {
	// Sample post data
	const post = {
		id: 1,
		title: 'The young generation is loosing all sort of wilderness skills and shits possesed by their ancestors',
		username: 'John Doe',
		date: new Date(), // Current date
		img: 'https://picsum.photos/500/500', // Sample image URL
		post: 'This is a sample post content. It could be a short description or article content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		cat: 'tech',
	};

	const handleDelete = () => {
		console.log('Post deleted');
		// Redirect or handle the deletion logic if needed
	};

	return (
		<div className=' flex items-center justify-center'>
			<div className='container flex justify-between w-[90%]'>
				<div className='flex-col flex px-4 gap-8 w-2/3 mt-10 '>
					<div className='text-2xl uppercase font-semibold'>{post.title}</div>
					<div className='contentbox flex flex-col items-center gap-4'>
						{post.img && (
							<div className='img'>
								<img src={post.img} alt={post.title} />
							</div>
						)}
						<div className='author flex flex-col items-center gap-4 mr-4'>
							<div className='profile flex flex-col items-center gap-8'>
								<div className='flex items-center gap-8'>
									<p>{post.username}</p>
									<p>Posted 2 hours ago</p>

									{/* Simulating the condition for delete and edit */}
									<div className=' flex justify-around'>
										<Link to={`/write`} state={post}>
											<FaRegEdit size={20} />
										</Link>

										<Link onClick={handleDelete}>
											<MdDeleteOutline size={20} />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className='content tracking-wider leading-6 text-pretty w-5/6'>{post.post}</div>
						<div className='content tracking-wider leading-6 text-pretty w-5/6'>{post.post}</div>
						<div className='content tracking-wider leading-6 text-pretty w-5/6'>{post.post}</div>
					</div>
				</div>
				<div className='menucontainer flex w-1/3'>
					<Menu cat={post.cat} />
				</div>
			</div>
		</div>
	);
};

export default Post;
