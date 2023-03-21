import React from 'react';
import {Routes, Route} from 'react-router-dom';

// Importing components
import Layout from './components/Layout';

// importing pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

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
