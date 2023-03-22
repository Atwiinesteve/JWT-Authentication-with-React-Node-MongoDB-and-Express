import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import axios from 'axios';

// register component.
export default function Login() {
	// input values
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// missing input
	const missingInput = () => {
		toast.error('Login Failed. Please use correct details', {
			position: toast.POSITION.TOP_RIGHT,
		});
	};

	// success message
	const successMessage = () => {
		toast.success("User Logged In..", {
			position: toast.POSITION.TOP_RIGHT,
		});
	};

	// on submit data
	function handleSubmit(e) {
		e.preventDefault();
		try {
			fetch("http://localhost:7070/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify({ email, password }),
			})
				.then((response) => {
					if (response.ok) {
						successMessage();
					} else {
						missingInput();
					}
				})
				.catch((error) => {
					if (error) {
						missingInput();
					}
				});
			// if (response.ok) {
			// 	alert("User Logged in");
			// } else {
			// 	missingInput();
			// }
		} catch (error) {
			console.log(error.message);
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
					<button type="submit">Login</button>
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
