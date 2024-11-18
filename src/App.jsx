import React from 'react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Write from './pages/Write';
import Post from './pages/Post';

const App = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/write' element={<Write />} />
				<Route path='/post' element={<Post />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
