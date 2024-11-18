<div class='app flex justify-center'>
	<div class="container bg-[#d6efd8] bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')]">
		{/* <!-- COMMON CLASSES --> */}
		<a class='link text-white no-underline'>
			<h6 class='font-normal flex items-center justify-center'>Header</h6>
			<h1 class='no-underline'>Link Title</h1>
		</a>

		{/* <!-- Button --> */}
		<button class='flex w-max-content border-none bg-white text-[#1a5319] py-1 px-2 cursor-pointer border-[#80af81] mb-2 hover:bg-[#80af81] hover:text-white'>Button Text</button>

		{/* <!-- LOGIN AND REGISTRATION --> */}
		<div class='auth flex flex-col items-center justify-center h-screen'>
			<h2 class='text-center text-[#1a5319] mb-8'>Login</h2>
			<div class='login bg-white flex flex-col items-center gap-10 py-12 px-16'>
				<input class='border-b-2 border-[#508d4e]' placeholder='Enter Text' />
				<button class='bg-[#508d4e] text-white cursor-pointer border-2 border-white hover:bg-[#d6efd8] hover:text-[#508d4e] hover:border-[#508d4e]'>Submit</button>
				<p class='text-red-500 text-center'>Error Message</p>
			</div>
		</div>

		{/* <!-- NAVBAR --> */}
		<div class='navbar'>
			<div class='container flex justify-between items-center bg-[#80af81] py-2 px-2'>
				<div class='logo'>
					<img class='w-30' src='logo.png' />
				</div>
				<div class='links flex justify-center items-center gap-2'>
					<div class='profile flex items-center text-lg font-thin ml-2'>Profile</div>
					<a href='#' class='write bg-white w-12 h-12 rounded-full text-[#1a5319] flex justify-center items-center hover:bg-[#d6efd8] hover:border-2 hover:border-white'>
						+
					</a>
				</div>
			</div>
		</div>

		{/* <!-- FOOTER --> */}
		<div class='footer mt-24 flex items-center justify-center mb-2'>
			<div class='container bg-[#80af81] flex justify-between items-center py-2 px-2 font-bold text-lg'>
				<img class='h-10' src='footer-logo.png' />
				<span class='text-white'>Footer Content</span>
			</div>
		</div>

		{/* <!-- HOME PAGE --> */}
		<div class='home flex justify-center mt-24'>
			<div class='posts flex flex-col gap-24 w-9/10'>
				<div class='post flex justify-between gap-12'>
					<div class='image flex-0 overflow-hidden rounded-lg shadow-md'>
						<img class='w-full h-full object-cover rounded-lg hover:opacity-80 cursor-pointer' src='image.jpg' />
					</div>
					<div class='content flex flex-col justify-between gap-8'>
						<a class='title text-[#1a5319] text-3xl mb-4 hover:text-[#80af81]' href='#'>
							Post Title
						</a>
						<button class='bg-white text-[#1a5319] py-2 px-4 cursor-pointer border-2 border-[#80af81] mb-2 hover:bg-[#80af81] hover:text-white'>Button Text</button>
					</div>
				</div>
			</div>
		</div>

		{/* <!-- POST PAGE --> */}
		<div class='post flex items-center'>
			<div class='container flex justify-between gap-8 w-11/12'>
				<div class='postcontainer flex flex-col w-2/3'>
					<h1 class='title text-3xl my-12'>Post Title</h1>
					<div class='contentbox flex flex-col gap-12'>
						<div class='author flex items-center gap-4'>
							<div class='profile flex items-center gap-4 mr-4'>
								<div class='name flex items-center gap-8'>
									<p>Author Name</p>
								</div>
							</div>
						</div>
						<div class='img flex'>
							<img class='w-full h-72 object-cover' src='post-image.jpg' />
						</div>
					</div>
				</div>
				<div class='menucontainer flex w-1/3'></div>
			</div>
		</div>

		{/* <!-- WRITE PAGE --> */}
		<div class='add flex justify-center'>
			<div class='addcontainer mt-12 flex gap-10 w-9/10'>
				<div class='writearea w-4/5'>
					<input class='title w-full border-2 border-[#508d4e] mb-2' placeholder='Post Title' />
					<div class='editorcontainer bg-white h-72 border-2 border-[#508d4e]'>
						<textarea class='editor w-full h-full overflow-scroll' placeholder='Write your post...'></textarea>
					</div>
				</div>
				<div class='menuarea flex flex-col items-center w-1/5 gap-5'>
					<div class='item w-full p-4 border-2 border-[#508d4e]'>
						<h1 class='text-[#508d4e] text-xl'>Category</h1>
						<div class='cat text-[#508d4e]'>Category Name</div>
						<div class='buttons flex justify-between mt-4'>
							<button class='bg-[#508d4e] text-white'>Save</button>
							<button class='border-2 border-[#508d4e] hover:bg-white hover:text-[#508d4e]'>Publish</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* <!-- ABOUT PAGE --> */}
		<div class='about flex justify-center items-center'>
			<div class='container flex justify-center items-center w-7/10 leading-10'>
				<div class='address flex flex-col items-center mt-24'>About Us</div>
			</div>
		</div>
	</div>
</div>;
