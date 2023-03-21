import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';

// register component.
export default function Login() {
	// input values
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// on submit data
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:7070/login', { email, password });
			if(response.status === 200) {
				alert('User Logged in')
			} else {
				alert('User not logged in')
			}
		} catch (error) {
			console.log(error.message)
		}
	}

	// return component elemts
	return (
		<>
			<div className="container">
				<h2>Login Account</h2>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit">Register</button>
					<span>
						<p>
							Don't have an account? <Link to={"/register"}>Register</Link> here
						</p>
					</span>
				</form>
				<ToastContainer />
			</div>
		</>
	);
}
