import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

// Importing components
import Layout from './components/Layout';

// importing pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// main
export default function App() {
	return (
		<>
			<Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/dashboard'} element={<Dashboard />} />
                </Route>
            </Routes>
		</>
	);
};
